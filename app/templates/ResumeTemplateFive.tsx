import { ResumeData } from '~/types/resume.type';

interface Props {
	data: ResumeData;
}

export default function ResumeTemplateFive({ data }: Props) {
	return (
		<div className='max-w-[800px] mx-auto p-8 bg-white dark:bg-gray-900'>
			{/* Header Section */}
			<header className='mb-16'>
				<h1 className='text-6xl font-light mb-2'>
					<div className='text-blue-600 dark:text-blue-400'>
						{data.personalInfo.firstName}
					</div>
					<div className='text-gray-400 dark:text-gray-500 tracking-wider'>
						{data.personalInfo.lastName}
					</div>
				</h1>
				<p className='text-blue-600 dark:text-blue-400 uppercase tracking-wide text-sm'>
					{data.personalInfo.professionalTitle}
				</p>
			</header>

			{/* Summary */}
			<div className='mb-16 text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl'>
				{data.summary}
			</div>

			<div className='grid grid-cols-1 md:grid-cols-12 gap-12'>
				{/* Left Column */}
				<div className='md:col-span-6'>
					{/* Education Section */}
					<section className='mb-12'>
						<div className='flex items-center mb-8'>
							<span className='text-5xl text-blue-600 dark:text-blue-400 font-light mr-4'>
								E
							</span>
							<h2 className='text-blue-600 dark:text-blue-400 uppercase tracking-wider'>
								ducation
							</h2>
						</div>
						<div className='space-y-8'>
							{data.education.map((edu) => (
								<div
									key={edu.id}
									className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:border-t-2 before:border-l-2 before:border-blue-600 dark:before:border-blue-400"
								>
									<div className='uppercase text-sm text-gray-500 dark:text-gray-400 mb-1'>
										{edu.institution}
									</div>
									<div className='text-sm text-gray-400 dark:text-gray-500 mb-2'>
										{edu.degree}
									</div>
									<div className='text-sm text-gray-400 dark:text-gray-500 mb-2'>
										{edu.startDate} - {edu.endDate}
									</div>
									<p className='text-sm text-gray-600 dark:text-gray-400'>
										{edu.description}
									</p>
								</div>
							))}
						</div>
					</section>

					{/* Language Section */}
					<section>
						<div className='flex items-center mb-8'>
							<span className='text-5xl text-blue-600 dark:text-blue-400 font-light mr-4'>
								L
							</span>
							<h2 className='text-blue-600 dark:text-blue-400 uppercase tracking-wider'>
								anguage
							</h2>
						</div>
						<div className='space-y-4'>
							{data.skills.slice(0, 3).map((skill) => (
								<div key={skill.id}>
									<div className='text-sm text-gray-600 dark:text-gray-400 uppercase mb-1'>
										{skill.name}
									</div>
									<div className='h-2 bg-gray-200 dark:bg-gray-700 rounded-full'>
										<div
											className='h-full bg-blue-600 dark:bg-blue-400 rounded-full'
											style={{
												width:
													skill.level === 'Expert'
														? '100%'
														: skill.level === 'Advanced'
														? '75%'
														: skill.level === 'Intermediate'
														? '50%'
														: '25%',
											}}
										/>
									</div>
								</div>
							))}
						</div>
					</section>
				</div>

				{/* Right Column */}
				<div className='md:col-span-6'>
					{/* Contact Section */}
					<section className='mb-12'>
						<div className='flex items-center mb-8'>
							<span className='text-5xl text-blue-600 dark:text-blue-400 font-light mr-4'>
								C
							</span>
							<h2 className='text-blue-600 dark:text-blue-400 uppercase tracking-wider'>
								ontact
							</h2>
						</div>
						<div className='space-y-4'>
							{data.contactInfo.map((contact) => (
								<div key={contact.id}>
									<div className='uppercase text-sm text-gray-500 dark:text-gray-400 mb-1'>
										{contact.label}
									</div>
									<div className='text-gray-600 dark:text-gray-300'>
										{contact.value}
									</div>
								</div>
							))}
						</div>
					</section>

					{/* Work Experience Section */}
					<section>
						<div className='flex items-center mb-8'>
							<span className='text-5xl text-blue-600 dark:text-blue-400 font-light mr-4'>
								W
							</span>
							<h2 className='text-blue-600 dark:text-blue-400 uppercase tracking-wider'>
								ork
							</h2>
						</div>
						<div className='space-y-8'>
							{data.workExperience.map((work) => (
								<div
									key={work.id}
									className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:border-t-2 before:border-l-2 before:border-blue-600 dark:before:border-blue-400"
								>
									<div className='uppercase text-sm text-gray-500 dark:text-gray-400 mb-1'>
										{work.company}
									</div>
									<div className='text-sm text-gray-400 dark:text-gray-500 mb-2'>
										{work.position}
									</div>
									<div className='text-sm text-gray-400 dark:text-gray-500 mb-2'>
										{work.startDate} - {work.endDate}
									</div>
									<p className='text-sm text-gray-600 dark:text-gray-400'>
										{work.description}
									</p>
								</div>
							))}
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
