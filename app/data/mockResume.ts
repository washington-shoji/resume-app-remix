import type { ResumeData } from '~/types/resume.type';

export const mockResumeData: ResumeData = {
	personalInfo: {
		firstName: 'Harry',
		lastName: 'Potter',
		professionalTitle: 'Software Development Wizard',
	},
	contactInfo: [
		{ id: '1', label: 'Email', value: 'harry.potter@hogwarts.edu' },
		{ id: '2', label: 'Phone', value: '+44 20 7123 4567' },
		{ id: '3', label: 'Location', value: 'London, United Kingdom' },
		{ id: '4', label: 'LinkedIn', value: 'linkedin.com/in/harrypotter' },
	],
	summary:
		'Dedicated and innovative software developer with expertise in defensive programming against dark arts. Proven track record of leading complex magical projects and implementing robust security measures. Strong focus on team collaboration and problem-solving in high-pressure environments.',
	skills: [
		{ id: '1', name: 'JavaScript', level: 'Expert' },
		{ id: '2', name: 'TypeScript', level: 'Advanced' },
		{ id: '3', name: 'React', level: 'Expert' },
		{ id: '4', name: 'Node.js', level: 'Advanced' },
		{ id: '5', name: 'GraphQL', level: 'Intermediate' },
		{ id: '6', name: 'AWS', level: 'Advanced' },
	],
	workExperience: [
		{
			id: '1',
			company: 'Ministry of Magic',
			position: 'Senior Software Architect',
			startDate: '2020',
			endDate: 'Present',
			description:
				'Lead architect for the modernization of magical tracking systems. Implemented real-time monitoring solutions using React and GraphQL. Reduced system response time by 60% through optimization of spell-tracking algorithms.',
		},
		{
			id: '2',
			company: 'Gringotts Wizarding Bank',
			position: 'Full Stack Developer',
			startDate: '2018',
			endDate: '2020',
			description:
				'Developed and maintained secure banking applications handling millions of Galleon transactions daily. Implemented biometric authentication using wand signatures. Led a team of 5 developers in the vault security system upgrade project.',
		},
		{
			id: '3',
			company: 'The Daily Prophet',
			position: 'Frontend Developer',
			startDate: '2016',
			endDate: '2018',
			description:
				"Rebuilt the news platform's frontend using React, improving reader engagement by 40%. Implemented interactive moving pictures feature using WebGL. Optimized content delivery for both magical and Muggle devices.",
		},
	],
	education: [
		{
			id: '1',
			institution: 'Hogwarts School of Software and Wizardry',
			degree: "Master's Degree",
			field: 'Computer Science and Magical Engineering',
			startDate: '2014',
			endDate: '2016',
			description:
				"Specialized in Magical Algorithm Optimization and Defensive Programming. Graduated with honors. Led the development of an AI-powered Marauder's Map as thesis project.",
		},
		{
			id: '2',
			institution: 'Hogwarts School of Software and Wizardry',
			degree: "Bachelor's Degree",
			field: 'Software Engineering',
			startDate: '2010',
			endDate: '2014',
			description:
				'Core focus on full-stack development, magical data structures, and spell-based programming. Founded the Code Brewing Club. Received Outstanding in all major subjects.',
		},
	],
};
