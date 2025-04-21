import {
	PDFDownloadLink,
	Document,
	Page,
	Text,
	View,
	StyleSheet,
} from '@react-pdf/renderer';
import ClientComponentOnly from './ClientComponentOnly';
import ResumeTemplateOne from '~/templates/ResumeTemplateOne';
import ResumeTemplateTwo from '~/templates/ResumeTemplateTwo';
import ResumeTemplateThree from '~/templates/ResumeTemplateThree';
import ResumeTemplateFour from '~/templates/ResumeTemplateFour';
import ResumeTemplateFive from '~/templates/ResumeTemplateFive';
import ResumeTemplateSix from '~/templates/ResumeTemplateSix';
import ResumeTemplateSeven from '~/templates/ResumeTemplateSeven';
import type { ResumeData } from '~/types/resume.type';

interface ResumePreviewProps {
	data: ResumeData;
	template: string;
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
					{data.personalInfo.firstName} {data.personalInfo.lastName}
				</Text>
				{data.contactInfo.map((contact) => (
					<Text key={contact.id} style={styles.text}>
						{contact.value}
					</Text>
				))}
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

export default function ResumePreview({ data, template }: ResumePreviewProps) {
	const getTemplateComponent = () => {
		switch (template) {
			case 'classic':
				return <ResumeTemplateTwo data={data} />;
			case 'modern':
				return <ResumeTemplateThree data={data} />;
			case 'professional':
				return <ResumeTemplateFour data={data} />;
			case 'creative':
				return <ResumeTemplateFive data={data} />;
			case 'code':
				return <ResumeTemplateSix data={data} />;
			case 'modern-blue':
				return <ResumeTemplateSeven data={data} />;
			case 'minimal':
			default:
				return <ResumeTemplateOne data={data} />;
		}
	};

	return (
		<div className='space-y-4'>
			<div className='flex justify-between items-center'>
				<h2 className='text-lg font-medium text-gray-900'>Resume Preview</h2>
				<ClientComponentOnly>
					<PDFDownloadLink
						document={<ResumePDF data={data} template={template} />}
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

			<div className='bg-white rounded-lg shadow'>{getTemplateComponent()}</div>
		</div>
	);
}
