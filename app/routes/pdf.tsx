import type { LoaderFunctionArgs } from '@remix-run/node';
import { LoaderFunction } from '@remix-run/node';
import puppeteer from 'puppeteer';

export const handle = {
	disableGlobalLayout: true,
};

export const loader: LoaderFunction = async ({
	request,
}: LoaderFunctionArgs) => {
	const url = new URL(request.url);
	const pdfTemplateUrl = `http://localhost:5173/pdf-template${url.search}`;

	const browser = await puppeteer.launch({
		headless: true,
		args: ['--no-sandbox', '--disable-setuid-sandbox'],
	});

	try {
		const page = await browser.newPage();

		// Set viewport to A4 size in pixels (assuming 96 DPI)
		await page.setViewport({
			width: 794, // A4 width in pixels
			height: 1123, // A4 height in pixels
			deviceScaleFactor: 2, // For better quality
		});

		// Set a reasonable timeout for page load
		await page.setDefaultNavigationTimeout(5000);

		// Wait until the network is idle and all content is loaded
		await page.goto(pdfTemplateUrl, {
			waitUntil: ['networkidle0', 'domcontentloaded', 'load'],
		});

		// Add CSS to ensure proper page breaks and sizing
		await page.addStyleTag({
			content: `
				@page {
					size: A4;
					margin: 0;
				}
				* {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
				}
				html {
					width: 210mm;
				}
				body {
					width: 210mm;
					min-height: 297mm;
					margin: 0;
					padding: 0;
					display: flex;
					flex-direction: column;
				}
				#root {
					flex: 1;
					display: flex;
					flex-direction: column;
					width: 210mm;
				}
				#root > div {
					min-height: 297mm;
					display: flex;
					flex-direction: column;
				}
				#root > div > div:last-child {
					flex: 1;
					display: flex;
					flex-direction: column;
				}
				#root > div > div:last-child > section:last-child {
					flex: 1;
					display: flex;
					flex-direction: column;
				}
				@media print {
					html, body {
						width: 210mm;
						height: 297mm;
					}
					#root {
						height: 100%;
					}
					#root > div {
						min-height: 297mm;
						page-break-after: always;
					}
					#root > div:last-child {
						height: 297mm;
					}
				}
			`,
		});

		// Generate PDF with high quality settings
		const pdfBuffer = await page.pdf({
			format: 'A4',
			printBackground: true,
			margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' },
			preferCSSPageSize: true,
			scale: 1,
		});

		return new Response(pdfBuffer, {
			status: 200,
			headers: {
				'Content-Type': 'application/pdf',
				'Content-Disposition': `attachment; filename="resume.pdf"`,
			},
		});
	} catch (error) {
		console.error(`Error generating PDF:`, error);
		throw error;
	} finally {
		await browser.close();
	}
};
