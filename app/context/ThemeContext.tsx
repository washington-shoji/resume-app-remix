import { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>('light');

	const applyTheme = (newTheme: Theme) => {
		const root = window.document.documentElement;
		const isDark = newTheme === 'dark';

		root.classList.remove(isDark ? 'light' : 'dark');
		root.classList.add(isDark ? 'dark' : 'light');

		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
	};

	useEffect(() => {
		// Remove both classes first to ensure clean state
		const root = window.document.documentElement;
		root.classList.remove('light', 'dark');

		// Check if user has a theme preference in localStorage
		const savedTheme = localStorage.getItem('theme') as Theme;
		if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
			applyTheme(savedTheme);
		} else {
			// Check system preference
			const prefersDark = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches;
			applyTheme(prefersDark ? 'dark' : 'light');
		}

		// Listen for system theme changes
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleChange = (e: MediaQueryListEvent) => {
			if (!localStorage.getItem('theme')) {
				applyTheme(e.matches ? 'dark' : 'light');
			}
		};

		mediaQuery.addEventListener('change', handleChange);
		return () => mediaQuery.removeEventListener('change', handleChange);
	}, []);

	const toggleTheme = () => {
		applyTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
}
