import { Form } from '@remix-run/react';
import { useState } from 'react';
import { ResumeData } from '../types/resume.type';
import PersonalInfoForm from '~/components/PersonalInfoForm';
import SkillsForm from '~/components/SkillsForm';
import WorkExperienceForm from '~/components/WorkExperienceForm';
import EducationForm from '~/components/EducationForm';
import ResumePreview from '~/components/ResumePreview';
import ExecutiveSummaryForm from '~/components/ExecutiveSummaryForm';
import ContactInfoForm from '~/components/ContactInfoForm';
import { mockResumeData } from '~/data/mockResume';

export default function ResumeBuilder() {
	const [data] = useState<ResumeData>(mockResumeData);
	const [resumeData, setResumeData] = useState<ResumeData>({
		personalInfo: {
			firstName: data.personalInfo.firstName,
			lastName: data.personalInfo.lastName,
			professionalTitle: data.personalInfo.professionalTitle,
		},
		summary: data.summary || '',
		contactInfo: data.contactInfo || [],
		skills: data.skills || [],
		workExperience: data.workExperience || [],
		education: data.education || [],
	});

	const url = 'http://localhost:3003/resumes';

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(resumeData),
		});
	};

	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
			<div className='space-y-8 bg-white shadow-lg rounded-lg p-8'>
				<Form onSubmit={handleSubmit} className='space-y-8'>
					<PersonalInfoForm
						data={resumeData.personalInfo}
						onChange={(data) =>
							setResumeData({ ...resumeData, personalInfo: data })
						}
					/>

					<ContactInfoForm
						contactInfo={resumeData.contactInfo}
						onChange={(contactInfo) =>
							setResumeData({ ...resumeData, contactInfo })
						}
					/>

					<ExecutiveSummaryForm
						data={{ summary: resumeData.summary }}
						onChange={(data) =>
							setResumeData({ ...resumeData, summary: data.summary })
						}
					/>

					<SkillsForm
						skills={resumeData.skills}
						onChange={(skills) => setResumeData({ ...resumeData, skills })}
					/>

					<WorkExperienceForm
						experiences={resumeData.workExperience}
						onChange={(experiences) =>
							setResumeData({ ...resumeData, workExperience: experiences })
						}
					/>

					<EducationForm
						education={resumeData.education}
						onChange={(education) =>
							setResumeData({ ...resumeData, education })
						}
					/>

					<div className='flex justify-end space-x-4'>
						<button
							type='button'
							className='inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors'
						>
							Preview
						</button>
						<button
							type='submit'
							className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'
						>
							Save Resume
						</button>
					</div>
				</Form>
			</div>

			<div className='bg-white shadow-lg rounded-lg p-8'>
				<ResumePreview data={resumeData} />
			</div>
		</div>
	);
}
