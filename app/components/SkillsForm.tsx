interface Skill {
	id: string;
	name: string;
	level: string;
}

interface SkillsFormProps {
	skills: Skill[];
	onChange: (skills: Skill[]) => void;
}

export default function SkillsForm({ skills, onChange }: SkillsFormProps) {
	const handleAddSkill = () => {
		if (skills.length < 10) {
			const newSkill: Skill = {
				id: `skill_${Date.now()}`,
				name: '',
				level: 'Intermediate',
			};
			onChange([...skills, newSkill]);
		}
	};

	const handleRemoveSkill = (id: string) => {
		onChange(skills.filter((skill) => skill.id !== id));
	};

	const handleSkillChange = (id: string, field: keyof Skill, value: string) => {
		onChange(
			skills.map((skill) =>
				skill.id === id ? { ...skill, [field]: value } : skill
			)
		);
	};

	return (
		<div className='space-y-4'>
			<div className='flex justify-between items-center'>
				<h2 className='text-lg font-medium text-gray-900'>Skills</h2>
				{skills.length < 10 && (
					<button
						type='button'
						onClick={handleAddSkill}
						className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'
					>
						Add Skill
					</button>
				)}
			</div>

			{skills.map((skill) => (
				<div key={skill.id} className='flex flex-col space-x-4 gap-4'>
					<div className='flex flex-row space-x-4'>
						<div className='flex-1'>
							<label
								htmlFor={`skill-name-${skill.id}`}
								className='block text-sm font-medium text-gray-700'
							>
								Skill Name
							</label>
							<input
								id={`skill-name-${skill.id}`}
								type='text'
								className='border border-gray-300 rounded-md p-2 w-full bg-white'
								value={skill.name}
								onChange={(e) =>
									handleSkillChange(skill.id, 'name', e.target.value)
								}
							/>
						</div>
						<div className='w-48'>
							<label
								htmlFor={`skill-level-${skill.id}`}
								className='block text-sm font-medium text-gray-700'
							>
								Level
							</label>
							<select
								id={`skill-level-${skill.id}`}
								className='border border-gray-300 rounded-md p-2 w-full bg-white'
								value={skill.level}
								onChange={(e) =>
									handleSkillChange(skill.id, 'level', e.target.value)
								}
							>
								<option value='Beginner'>Beginner</option>
								<option value='Intermediate'>Intermediate</option>
								<option value='Advanced'>Advanced</option>
								<option value='Expert'>Expert</option>
							</select>
						</div>
					</div>

					<button
						type='button'
						onClick={() => handleRemoveSkill(skill.id)}
						className='self-end inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors'
					>
						Remove
					</button>
				</div>
			))}
		</div>
	);
}
