import { useSearchParams } from '@remix-run/react';
import type { ResumeData } from '~/types/resume.type';
import ResumeTemplateOne from '~/templates/ResumeTemplateOne';
import ResumeTemplateTwo from '~/templates/ResumeTemplateTwo';
import ResumeTemplateThree from '~/templates/ResumeTemplateThree';
import ResumeTemplateFour from '~/templates/ResumeTemplateFour';
import ResumeTemplateFive from '~/templates/ResumeTemplateFive';
import ResumeTemplateSix from '~/templates/ResumeTemplateSix';
import ResumeTemplateSeven from '~/templates/ResumeTemplateSeven';
import { TEMPLATE_NAMES } from '~/constants/resume.constants';

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

export default function PdfTemplate() {
	const [searchParams] = useSearchParams();
	const template = searchParams.get('template') || TEMPLATE_NAMES.MINIMAL;
	const data = searchParams.get('data');
	const resumeData: ResumeData = data ? JSON.parse(data) : {};

	return <div>{getTemplateComponent(resumeData, template)}</div>;
}

// Export the handle separately
export const handle = {
	disableGlobalLayout: true,
};
