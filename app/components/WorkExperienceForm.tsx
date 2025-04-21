interface WorkExperience {
	id: string;
	company: string;
	position: string;
	startDate: string;
	endDate: string;
	description: string;
}

interface WorkExperienceFormProps {
	experiences: WorkExperience[];
	onChange: (experiences: WorkExperience[]) => void;
}

export default function WorkExperienceForm({
	experiences,
	onChange,
}: WorkExperienceFormProps) {
	const handleAddExperience = () => {
		if (experiences.length < 5) {
			const newExperience: WorkExperience = {
				id: `exp_${Date.now()}`,
				company: '',
				position: '',
				startDate: '',
				endDate: '',
				description: '',
			};
			onChange([...experiences, newExperience]);
		}
	};

	const handleRemoveExperience = (id: string) => {
		onChange(experiences.filter((exp) => exp.id !== id));
	};

	const handleExperienceChange = (
		id: string,
		field: keyof WorkExperience,
		value: string
	) => {
		onChange(
			experiences.map((exp) =>
				exp.id === id ? { ...exp, [field]: value } : exp
			)
		);
	};

	return (
		<div className='space-y-4'>
			<div className='flex justify-between items-center'>
				<h2 className='text-lg font-medium text-gray-900'>Work Experience</h2>
				{experiences.length < 5 && (
					<button
						type='button'
						onClick={handleAddExperience}
						className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'
					>
						Add Experience
					</button>
				)}
			</div>

			{experiences.map((experience) => (
				<div key={experience.id} className='flex flex-col gap-4'>
					<div className='space-y-4 flex-1'>
						<div>
							<label
								htmlFor={`company-${experience.id}`}
								className='block text-sm font-medium text-gray-700'
							>
								Company
							</label>
							<input
								id={`company-${experience.id}`}
								type='text'
								className='border border-gray-300 rounded-md p-2 w-full bg-white'
								value={experience.company}
								onChange={(e) =>
									handleExperienceChange(
										experience.id,
										'company',
										e.target.value
									)
								}
							/>
						</div>
						<div>
							<label
								htmlFor={`position-${experience.id}`}
								className='block text-sm font-medium text-gray-700'
							>
								Position
							</label>
							<input
								id={`position-${experience.id}`}
								type='text'
								className='border border-gray-300 rounded-md p-2 w-full bg-white'
								value={experience.position}
								onChange={(e) =>
									handleExperienceChange(
										experience.id,
										'position',
										e.target.value
									)
								}
							/>
						</div>
						<div className='grid grid-cols-2 gap-4'>
							<div>
								<label
									htmlFor={`startDate-${experience.id}`}
									className='block text-sm font-medium text-gray-700'
								>
									Start Date
								</label>
								<input
									id={`startDate-${experience.id}`}
									type='date'
									className='border border-gray-300 rounded-md p-2 w-full bg-white'
									value={experience.startDate}
									onChange={(e) =>
										handleExperienceChange(
											experience.id,
											'startDate',
											e.target.value
										)
									}
								/>
							</div>
							<div>
								<label
									htmlFor={`endDate-${experience.id}`}
									className='block text-sm font-medium text-gray-700'
								>
									End Date
								</label>
								<input
									id={`endDate-${experience.id}`}
									type='date'
									className='border border-gray-300 rounded-md p-2 w-full bg-white'
									value={experience.endDate}
									onChange={(e) =>
										handleExperienceChange(
											experience.id,
											'endDate',
											e.target.value
										)
									}
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor={`description-${experience.id}`}
								className='block text-sm font-medium text-gray-700'
							>
								Description
							</label>
							<textarea
								id={`description-${experience.id}`}
								className='border border-gray-300 rounded-md p-2 w-full bg-white'
								rows={6}
								value={experience.description}
								onChange={(e) =>
									handleExperienceChange(
										experience.id,
										'description',
										e.target.value
									)
								}
							/>
						</div>
					</div>
					<button
						type='button'
						onClick={() => handleRemoveExperience(experience.id)}
						className='self-end inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors'
					>
						Remove
					</button>
				</div>
			))}
		</div>
	);
}
