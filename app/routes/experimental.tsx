import { useState } from 'react';
import { mockResumeData } from '~/data/mockResume';
import ResumeTemplateOne from '~/templates/ResumeTemplateOne';
import { ResumeData } from '~/types/resume.type';

export default function Experimental() {
	const [resumeData] = useState<ResumeData>(mockResumeData);

	return <ResumeTemplateOne data={resumeData} />;
}
