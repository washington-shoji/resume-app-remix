import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import ResumeTemplateOne from '~/templates/ResumeTemplateOne';
import ResumeTemplateTwo from '~/templates/ResumeTemplateTwo';
import ResumeTemplateThree from '~/templates/ResumeTemplateThree';
import ResumeTemplateFour from '~/templates/ResumeTemplateFour';
import ResumeTemplateFive from '~/templates/ResumeTemplateFive';
import ResumeTemplateSix from '~/templates/ResumeTemplateSix';
import ResumeTemplateSeven from '~/templates/ResumeTemplateSeven';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Resume Builder' },
		{ description: 'Create your professional resume in minutes' },
	];
};

// Sample data for preview
const sampleData = {
	personalInfo: {
		firstName: 'John',
		lastName: 'Doe',
		professionalTitle: 'Software Engineer',
	},
	contactInfo: [
		{ id: '1', label: 'Email', value: 'john@example.com' },
		{ id: '2', label: 'Phone', value: '(555) 123-4567' },
		{ id: '3', label: 'Location', value: 'New York, NY' },
	],
	summary:
		'Experienced software engineer with a passion for building scalable applications.',
	skills: [
		{ id: '1', name: 'React', level: 'Expert' },
		{ id: '2', name: 'TypeScript', level: 'Advanced' },
		{ id: '3', name: 'Node.js', level: 'Intermediate' },
	],
	workExperience: [
		{
			id: '1',
			company: 'Tech Corp',
			position: 'Senior Developer',
			startDate: '2020',
			endDate: 'Present',
			description: 'Leading frontend development team.',
		},
	],
	education: [
		{
			id: '1',
			institution: 'University of Technology',
			degree: 'BS Computer Science',
			field: 'Computer Science',
			startDate: '2014',
			endDate: '2018',
			description: 'Major in Software Engineering',
		},
	],
};

export default function Index() {
	return (
		<div className='flex flex-col gap-4 p-8'>
			<div className='text-center mt-10 mb-10'>
				<h1 className='text-4xl font-bold text-gray-900 mb-8'>
					Professional Resume Builder
				</h1>
				<p className='text-xl text-gray-600 mb-8'>
					Create your professional resume in minutes
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
				{/* Template One */}
				<div className='flex flex-col justify-between border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'>
					<div className='transform scale-[0.9] origin-top'>
						<ResumeTemplateOne data={sampleData} />
					</div>
					<div className='p-4 border-t bg-white'>
						<h3 className='font-semibold text-lg'>Minimal Template</h3>
						<p className='text-gray-600 text-sm mb-4'>
							Clean and professional design
						</p>
						<Link
							to='/resume?template=minimal'
							className='w-full inline-block text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'
						>
							Use Template
						</Link>
					</div>
				</div>

				{/* Template Two */}
				<div className='flex flex-col justify-between border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'>
					<div className='transform scale-[0.9] origin-top'>
						<ResumeTemplateTwo data={sampleData} />
					</div>
					<div className='p-4 border-t bg-white'>
						<h3 className='font-semibold text-lg'>Two Column Classic</h3>
						<p className='text-gray-600 text-sm mb-4'>
							Traditional split layout
						</p>
						<Link
							to='/resume?template=classic'
							className='w-full inline-block text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'
						>
							Use Template
						</Link>
					</div>
				</div>

				{/* Template Three */}
				<div className='flex flex-col justify-between border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'>
					<div className='transform scale-[0.9] origin-top'>
						<ResumeTemplateThree data={sampleData} />
					</div>
					<div className='p-4 border-t bg-white'>
						<h3 className='font-semibold text-lg'>Modern Sidebar</h3>
						<p className='text-gray-600 text-sm mb-4'>
							Bold and contemporary design
						</p>
						<Link
							to='/resume?template=modern'
							className='w-full inline-block text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'
						>
							Use Template
						</Link>
					</div>
				</div>

				{/* Template Four */}
				<div className='flex flex-col justify-between border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'>
					<div className='transform scale-[0.9] origin-top'>
						<ResumeTemplateFour data={sampleData} />
					</div>
					<div className='p-4 border-t bg-white'>
						<h3 className='font-semibold text-lg'>Professional Grid</h3>
						<p className='text-gray-600 text-sm mb-4'>
							Organized and structured layout
						</p>
						<Link
							to='/resume?template=professional'
							className='w-full inline-block text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'
						>
							Use Template
						</Link>
					</div>
				</div>

				{/* Template Five */}
				<div className='flex flex-col justify-between border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'>
					<div className='transform scale-[0.9] origin-top'>
						<ResumeTemplateFive data={sampleData} />
					</div>
					<div className='p-4 border-t bg-white'>
						<h3 className='font-semibold text-lg'>Creative Blue</h3>
						<p className='text-gray-600 text-sm mb-4'>
							Stylish and eye-catching design
						</p>
						<Link
							to='/resume?template=creative'
							className='w-full inline-block text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'
						>
							Use Template
						</Link>
					</div>
				</div>

				{/* Template Six */}
				<div className='flex flex-col justify-between border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'>
					<div className='transform scale-[0.9] origin-top'>
						<ResumeTemplateSix data={sampleData} />
					</div>
					<div className='p-4 border-t bg-white'>
						<h3 className='font-semibold text-lg'>Code Theme</h3>
						<p className='text-gray-600 text-sm mb-4'>Perfect for developers</p>
						<Link
							to='/resume?template=code'
							className='w-full inline-block text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'
						>
							Use Template
						</Link>
					</div>
				</div>

				{/* Template Seven */}
				<div className='flex flex-col justify-between border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'>
					<div className='transform scale-[0.9] origin-top'>
						<ResumeTemplateSeven data={sampleData} />
					</div>
					<div className='p-4 border-t bg-white'>
						<h3 className='font-semibold text-lg'>Modern Blue</h3>
						<p className='text-gray-600 text-sm mb-4'>
							Contemporary and professional
						</p>
						<Link
							to='/resume?template=modern-blue'
							className='w-full inline-block text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'
						>
							Use Template
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
