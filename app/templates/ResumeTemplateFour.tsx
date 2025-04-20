import { ResumeData } from '~/types/resume.type';

interface Props {
	data: ResumeData;
}

export default function ResumeTemplateFour({ data }: Props) {
	// Create personal brand logo from initials
	const initials = `${data.personalInfo.firstName[0]}${data.personalInfo.lastName[0]}`;

	return (
		<div className='max-w-[800px] mx-auto bg-white dark:bg-gray-900'>
			{/* Header with Name and Logo */}
			<header className='grid grid-cols-1 md:grid-cols-2 gap-4 p-8 items-center'>
				<div>
					<h1 className='text-4xl font-light tracking-wide text-gray-800 dark:text-gray-100'>
						{data.personalInfo.firstName} {data.personalInfo.lastName}
					</h1>
					<p className='text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 mt-1'>
						{data.personalInfo.professionalTitle}
					</p>
				</div>
				<div className='flex justify-end'>
					<div className='w-16 h-16 flex items-center justify-center'>
						<div className='text-2xl font-light tracking-widest text-gray-800 dark:text-gray-100'>
							{initials}
						</div>
					</div>
				</div>
			</header>

			<div className='grid grid-cols-1 md:grid-cols-12 gap-8 p-8'>
				{/* Left Column */}
				<div className='md:col-span-4 space-y-8'>
					{/* Profile Photo */}
					<div className='mb-8'>
						<div className='w-48 h-48 rounded-full overflow-hidden mx-auto bg-gray-200 dark:bg-gray-700'>
							{/* If there's a profile picture, uncomment and use this
              <img
                src={data.personalInfo.profilePicture}
                alt={`${data.personalInfo.firstName} ${data.personalInfo.lastName}`}
                className="w-full h-full object-cover"
              /> */}
						</div>
					</div>

					{/* Contact Info */}
					<section>
						<h2 className='text-sm font-medium uppercase mb-4 text-gray-800 dark:text-gray-200'>
							Contact
						</h2>
						<div className='space-y-2'>
							{data.contactInfo.map((contact) => (
								<div key={contact.id} className='text-sm'>
									<div className='text-gray-600 dark:text-gray-400 uppercase text-xs mb-1'>
										{contact.label}
									</div>
									<div className='text-gray-800 dark:text-gray-200'>
										{contact.value}
									</div>
								</div>
							))}
						</div>
					</section>

					{/* Education */}
					<section>
						<h2 className='text-sm font-medium uppercase mb-4 text-gray-800 dark:text-gray-200'>
							Education
						</h2>
						<div className='space-y-4'>
							{data.education.map((edu) => (
								<div key={edu.id}>
									<div className='text-sm'>
										<div className='text-gray-800 dark:text-gray-200 font-medium'>
											{edu.degree}
										</div>
										<div className='text-gray-600 dark:text-gray-400 text-sm'>
											{edu.institution}
										</div>
										<div className='text-gray-500 dark:text-gray-500 text-sm'>
											{edu.startDate} - {edu.endDate}
										</div>
									</div>
								</div>
							))}
						</div>
					</section>

					{/* Social Media */}
					<section>
						<h2 className='text-sm font-medium uppercase mb-4 text-gray-800 dark:text-gray-200'>
							Social Media
						</h2>
						<div className='space-y-2'>
							<a
								href='https://facebook.com/username'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
							>
								<FacebookIcon className='w-4 h-4 mr-2' />
								<span className='text-sm'>facebook.com/username</span>
							</a>
							<a
								href='https://twitter.com/username'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
							>
								<TwitterIcon className='w-4 h-4 mr-2' />
								<span className='text-sm'>twitter.com/username</span>
							</a>
							<a
								href='https://instagram.com/username'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
							>
								<InstagramIcon className='w-4 h-4 mr-2' />
								<span className='text-sm'>instagram.com/username</span>
							</a>
							<a
								href='https://pinterest.com/username'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
							>
								<PinterestIcon className='w-4 h-4 mr-2' />
								<span className='text-sm'>pinterest.com/username</span>
							</a>
						</div>
					</section>
				</div>

				{/* Right Column */}
				<div className='md:col-span-8 space-y-8'>
					{/* Profile Section */}
					<section>
						<h2 className='text-sm font-medium uppercase mb-4 text-gray-800 dark:text-gray-200'>
							Profile
						</h2>
						<p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
							{data.summary}
						</p>
					</section>

					{/* Skills Section */}
					<section>
						<h2 className='text-sm font-medium uppercase mb-4 text-gray-800 dark:text-gray-200'>
							Skills
						</h2>
						<div className='grid grid-cols-2 gap-x-8 gap-y-2'>
							{data.skills.map((skill) => (
								<div
									key={skill.id}
									className='flex items-center justify-between'
								>
									<span className='text-gray-700 dark:text-gray-300'>
										{skill.name}
									</span>
									<span className='text-gray-500 dark:text-gray-500'>•</span>
								</div>
							))}
						</div>
					</section>

					{/* Work Experience */}
					<section>
						<h2 className='text-sm font-medium uppercase mb-4 text-gray-800 dark:text-gray-200'>
							Work Experience
						</h2>
						<div className='space-y-6'>
							{data.workExperience.map((work) => (
								<div key={work.id}>
									<div className='flex justify-between items-start mb-2'>
										<h3 className='text-gray-800 dark:text-gray-200'>
											{work.position}
										</h3>
										<span className='text-gray-500 dark:text-gray-500 text-sm'>
											{work.startDate} - {work.endDate}
										</span>
									</div>
									<p className='text-gray-600 dark:text-gray-400 text-sm mb-2'>
										{work.company}
									</p>
									<p className='text-gray-600 dark:text-gray-400 text-sm'>
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

// Social Media Icons
function FacebookIcon({ className }: { className?: string }) {
	return (
		<svg className={className} fill='currentColor' viewBox='0 0 24 24'>
			<path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
		</svg>
	);
}

function TwitterIcon({ className }: { className?: string }) {
	return (
		<svg className={className} fill='currentColor' viewBox='0 0 24 24'>
			<path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
		</svg>
	);
}

function InstagramIcon({ className }: { className?: string }) {
	return (
		<svg className={className} fill='currentColor' viewBox='0 0 24 24'>
			<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
		</svg>
	);
}

function PinterestIcon({ className }: { className?: string }) {
	return (
		<svg className={className} fill='currentColor' viewBox='0 0 24 24'>
			<path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.87-1.835l.437-1.664c.229.436.895.804 1.604.804 2.111 0 3.633-1.941 3.633-4.354 0-2.312-1.888-4.042-4.316-4.042-3.021 0-4.625 2.027-4.625 4.235 0 1.027.547 2.305 1.422 2.712.132.062.203.034.234-.094l.193-.793c.017-.071.009-.132-.049-.202-.288-.35-.521-.995-.521-1.597 0-1.544 1.169-3.038 3.161-3.038 1.72 0 2.924 1.172 2.924 2.848 0 1.894-.957 3.205-2.201 3.205-.687 0-1.201-.568-1.036-1.265.197-.833.58-1.73.58-2.331 0-.537-.288-.986-.89-.986-.705 0-1.269.73-1.269 1.705 0 .623.211 1.045.211 1.045l-.85 3.596c-.25 1.06-.037 2.362-.019 2.492.01.076.102.094.144.036.059-.08.826-1.024 1.087-1.971.074-.293.426-1.813.426-1.813.211.402.824.744 1.477.744 1.943 0 3.337-1.784 3.337-4.006 0-1.735-1.493-3.349-3.762-3.349z' />
		</svg>
	);
}
