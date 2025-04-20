import { ResumeData } from '~/types/resume.type';

interface Props {
	data: ResumeData;
}

export default function ResumeTemplateSix({ data }: Props) {
	return (
		<div className='min-h-screen bg-gray-900 text-gray-300 p-8 font-mono'>
			<div className='max-w-4xl mx-auto'>
				{/* Header */}
				<header className='mb-8'>
					<h1 className='text-3xl'>
						{data.personalInfo.firstName} {data.personalInfo.lastName} {'{'}
					</h1>
					<div className='ml-4 text-gray-500'>
						{/* Professional details as comments */}
						<div>{`// ${data.personalInfo.professionalTitle}`}</div>
						{data.contactInfo.map((contact) => (
							<div key={contact.id}>{`// ${contact.value}`}</div>
						))}
					</div>
				</header>

				{/* About Section */}
				<section className='mb-8'>
					<div className='text-gray-400'>About Me {'{'}</div>
					<div className='ml-4 mb-4'>{data.summary}</div>
					<div className='text-gray-400'>{'}'}</div>
				</section>

				{/* Education Section */}
				<section className='mb-8'>
					<div className='text-gray-400'>Education {'{'}</div>
					<div className='ml-4'>
						{data.education.map((edu) => (
							<div key={edu.id} className='mb-4'>
								<div>
									{edu.degree} ({edu.institution});
								</div>
								<div className='text-gray-500'>
									{`// ${edu.startDate} - ${edu.endDate}`}
								</div>
							</div>
						))}
					</div>
					<div className='text-gray-400'>{'}'}</div>
				</section>

				{/* Work Experience Section */}
				<section className='mb-8'>
					<div className='text-gray-400'>Work Experience {'{'}</div>
					<div className='ml-4'>
						{data.workExperience.map((work) => (
							<div key={work.id} className='mb-6'>
								<div className='text-gray-400'>
									Job Title ({work.startDate}-{work.endDate}) {'{'}
								</div>
								<div className='ml-4'>
									<div>Company: {work.company};</div>
									<div>Position: {work.position};</div>
									<div className='text-gray-500'>{`// Responsibilities`}</div>
									<div className='ml-4'>{work.description}</div>
								</div>
								<div className='text-gray-400'>{'}'}</div>
							</div>
						))}
					</div>
					<div className='text-gray-400'>{'}'}</div>
				</section>

				{/* Skills Section */}
				<section className='mb-8'>
					<div className='text-gray-400'>Additional Skills {'{'}</div>
					<div className='ml-4'>
						{data.skills.map((skill) => (
							<div key={skill.id}>
								{skill.name}: {skill.level};
							</div>
						))}
					</div>
					<div className='text-gray-400'>{'}'}</div>
				</section>

				<div className='text-gray-400'>{'}'};</div>
			</div>
		</div>
	);
}
