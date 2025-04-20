import { ResumeData } from '~/types/resume.type';

interface Props {
	data: ResumeData;
}

export default function ResumeTemplateThree({ data }: Props) {
	return (
		<div className='max-w-[800px] mx-auto font-light'>
			<div className='grid grid-cols-1 md:grid-cols-12'>
				{/* Left Sidebar - Dark */}
				<div className='md:col-span-4 bg-gray-800 dark:bg-gray-900 text-white p-8 min-h-screen'>
					{/* Profile Section */}
					<div className='mb-12 text-center'>
						<div className='w-40 h-40 rounded-full mx-auto mb-6 overflow-hidden bg-cyan-600'>
							{/* If there's a profile picture, uncomment and use this
							<img
								src={data.personalInfo.profilePicture}
								alt={`${data.personalInfo.firstName} ${data.personalInfo.lastName}`}
								className="w-full h-full object-cover"
							/> */}
							<div className='w-full h-full bg-cyan-600' />
						</div>
						<h1 className='text-2xl font-light mb-1 text-cyan-400'>
							{data.personalInfo.firstName}
							<br />
							{data.personalInfo.lastName}
						</h1>
						<p className='text-sm text-gray-300'>
							{data.personalInfo.professionalTitle}
						</p>
					</div>

					{/* Portfolio Section */}
					<div className='mb-12'>
						<h2 className='text-cyan-400 text-lg mb-4 flex items-center'>
							<span className='mr-2'>
								<PortfolioIcon />
							</span>
							PORTFOLIO
						</h2>
						<p className='text-sm text-gray-300 leading-relaxed'>
							{data.summary}
						</p>
					</div>

					{/* Contact Section */}
					<div>
						<h2 className='text-cyan-400 text-lg mb-4 flex items-center'>
							<span className='mr-2'>
								<ContactIcon />
							</span>
							CONTACT
						</h2>
						<div className='space-y-4'>
							{data.contactInfo.map((contact) => (
								<div key={contact.id} className='flex items-start text-sm'>
									<span className='text-cyan-400 mr-3'>
										<ContactItemIcon type={contact.label} />
									</span>
									<div>
										<p className='text-gray-300'>{contact.value}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Right Content */}
				<div className='md:col-span-8 bg-white dark:bg-gray-800 p-8'>
					{/* Experience Section */}
					<section className='mb-12'>
						<h2 className='text-cyan-600 dark:text-cyan-400 text-xl mb-6 flex items-center'>
							<span className='mr-2'>
								<ExperienceIcon />
							</span>
							EXPERIENCE
						</h2>
						<div className='space-y-6'>
							{data.workExperience.map((work) => (
								<div key={work.id} className='relative'>
									<div className='flex justify-between items-start mb-2'>
										<h3 className='text-gray-800 dark:text-gray-200 font-medium'>
											{work.company}
										</h3>
										<span className='text-cyan-600 dark:text-cyan-400 text-sm'>
											{work.startDate} - {work.endDate}
										</span>
									</div>
									<p className='text-gray-600 dark:text-gray-300 text-sm mb-2'>
										{work.position}
									</p>
									<p className='text-gray-600 dark:text-gray-400 text-sm'>
										{work.description}
									</p>
								</div>
							))}
						</div>
					</section>

					{/* Education Section */}
					<section className='mb-12'>
						<h2 className='text-cyan-600 dark:text-cyan-400 text-xl mb-6 flex items-center'>
							<span className='mr-2'>
								<EducationIcon />
							</span>
							EDUCATION
						</h2>
						<div className='space-y-6'>
							{data.education.map((edu) => (
								<div key={edu.id} className='relative'>
									<div className='flex justify-between items-start mb-2'>
										<h3 className='text-gray-800 dark:text-gray-200 font-medium'>
											{edu.institution}
										</h3>
										<span className='text-cyan-600 dark:text-cyan-400 text-sm'>
											{edu.startDate} - {edu.endDate}
										</span>
									</div>
									<p className='text-gray-600 dark:text-gray-300 text-sm'>
										{edu.degree} - {edu.field}
									</p>
									<p className='text-gray-600 dark:text-gray-400 text-sm'>
										{edu.description}
									</p>
								</div>
							))}
						</div>
					</section>

					{/* Skills Section */}
					<section>
						<h2 className='text-cyan-600 dark:text-cyan-400 text-xl mb-6 flex items-center'>
							<span className='mr-2'>
								<SkillsIcon />
							</span>
							SOFT SKILLS
						</h2>
						<div className='grid grid-cols-2 gap-4'>
							{data.skills.map((skill) => (
								<div key={skill.id} className='flex items-center'>
									<div className='w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-400 mr-2' />
									<span className='text-gray-700 dark:text-gray-300 text-sm'>
										{skill.name}
									</span>
								</div>
							))}
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

// Icons Components
function PortfolioIcon() {
	return (
		<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
			<path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' />
		</svg>
	);
}

function ContactIcon() {
	return (
		<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
			<path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
		</svg>
	);
}

function ExperienceIcon() {
	return (
		<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
			<path d='M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z' />
			<path d='M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z' />
		</svg>
	);
}

function EducationIcon() {
	return (
		<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
			<path d='M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z' />
		</svg>
	);
}

function SkillsIcon() {
	return (
		<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
			<path
				fillRule='evenodd'
				d='M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z'
				clipRule='evenodd'
			/>
		</svg>
	);
}

function ContactItemIcon({ type }: { type: string }) {
	switch (type.toLowerCase()) {
		case 'phone':
		case 'call':
			return (
				<svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
					<path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
				</svg>
			);
		case 'email':
			return (
				<svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
					<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
					<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
				</svg>
			);
		case 'location':
		case 'address':
			return (
				<svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
					<path
						fillRule='evenodd'
						d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
						clipRule='evenodd'
					/>
				</svg>
			);
		default:
			return (
				<svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
					<path
						fillRule='evenodd'
						d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
						clipRule='evenodd'
					/>
				</svg>
			);
	}
}
