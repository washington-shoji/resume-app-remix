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
						className='btn-secondary'
					>
						Add Experience
					</button>
				)}
			</div>

			{experiences.map((experience) => (
				<div key={experience.id} className='space-y-4 p-4 border rounded-lg'>
					<div className='flex justify-between items-start'>
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
									className='form-input'
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
									className='form-input'
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
										className='form-input'
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
										className='form-input'
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
									className='form-input'
									rows={3}
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
							className='text-red-600 hover:text-red-800 ml-4'
						>
							Remove
						</button>
					</div>
				</div>
			))}
		</div>
	);
}
