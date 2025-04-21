interface ContactInfo {
	id: string;
	label: string;
	value: string;
}

interface ContactInfoFormProps {
	contactInfo: ContactInfo[];
	onChange: (contactInfo: ContactInfo[]) => void;
}

const CONTACT_TYPES = [
	{ value: 'email', label: 'Email' },
	{ value: 'phone', label: 'Phone' },
	{ value: 'linkedin', label: 'LinkedIn' },
	{ value: 'github', label: 'GitHub' },
	{ value: 'website', label: 'Website' },
	{ value: 'location', label: 'Location' },
];

export default function ContactInfoForm({
	contactInfo,
	onChange,
}: ContactInfoFormProps) {
	const handleAddContact = () => {
		if (contactInfo.length < 5) {
			const newContact: ContactInfo = {
				id: `contact_${Date.now()}`,
				label: CONTACT_TYPES[0].value,
				value: '',
			};
			onChange([...contactInfo, newContact]);
		}
	};

	const handleRemoveContact = (id: string) => {
		onChange(contactInfo.filter((contact) => contact.id !== id));
	};

	const handleContactChange = (
		id: string,
		field: keyof ContactInfo,
		value: string
	) => {
		onChange(
			contactInfo.map((contact) =>
				contact.id === id ? { ...contact, [field]: value } : contact
			)
		);
	};

	return (
		<div className='space-y-4'>
			<div className='flex justify-between items-center'>
				<h2 className='text-lg font-medium text-gray-900'>
					Contact Information
				</h2>
				{contactInfo.length < 5 && (
					<button
						type='button'
						onClick={handleAddContact}
						className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'
					>
						Add Contact
					</button>
				)}
			</div>

			{contactInfo.map((contact) => (
				<div key={contact.id} className='flex flex-col space-x-4 gap-4'>
					<div className='flex flex-row space-x-4'>
						<div className='flex-1'>
							<label
								htmlFor={`contact-label-${contact.id}`}
								className='block text-sm font-medium text-gray-700'
							>
								Type
							</label>
							<select
								id={`contact-label-${contact.id}`}
								className='border border-gray-300 rounded-md p-2 w-full bg-white'
								value={contact.label}
								onChange={(e) =>
									handleContactChange(contact.id, 'label', e.target.value)
								}
							>
								{CONTACT_TYPES.map((type) => (
									<option key={type.value} value={type.label}>
										{type.label}
									</option>
								))}
							</select>
						</div>
						<div className='flex-1'>
							<label
								htmlFor={`contact-value-${contact.id}`}
								className='block text-sm font-medium text-gray-700'
							>
								Value
							</label>
							<input
								id={`contact-value-${contact.id}`}
								type={contact.label === 'email' ? 'email' : 'text'}
								className='border border-gray-300 rounded-md p-2 w-full bg-white'
								value={contact.value}
								placeholder={`Enter your ${
									CONTACT_TYPES.find((type) => type.value === contact.label)
										?.label || ''
								}`}
								onChange={(e) =>
									handleContactChange(contact.id, 'value', e.target.value)
								}
							/>
						</div>
					</div>

					<button
						type='button'
						onClick={() => handleRemoveContact(contact.id)}
						className='self-end inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors'
					>
						Remove
					</button>
				</div>
			))}
		</div>
	);
}
