interface ExecutiveSummary {
	summary: string;
}

interface ExecutiveSummaryFormProps {
	data: ExecutiveSummary;
	onChange: (data: ExecutiveSummary) => void;
}

export default function ExecutiveSummaryForm({
	data,
	onChange,
}: ExecutiveSummaryFormProps) {
	return (
		<div className='space-y-4'>
			<h2 className='text-lg font-medium text-gray-900'>Executive Summary</h2>

			<div className='space-y-4'>
				<div>
					<label
						htmlFor='executive-summary'
						className='block text-sm font-medium text-gray-700'
					>
						Executive Summary
					</label>
					<textarea
						id='executive-summary'
						className='border border-gray-300 rounded-md p-2 w-full bg-white mt-1'
						rows={4}
						value={data.summary}
						onChange={(e) => onChange({ ...data, summary: e.target.value })}
					/>
				</div>
			</div>
		</div>
	);
}
