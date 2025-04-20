import { ResumeData } from '~/types/resume.type';

interface Props {
	data: ResumeData;
}

export default function ResumeTemplateSeven({ data }: Props) {
	return (
		<div className='min-h-screen bg-white'>
			{/* Header Section with Background */}
			<div className='bg-[#1a1f2e] text-white p-8 pb-16'>
				<div className='max-w-5xl mx-auto flex gap-8 items-center'>
					{/* Profile Image - Note: This would need to be added to the data structure */}
					<div className='w-32 h-32 rounded-lg overflow-hidden bg-gray-700'>
						{/* Placeholder for profile image */}
					</div>

					<div>
						<h1 className='text-4xl font-light tracking-wide text-[#3dd2f3]'>
							{data.personalInfo.firstName} {data.personalInfo.lastName}
						</h1>
						<p className='mt-2 text-lg bg-gradient-to-r from-blue-500 to-blue-400 inline-block px-4 py-1 rounded-full'>
							{data.personalInfo.professionalTitle}
						</p>

						<div className='mt-4 space-y-1 text-sm'>
							{data.contactInfo.map((contact) => (
								<div key={contact.id} className='text-gray-300'>
									{contact.value}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className='max-w-5xl mx-auto -mt-8'>
				<div className='bg-white shadow-xl rounded-lg p-8'>
					<div className='grid grid-cols-3 gap-8'>
						{/* Left Column */}
						<div className='col-span-1 space-y-8'>
							{/* About Section */}
							<section>
								<h2 className='text-lg font-semibold mb-3'>About me</h2>
								<p className='text-gray-600 text-sm leading-relaxed'>
									{data.summary}
								</p>
							</section>

							{/* Skills Section */}
							<section>
								<h2 className='text-lg font-semibold mb-3'>Skills</h2>
								<div className='space-y-2'>
									{data.skills.map((skill) => (
										<div key={skill.id} className='flex items-center gap-2'>
											<div className='text-sm font-medium'>{skill.name}</div>
											<div className='flex-1'>
												<div className='h-1.5 bg-gray-200 rounded-full'>
													<div
														className='h-full bg-[#3dd2f3] rounded-full'
														style={{
															width: `${
																skill.level === 'Expert'
																	? '100%'
																	: skill.level === 'Advanced'
																	? '75%'
																	: skill.level === 'Intermediate'
																	? '50%'
																	: '25%'
															}`,
														}}
													/>
												</div>
											</div>
										</div>
									))}
								</div>
							</section>
						</div>

						{/* Right Column */}
						<div className='col-span-2 space-y-8'>
							{/* Experience Section */}
							<section>
								<h2 className='text-lg font-semibold mb-4'>Experience</h2>
								<div className='space-y-6'>
									{data.workExperience.map((work) => (
										<div
											key={work.id}
											className='border-l-2 border-[#3dd2f3] pl-4'
										>
											<div className='flex justify-between items-start'>
												<h3 className='font-medium'>{work.position}</h3>
												<span className='text-sm text-gray-500'>
													{work.startDate} - {work.endDate}
												</span>
											</div>
											<p className='text-gray-600 text-sm mt-1'>
												{work.company}
											</p>
											<p className='text-gray-600 text-sm mt-2'>
												{work.description}
											</p>
										</div>
									))}
								</div>
							</section>

							{/* Education Section */}
							<section>
								<h2 className='text-lg font-semibold mb-4'>Education</h2>
								<div className='space-y-6'>
									{data.education.map((edu) => (
										<div
											key={edu.id}
											className='border-l-2 border-[#3dd2f3] pl-4'
										>
											<div className='flex justify-between items-start'>
												<h3 className='font-medium'>{edu.degree}</h3>
												<span className='text-sm text-gray-500'>
													{edu.startDate} - {edu.endDate}
												</span>
											</div>
											<p className='text-gray-600 text-sm mt-1'>
												{edu.institution}
											</p>
											<p className='text-gray-600 text-sm'>{edu.field}</p>
											{edu.description && (
												<p className='text-gray-600 text-sm mt-2'>
													{edu.description}
												</p>
											)}
										</div>
									))}
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
