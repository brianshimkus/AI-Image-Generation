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
					className='block text-sm font-medium text-gray-900'>
					{labelName}
				</label>
				{isSurpriseMe && (
					<button
						type='button'
						className='font-semibold text-xs bg-[#ECECF!] py-1 px-2 rounded-[5px] text-black'
						onClick={handleSurpriseMe}>
						Surprise me
					</button>
				)}
			</div>
		</div>
	)
}
