import { useState } from 'react';

interface PersonalInfo {
	[key: string]: string;
}

interface PersonalInfoFormProps {
	data: PersonalInfo;
	onChange: (data: PersonalInfo) => void;
}

export default function PersonalInfoForm({
	data,
	onChange,
}: PersonalInfoFormProps) {
	const [fields, setFields] = useState<Array<{ id: string; label: string }>>([
		{ id: 'name', label: 'Full Name' },
		{ id: 'email', label: 'Email' },
		{ id: 'phone', label: 'Phone' },
	]);

	const handleAddField = () => {
		if (fields.length < 5) {
			const newId = `custom_${fields.length + 1}`;
			setFields([...fields, { id: newId, label: 'Custom Field' }]);
		}
	};

	const handleRemoveField = (id: string) => {
		setFields(fields.filter((field) => field.id !== id));
	};

	const handleChange = (id: string, value: string) => {
		onChange({ ...data, [id]: value });
	};

	return (
		<div className='space-y-4'>
			<div className='flex justify-between items-center'>
				<h2 className='text-lg font-medium text-gray-900'>
					Personal Information
				</h2>
				{fields.length < 5 && (
					<button
						type='button'
						onClick={handleAddField}
						className='btn-secondary'
					>
						Add Field
					</button>
				)}
			</div>

			{fields.map((field) => (
				<div key={field.id} className='flex items-center space-x-4'>
					<div className='flex-1'>
						<label className='block text-sm font-medium text-gray-700'>
							{field.label}
						</label>
						<input
							type='text'
							className='form-input'
							value={data[field.id] || ''}
							onChange={(e) => handleChange(field.id, e.target.value)}
						/>
					</div>
					{field.id.startsWith('custom_') && (
						<button
							type='button'
							onClick={() => handleRemoveField(field.id)}
							className='text-red-600 hover:text-red-800'
						>
							Remove
						</button>
					)}
				</div>
			))}
		</div>
	);
}
