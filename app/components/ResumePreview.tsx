import {
	PDFDownloadLink,
	Document,
	Page,
	Text,
	View,
	StyleSheet,
} from '@react-pdf/renderer';
import ClientComponentOnly from './ClientComponentOnly';

interface ResumeData {
	personalInfo: {
		[key: string]: string;
	};
	skills: Array<{
		id: string;
		name: string;
		level: string;
	}>;
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

interface ResumePreviewProps {
	data: ResumeData;
}

const styles = StyleSheet.create({
	page: {
		padding: 30,
	},
	section: {
		marginBottom: 20,
	},
	heading: {
		fontSize: 24,
		marginBottom: 10,
		fontWeight: 'bold',
	},
	subheading: {
		fontSize: 18,
		marginBottom: 8,
		fontWeight: 'bold',
	},
	text: {
		fontSize: 12,
		marginBottom: 5,
	},
	experienceItem: {
		marginBottom: 15,
	},
	dateRange: {
		fontSize: 10,
		color: '#666',
		marginBottom: 3,
	},
});

const ResumePDF = ({ data }: ResumePreviewProps) => (
	<Document>
		<Page size='A4' style={styles.page}>
			{/* Personal Information */}
			<View style={styles.section}>
				<Text style={styles.heading}>
					{data.personalInfo.name || 'Your Name'}
				</Text>
				<Text style={styles.text}>
					{data.personalInfo.email || 'email@example.com'}
				</Text>
				<Text style={styles.text}>
					{data.personalInfo.phone || 'Phone Number'}
				</Text>
			</View>

			{/* Executive Summary */}
			{data.summary && (
				<View style={styles.section}>
					<Text style={styles.subheading}>Executive Summary</Text>
					<Text style={styles.text}>{data.summary}</Text>
				</View>
			)}

			{/* Skills */}
			{data.skills.length > 0 && (
				<View style={styles.section}>
					<Text style={styles.subheading}>Skills</Text>
					{data.skills.map((skill) => (
						<Text key={skill.id} style={styles.text}>
							{skill.name} - {skill.level}
						</Text>
					))}
				</View>
			)}

			{/* Work Experience */}
			{data.workExperience.length > 0 && (
				<View style={styles.section}>
					<Text style={styles.subheading}>Work Experience</Text>
					{data.workExperience.map((exp) => (
						<View key={exp.id} style={styles.experienceItem}>
							<Text style={styles.text}>
								{exp.position} at {exp.company}
							</Text>
							<Text style={styles.dateRange}>
								{exp.startDate} - {exp.endDate}
							</Text>
							<Text style={styles.text}>{exp.description}</Text>
						</View>
					))}
				</View>
			)}

			{/* Education */}
			{data.education.length > 0 && (
				<View style={styles.section}>
					<Text style={styles.subheading}>Education</Text>
					{data.education.map((edu) => (
						<View key={edu.id} style={styles.experienceItem}>
							<Text style={styles.text}>
								{edu.degree} in {edu.field}
							</Text>
							<Text style={styles.text}>{edu.institution}</Text>
							<Text style={styles.dateRange}>
								{edu.startDate} - {edu.endDate}
							</Text>
							<Text style={styles.text}>{edu.description}</Text>
						</View>
					))}
				</View>
			)}
		</Page>
	</Document>
);

export default function ResumePreview({ data }: ResumePreviewProps) {
	return (
		<div className='space-y-4'>
			<div className='flex justify-between items-center'>
				<h2 className='text-lg font-medium text-gray-900'>Resume Preview</h2>
				<ClientComponentOnly>
					<PDFDownloadLink
						document={<ResumePDF data={data} />}
						fileName='resume.pdf'
						className='btn-primary'
					>
						{({ loading }) =>
							loading ? (
								'Generating PDF...'
							) : (
								<button
									type='submit'
									className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'
								>
									Download PDF
								</button>
							)
						}
					</PDFDownloadLink>
				</ClientComponentOnly>
			</div>

			<div className='bg-white p-8 rounded-lg shadow'>
				{/* Personal Information */}
				<div className='mb-6'>
					<h3 className='text-2xl font-bold text-gray-900'>
						{`${data.personalInfo?.firstName + data.personalInfo?.lastName}` ||
							'Your Name'}
					</h3>
					<p className='text-gray-600'>
						{data.personalInfo.email || 'email@example.com'}
					</p>
					<p className='text-gray-600'>
						{data.personalInfo.phone || 'Phone Number'}
					</p>
				</div>

				{/* Executive Summary */}
				{data.summary && (
					<div className='mb-6'>
						<h3 className='text-xl font-semibold text-gray-900 mb-2'>
							Executive Summary
						</h3>
						<p className='text-gray-700'>{data.summary}</p>
					</div>
				)}

				{/* Skills */}
				{data.skills.length > 0 && (
					<div className='mb-6'>
						<h3 className='text-xl font-semibold text-gray-900 mb-2'>Skills</h3>
						<div className='flex flex-wrap gap-2'>
							{data.skills.map((skill) => (
								<span
									key={skill.id}
									className='bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm'
								>
									{skill.name} - {skill.level}
								</span>
							))}
						</div>
					</div>
				)}

				{/* Work Experience */}
				{data.workExperience.length > 0 && (
					<div className='mb-6'>
						<h3 className='text-xl font-semibold text-gray-900 mb-2'>
							Work Experience
						</h3>
						{data.workExperience.map((exp) => (
							<div key={exp.id} className='mb-4'>
								<h4 className='font-medium text-gray-900'>
									{exp.position} at {exp.company}
								</h4>
								<p className='text-sm text-gray-600'>
									{exp.startDate} - {exp.endDate}
								</p>
								<p className='text-gray-700 mt-2'>{exp.description}</p>
							</div>
						))}
					</div>
				)}

				{/* Education */}
				{data.education.length > 0 && (
					<div className='mb-6'>
						<h3 className='text-xl font-semibold text-gray-900 mb-2'>
							Education
						</h3>
						{data.education.map((edu) => (
							<div key={edu.id} className='mb-4'>
								<h4 className='font-medium text-gray-900'>
									{edu.degree} in {edu.field}
								</h4>
								<p className='text-gray-600'>{edu.institution}</p>
								<p className='text-sm text-gray-600'>
									{edu.startDate} - {edu.endDate}
								</p>
								<p className='text-gray-700 mt-2'>{edu.description}</p>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
