import { Form } from '@remix-run/react';
import { useState } from 'react';
import { ResumeData } from '../types/resume.type';
import PersonalInfoForm from '~/components/PersonalInfoForm';
import SkillsForm from '~/components/SkillsForm';
import WorkExperienceForm from '~/components/WorkExperienceForm';
import EducationForm from '~/components/EducationForm';
import ResumePreview from '~/components/ResumePreview';

export default function ResumeBuilder() {
	const [resumeData, setResumeData] = useState<ResumeData>({
		personalInfo: {},
		skills: [],
		workExperience: [],
		education: [],
		summary: '',
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
			<div className='space-y-8'>
				<Form onSubmit={handleSubmit} className='space-y-8'>
					<PersonalInfoForm
						data={resumeData.personalInfo}
						onChange={(data) =>
							setResumeData({ ...resumeData, personalInfo: data })
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

					<div>
						<label
							htmlFor='executive-summary'
							className='block text-sm font-medium text-gray-700'
						>
							Executive Summary
						</label>
						<textarea
							id='executive-summary'
							className='form-input mt-1'
							rows={4}
							value={resumeData.summary}
							onChange={(e) =>
								setResumeData({ ...resumeData, summary: e.target.value })
							}
						/>
					</div>

					<div className='flex justify-end space-x-4'>
						<button type='button' className='btn-secondary'>
							Preview
						</button>
						<button type='submit' className='btn-primary'>
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
