import { useRef, useState } from 'react';
import ResumeTemplateOne from '~/templates/ResumeTemplateOne';
import ResumeTemplateTwo from '~/templates/ResumeTemplateTwo';
import ResumeTemplateThree from '~/templates/ResumeTemplateThree';
import ResumeTemplateFour from '~/templates/ResumeTemplateFour';
import ResumeTemplateFive from '~/templates/ResumeTemplateFive';
import ResumeTemplateSix from '~/templates/ResumeTemplateSix';
import ResumeTemplateSeven from '~/templates/ResumeTemplateSeven';
import type { ResumeData } from '~/types/resume.type';
import { TEMPLATE_NAMES } from '~/constants/resume.constants';

interface ResumePreviewProps {
	data: ResumeData;
	template: string;
}

const getTemplateComponent = (data: ResumeData, template: string) => {
	switch (template) {
		case TEMPLATE_NAMES.CLASSIC:
			return <ResumeTemplateTwo data={data} />;
		case TEMPLATE_NAMES.MODERN:
			return <ResumeTemplateThree data={data} />;
		case TEMPLATE_NAMES.PROFESSIONAL:
			return <ResumeTemplateFour data={data} />;
		case TEMPLATE_NAMES.CREATIVE:
			return <ResumeTemplateFive data={data} />;
		case TEMPLATE_NAMES.CODE:
			return <ResumeTemplateSix data={data} />;
		case TEMPLATE_NAMES.MODERN_BLUE:
			return <ResumeTemplateSeven data={data} />;
		case TEMPLATE_NAMES.MINIMAL:
		default:
			return <ResumeTemplateOne data={data} />;
	}
};

export default function ResumePreview({ data, template }: ResumePreviewProps) {
	const resumeRef = useRef<HTMLDivElement>(null);
	const [isGenerating, setIsGenerating] = useState(false);
	const pdfUrl = `/pdf?template=${template}&data=${encodeURIComponent(
		JSON.stringify(data)
	)}`;

	const handleDownload = () => {
		setIsGenerating(true);
		// Reset loading state after 30 seconds (matching the Puppeteer timeout)
		setTimeout(() => {
			setIsGenerating(false);
		}, 3000);

		// Trigger the download
		window.location.href = pdfUrl;
	};

	return (
		<div className='space-y-4'>
			<div className='flex justify-between items-center'>
				<h2 className='text-lg font-medium text-gray-900'>Resume Preview</h2>
				<button
					onClick={handleDownload}
					disabled={isGenerating}
					className={`inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors ${
						isGenerating ? 'opacity-75 cursor-not-allowed' : ''
					}`}
				>
					{isGenerating && (
						<svg
							className='animate-spin h-5 w-5 text-white'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
						>
							<circle
								className='opacity-25'
								cx='12'
								cy='12'
								r='10'
								stroke='currentColor'
								strokeWidth='4'
							></circle>
							<path
								className='opacity-75'
								fill='currentColor'
								d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
							></path>
						</svg>
					)}
					{isGenerating ? 'Generating PDF...' : 'Download PDF'}
				</button>
			</div>

			<div
				ref={resumeRef}
				className='bg-white rounded-lg shadow p-8'
				style={{ width: '210mm', minHeight: '297mm' }}
			>
				{getTemplateComponent(data, template)}
			</div>
		</div>
	);
}
