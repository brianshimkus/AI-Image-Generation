export default function FormField({
	labelName,
	type,
	name,
	placeholder,
	value,
	handleChange,
	isSurpriseMe,
	handleSurpriseMe,
}) {
	return (
		<div>
			<div className='flex items-center gap-2 mb-2'>
				<label
					htmlFor={name}
					className='block text-sm font-medium text-gray-300'>
					{labelName}
				</label>
				{isSurpriseMe && (
					<button
						type='button'
						className='font-semibold text-xs bg-[#ECECF!] py-1 px-2 rounded-[5px] text-gray-300'
						onClick={handleSurpriseMe}>
						Surprise me
					</button>
				)}
			</div>
			<input
				type='text'
				id={name}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				required
				className='bg-gray-700 border border-slate-600 text-slate-400 text-sm rounded-lg focus:ring-[#6469ff] focus:border-gray-300 outline-none block w-full p-3'
			/>
		</div>
	)
}
