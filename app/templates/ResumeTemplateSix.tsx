import { ResumeData } from '~/types/resume.type';

interface Props {
	data: ResumeData;
}

export default function ResumeTemplateSix({ data }: Props) {
	return (
		<div className='max-w-[800px] mx-auto p-8 font-mono bg-[#1E1E1E] text-[#D4D4D4]'>
			<div className='text-3xl text-gray-400'>
				{data.personalInfo.firstName} {data.personalInfo.lastName} {'= {'}
			</div>

			{/* Header Section */}
			<header className='mb-12'>
				<div>
					{/* Personal Info */}
					<div className='mb-4 text-xl font-semibold'>
						<div className='text-[#608B4E]'>
							{'//'} {data.personalInfo.professionalTitle}
						</div>
					</div>

					{/* Contact Info */}
					<div className='mb-4'>
						<div className='text-[#608B4E]'>{'// Contact Information'}</div>
						<div className='ml-4'>contact = {'['}</div>
						{data.contactInfo.map((contact) => (
							<div key={contact.id} className='ml-8'>
								{'{'} {contact.label}: {contact.value} {'}'},
							</div>
						))}
						<div className='ml-4'>{']'}</div>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<div className='space-y-8'>
				{/* Summary Section */}
				{data.summary && (
					<section>
						<div className='text-[#608B4E]'>{'// Professional Summary'}</div>
						<div className='ml-4 text-[#CE9178] whitespace-pre-wrap'>
							{data.summary}
						</div>
					</section>
				)}

				{/* Skills Section */}
				{data.skills.length > 0 && (
					<section>
						<div className='text-[#608B4E]'>{'// Technical Skills'}</div>
						<div className='ml-4'>skills = {'['}</div>
						{data.skills.map((skill) => (
							<div key={skill.id} className='ml-8'>
								{'{'} {skill.name}: {skill.level} {'}'},
							</div>
						))}
						<div className='ml-4'>{']'}</div>
					</section>
				)}

				{/* Work Experience Section */}
				{data.workExperience.length > 0 && (
					<section>
						<div className='text-[#608B4E]'>{'// Work Experience'}</div>
						<div className='ml-4'>experience = {'['}</div>
						{data.workExperience.map((exp) => (
							<div key={exp.id} className='ml-8 mb-4'>
								{'{'}
								<div className='ml-4'>position: {exp.position},</div>
								<div className='ml-4'>company: {exp.company},</div>
								<div className='ml-4'>
									period: {exp.startDate} - {exp.endDate},
								</div>
								<div className='ml-4'>description: {exp.description}</div>
								{'}'},
							</div>
						))}
						<div className='ml-4'>{']'}</div>
					</section>
				)}

				{/* Education Section */}
				{data.education.length > 0 && (
					<section>
						<div className='text-[#608B4E]'>{'// Education'}</div>
						<div className='ml-4'>education = {'['}</div>
						{data.education.map((edu) => (
							<div key={edu.id} className='ml-8 mb-4'>
								{'{'}
								<div className='ml-4'>degree: {edu.degree},</div>
								<div className='ml-4'>field: {edu.field},</div>
								<div className='ml-4'>institution: {edu.institution},</div>
								<div className='ml-4'>
									period: {edu.startDate} - {edu.endDate},
								</div>
								{edu.description && (
									<div className='ml-4'>description: {edu.description}</div>
								)}
								{'}'},
							</div>
						))}
						<div className='ml-4'>{']'}</div>
					</section>
				)}
				<div className='text-3xl text-gray-400'>{'}'};</div>
			</div>
		</div>
	);
}
