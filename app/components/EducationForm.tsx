interface Education {
	id: string;
	institution: string;
	degree: string;
	field: string;
	startDate: string;
	endDate: string;
	description: string;
}

interface EducationFormProps {
	education: Education[];
	onChange: (education: Education[]) => void;
}

export default function EducationForm({
	education,
	onChange,
}: EducationFormProps) {
	const handleAddEducation = () => {
		if (education.length < 5) {
			const newEducation: Education = {
				id: `edu_${Date.now()}`,
				institution: '',
				degree: '',
				field: '',
				startDate: '',
				endDate: '',
				description: '',
			};
			onChange([...education, newEducation]);
		}
	};

	const handleRemoveEducation = (id: string) => {
		onChange(education.filter((edu) => edu.id !== id));
	};

	const handleEducationChange = (
		id: string,
		field: keyof Education,
		value: string
	) => {
		onChange(
			education.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu))
		);
	};

	return (
		<div className='space-y-4'>
			<div className='flex justify-between items-center'>
				<h2 className='text-lg font-medium text-gray-900'>Education</h2>
				{education.length < 5 && (
					<button
						type='button'
						onClick={handleAddEducation}
						className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'
					>
						Add Education
					</button>
				)}
			</div>

			{education.map((edu) => (
				<div key={edu.id} className='flex flex-col gap-4'>
					<div className='space-y-4 flex-1'>
						<div>
							<label
								htmlFor={`institution-${edu.id}`}
								className='block text-sm font-medium text-gray-700'
							>
								Institution
							</label>
							<input
								id={`institution-${edu.id}`}
								type='text'
								className='border border-gray-300 rounded-md p-2 w-full bg-white'
								value={edu.institution}
								onChange={(e) =>
									handleEducationChange(edu.id, 'institution', e.target.value)
								}
							/>
						</div>
						<div className='grid grid-cols-2 gap-4'>
							<div>
								<label
									htmlFor={`degree-${edu.id}`}
									className='block text-sm font-medium text-gray-700'
								>
									Degree
								</label>
								<input
									id={`degree-${edu.id}`}
									type='text'
									className='border border-gray-300 rounded-md p-2 w-full bg-white'
									value={edu.degree}
									onChange={(e) =>
										handleEducationChange(edu.id, 'degree', e.target.value)
									}
								/>
							</div>
							<div>
								<label
									htmlFor={`field-${edu.id}`}
									className='block text-sm font-medium text-gray-700'
								>
									Field of Study
								</label>
								<input
									id={`field-${edu.id}`}
									type='text'
									className='border border-gray-300 rounded-md p-2 w-full bg-white'
									value={edu.field}
									onChange={(e) =>
										handleEducationChange(edu.id, 'field', e.target.value)
									}
								/>
							</div>
						</div>
						<div className='grid grid-cols-2 gap-4'>
							<div>
								<label
									htmlFor={`startDate-${edu.id}`}
									className='block text-sm font-medium text-gray-700'
								>
									Start Date
								</label>
								<input
									id={`startDate-${edu.id}`}
									type='date'
									className='border border-gray-300 rounded-md p-2 w-full bg-white'
									value={edu.startDate}
									onChange={(e) =>
										handleEducationChange(edu.id, 'startDate', e.target.value)
									}
								/>
							</div>
							<div>
								<label
									htmlFor={`endDate-${edu.id}`}
									className='block text-sm font-medium text-gray-700'
								>
									End Date
								</label>
								<input
									id={`endDate-${edu.id}`}
									type='date'
									className='border border-gray-300 rounded-md p-2 w-full bg-white'
									value={edu.endDate}
									onChange={(e) =>
										handleEducationChange(edu.id, 'endDate', e.target.value)
									}
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor={`description-${edu.id}`}
								className='block text-sm font-medium text-gray-700'
							>
								Description
							</label>
							<textarea
								id={`description-${edu.id}`}
								className='border border-gray-300 rounded-md p-2 w-full bg-white'
								rows={3}
								value={edu.description}
								onChange={(e) =>
									handleEducationChange(edu.id, 'description', e.target.value)
								}
							/>
						</div>
					</div>
					<button
						type='button'
						onClick={() => handleRemoveEducation(edu.id)}
						className='self-end inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors'
					>
						Remove
					</button>
				</div>
			))}
		</div>
	);
}
