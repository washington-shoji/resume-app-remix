import Navbar from './Navbar';
import { ThemeProvider } from '~/context/ThemeContext';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ThemeProvider>
			<div className='min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200'>
				<Navbar />
				<div className='text-gray-900 dark:text-gray-100'>{children}</div>
			</div>
		</ThemeProvider>
	);
}
