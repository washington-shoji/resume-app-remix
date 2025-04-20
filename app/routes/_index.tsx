import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
	return [
		{ title: 'New Remix App' },
		{ name: 'description', content: 'Welcome to Remix!' },
	];
};

export default function Index() {
	return (
		<div className='flex flex-col  gap-4'>
			<div className='text-center mt-10 mb-10'>
				<h1 className='text-4xl font-bold text-gray-900 mb-8'>
					Professional Resume Builder
				</h1>
				<p className='text-xl text-gray-600 mb-8'>
					Create your professional resume in minutes
				</p>
				<Link to='/resume' className='btn-primary'>
					Start Building Your Resume
				</Link>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
				<div>
					<img
						className='h-auto max-w-full rounded-lg'
						src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg'
						alt=''
					/>
				</div>
				<div>
					<img
						className='h-auto max-w-full rounded-lg'
						src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg'
						alt=''
					/>
				</div>
				<div>
					<img
						className='h-auto max-w-full rounded-lg'
						src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg'
						alt=''
					/>
				</div>
				<div>
					<img
						className='h-auto max-w-full rounded-lg'
						src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg'
						alt=''
					/>
				</div>
				<div>
					<img
						className='h-auto max-w-full rounded-lg'
						src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg'
						alt=''
					/>
				</div>
				<div>
					<img
						className='h-auto max-w-full rounded-lg'
						src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg'
						alt=''
					/>
				</div>
				<div>
					<img
						className='h-auto max-w-full rounded-lg'
						src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg'
						alt=''
					/>
				</div>
				<div>
					<img
						className='h-auto max-w-full rounded-lg'
						src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg'
						alt=''
					/>
				</div>
				<div>
					<img
						className='h-auto max-w-full rounded-lg'
						src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg'
						alt=''
					/>
				</div>
			</div>
		</div>
	);
}
