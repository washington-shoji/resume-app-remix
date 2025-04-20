import { ResumeData } from '~/types/resume.type';

interface Props {
	data: ResumeData;
}

export default function ResumeTemplateTwo({ data }: Props) {
	return (
		<div className='max-w-[800px] mx-auto p-8 font-light bg-white dark:bg-gray-900'>
			<div className='grid grid-cols-1 md:grid-cols-12 gap-8'>
				{/* Left Column - Main Content */}
				<div className='md:col-span-7 space-y-8'>
					{/* Header */}
					<header>
						<h1 className='text-3xl tracking-wide text-gray-600 dark:text-gray-300'>
							{data.personalInfo.firstName}
							<span className='block text-gray-800 dark:text-gray-100'>
								{data.personalInfo.lastName}
							</span>
						</h1>
						<p className='text-gray-600 dark:text-gray-400 mt-2'>
							{data.personalInfo.professionalTitle}
						</p>
					</header>

					{/* Summary */}
					<section>
						<h2 className='text-sm tracking-wider text-gray-600 dark:text-gray-400 uppercase border-b border-gray-300 dark:border-gray-700 pb-1 mb-4'>
							Summary
						</h2>
						<p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
							{data.summary}
						</p>
					</section>

					{/* Work History */}
					<section>
						<h2 className='text-sm tracking-wider text-gray-600 dark:text-gray-400 uppercase border-b border-gray-300 dark:border-gray-700 pb-1 mb-4'>
							Work History
						</h2>
						<div className='space-y-6'>
							{data.workExperience.map((work) => (
								<div key={work.id}>
									<div className='flex justify-between items-start mb-1'>
										<h3 className='font-medium text-gray-800 dark:text-gray-200'>
											{work.position}
										</h3>
										<span className='text-sm text-gray-600 dark:text-gray-400'>
											{work.startDate} - {work.endDate}
										</span>
									</div>
									<p className='text-sm text-gray-600 dark:text-gray-400 mb-2'>
										{work.company}
									</p>
									<p className='text-sm text-gray-700 dark:text-gray-300'>
										{work.description}
									</p>
								</div>
							))}
						</div>
					</section>
				</div>

				{/* Right Column - Sidebar */}
				<div className='md:col-span-5 space-y-8'>
					{/* Education */}
					<section>
						<h2 className='text-sm tracking-wider text-gray-600 dark:text-gray-400 uppercase border-b border-gray-300 dark:border-gray-700 pb-1 mb-4'>
							Education
						</h2>
						<div className='space-y-4'>
							{data.education.map((edu) => (
								<div key={edu.id}>
									<h3 className='font-medium text-gray-800 dark:text-gray-200'>
										{edu.degree}
									</h3>
									<p className='text-sm text-gray-600 dark:text-gray-400'>
										{edu.institution}
									</p>
									<p className='text-sm text-gray-600 dark:text-gray-400'>
										{edu.startDate} - {edu.endDate}
									</p>
								</div>
							))}
						</div>
					</section>

					{/* Skills */}
					<section>
						<h2 className='text-sm tracking-wider text-gray-600 dark:text-gray-400 uppercase border-b border-gray-300 dark:border-gray-700 pb-1 mb-4'>
							Skills
						</h2>
						<div className='space-y-2'>
							{data.skills.map((skill) => (
								<div
									key={skill.id}
									className='flex justify-between items-center'
								>
									<span className='text-sm text-gray-700 dark:text-gray-300'>
										{skill.name}
									</span>
									<span className='text-xs text-gray-600 dark:text-gray-400'>
										{skill.level}
									</span>
								</div>
							))}
						</div>
					</section>

					{/* Contact Info */}
					<section>
						<h2 className='text-sm tracking-wider text-gray-600 dark:text-gray-400 uppercase border-b border-gray-300 dark:border-gray-700 pb-1 mb-4'>
							Contact
						</h2>
						<div className='space-y-2'>
							{data.contactInfo.map((contact) => (
								<div
									key={contact.id}
									className='text-sm text-gray-700 dark:text-gray-300'
								>
									{contact.value}
								</div>
							))}
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
