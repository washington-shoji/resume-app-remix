import { ResumeData } from '~/types/resume.type';

interface Props {
	data: ResumeData;
}

export default function ResumeTemplateOne({ data }: Props) {
	return (
		<div className='max-w-[800px] mx-auto p-8 font-light'>
			{/* Header Section */}
			<header className='mb-12'>
				<h1 className='text-3xl tracking-wide'>
					<span className='font-bold'>{data.personalInfo.firstName}</span>{' '}
					<span>{data.personalInfo.lastName}</span>
				</h1>
				<p className='text-gray-600 uppercase tracking-wider text-sm mt-2 font-semibold'>
					{data.personalInfo.professionalTitle}
				</p>

				{/* Contact Info */}
				<div className='mt-4 flex gap-4 text-sm text-gray-600'>
					{data.contactInfo.map((contact) => (
						<span key={contact.id}>{contact.value}</span>
					))}
				</div>
			</header>

			{/* Summary Section */}
			<section className='mb-12'>
				<h2 className='text-gray-400 uppercase text-sm tracking-wider mb-4'>
					Summary
				</h2>
				<p className='text-gray-700 leading-relaxed'>{data.summary}</p>
			</section>

			{/* Skills Section */}
			<section className='mb-12'>
				<h2 className='text-gray-400 uppercase text-sm tracking-wider mb-4'>
					Skills
				</h2>
				<div className='flex flex-wrap gap-4'>
					{data.skills.map((skill) => (
						<div key={skill.id} className='flex items-center gap-2'>
							<span className='font-medium'>{skill.name}</span>
							<span className='text-sm text-gray-500'>• {skill.level}</span>
						</div>
					))}
				</div>
			</section>

			{/* Work Experience Section */}
			<section className='mb-12'>
				<h2 className='text-gray-400 uppercase text-sm tracking-wider mb-6'>
					Work Experience
				</h2>
				<div className='space-y-8'>
					{data.workExperience.map((work) => (
						<div key={work.id} className='flex justify-between items-start'>
							<div className='flex-1'>
								<h3 className='font-medium'>{work.position}</h3>
								<p className='text-gray-600 text-sm mt-1'>{work.company}</p>
								<p className='text-gray-600 text-sm mt-2 max-w-md'>
									{work.description}
								</p>
							</div>
							<div className='text-right text-sm text-gray-500'>
								{work.startDate} - {work.endDate}
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Education Section */}
			<section>
				<h2 className='text-gray-400 uppercase text-sm tracking-wider mb-6'>
					Education
				</h2>
				<div className='space-y-8'>
					{data.education.map((edu) => (
						<div key={edu.id} className='flex justify-between items-start'>
							<div className='flex-1'>
								<h3 className='font-medium'>{edu.degree}</h3>
								<p className='text-gray-600 text-sm mt-1'>{edu.institution}</p>
								<p className='text-gray-600 text-sm'>{edu.field}</p>
								<p className='text-gray-600 text-sm mt-2 max-w-md'>
									{edu.description}
								</p>
							</div>
							<div className='text-right text-sm text-gray-500'>
								{edu.startDate} - {edu.endDate}
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
