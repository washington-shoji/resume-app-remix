import { useTheme } from '~/context/ThemeContext';

export default function Navbar() {
	const { theme, toggleTheme } = useTheme();

	return (
		<nav className='bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between h-16 items-center gap-10'>
					<div className='flex-1 flex items-center'>
						<span className='text-xl font-semibold text-gray-900 dark:text-white'>
							Resume Builder
						</span>
					</div>

					<div className='hidden w-full md:block md:w-auto'>
						<ul className='font-medium flex flex-col p-4 md:p-2 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-700 md:dark:bg-gray-700 dark:border-gray-700'>
							<li>
								<a
									href='/'
									className='block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'
									aria-current='page'
								>
									Home
								</a>
							</li>
							<li>
								<a
									href='/resume'
									className='block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
								>
									Resume Builder
								</a>
							</li>
							<li>
								<a
									href='/experimental'
									className='block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
								>
									Experimental
								</a>
							</li>
						</ul>
					</div>

					<button
						onClick={toggleTheme}
						className='p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200'
						aria-label='Toggle theme'
					>
						{theme === 'light' ? (
							<MoonIcon className='w-5 h-5' />
						) : (
							<SunIcon className='w-5 h-5' />
						)}
					</button>
				</div>
			</div>
		</nav>
	);
}

interface IconProps {
	className?: string;
}

function SunIcon({ className = 'w-6 h-6' }: IconProps) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className={className}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
			/>
		</svg>
	);
}

function MoonIcon({ className = 'w-6 h-6' }: IconProps) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className={className}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
			/>
		</svg>
	);
}
