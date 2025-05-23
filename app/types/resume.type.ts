export interface ResumeData {
	personalInfo: {
		firstName: string;
		lastName: string;
		professionalTitle: string;
	};
	contactInfo: Array<{ id: string; label: string; value: string }>;
	skills: Array<{ id: string; name: string; level: string }>;
	workExperience: Array<{
		id: string;
		company: string;
		position: string;
		startDate: string;
		endDate: string;
		description: string;
	}>;
	education: Array<{
		id: string;
		institution: string;
		degree: string;
		field: string;
		startDate: string;
		endDate: string;
		description: string;
	}>;
	summary: string;
}
