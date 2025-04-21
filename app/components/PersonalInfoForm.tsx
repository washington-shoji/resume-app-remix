interface PersonalInfo {
	firstName: string;
	lastName: string;
	professionalTitle: string;
}

interface PersonalInfoFormProps {
	data: PersonalInfo;
	onChange: (data: PersonalInfo) => void;
}

export default function PersonalInfoForm({
	data,
	onChange,
}: PersonalInfoFormProps) {
	return (
		<div className='space-y-4'>
			<h2 className='text-lg font-medium text-gray-900'>
				Personal Information
			</h2>

			<div className='space-y-4'>
				<div>
					<label
						htmlFor='firstName'
						className='block text-sm font-medium text-gray-700'
					>
						First Name
					</label>
					<input
						id='firstName'
						type='text'
						className='border border-gray-300 rounded-md p-2 w-full bg-white'
						value={data.firstName}
						onChange={(e) => onChange({ ...data, firstName: e.target.value })}
					/>
				</div>

				<div>
					<label
						htmlFor='lastName'
						className='block text-sm font-medium text-gray-700'
					>
						Last Name
					</label>
					<input
						id='lastName'
						type='text'
						className='border border-gray-300 rounded-md p-2 w-full bg-white'
						value={data.lastName}
						onChange={(e) => onChange({ ...data, lastName: e.target.value })}
					/>
				</div>

				<div>
					<label
						htmlFor='professionalTitle'
						className='block text-sm font-medium text-gray-700'
					>
						Professional Title
					</label>
					<input
						id='professionalTitle'
						type='text'
						className='border border-gray-300 rounded-md p-2 w-full bg-white'
						value={data.professionalTitle}
						onChange={(e) =>
							onChange({ ...data, professionalTitle: e.target.value })
						}
					/>
				</div>
			</div>
		</div>
	);
}
