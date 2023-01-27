import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormField from '../components/FormField'

export default function CreatePost() {
	const navigate = useNavigate()
	const [form, setForm] = useState({
		name: '',
		prompt: '',
		photo: '',
	})
	const [generatingImg, setGeneratingImg] = useState(false)
	const [loading, setLoading] = useState(false)

	const handleSubmit = async (e) => {}

	const handleChange = (e) => {}

	const handleSurpriseMe = () => {}

	return (
		<section className='max-w-7xl mx-auto'>
			<div>
				<h1 className='font-extrabold text-[#222328] text-[32px]'>Create</h1>
				<p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>
					Create images through AI
				</p>
			</div>

			<form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
				<div className='flex flex-col gap-5'>
					<FormField
						labelName='Your name'
						type='text'
						name='name'
						placeholder='John Doe'
						value={form.name}
						handleChange={handleChange}
					/>

					<FormField
						labelName='Prompt'
						type='text'
						name='prompt'
						placeholder='An astronaut lounging in a tropical resort in space, vaporwave'
						value={form.prompt}
						handleChange={handleChange}
						isSurpriseMe
						handleSurpriseMe={handleSurpriseMe}
					/>
					<div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
						{form.photo ? (
							<img
								src={form.photo}
								alt={form.prompt}
								className='w-full h-full object-contain'
							/>
						) : (
							<>
								<svg
									className='w-8 h-8 text-gray-400'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									aria-hidden='true'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M12 6v6m0 0v6m0-6h6m-6 0H6'
									/>
								</svg>
							</>
						)}
					</div>
				</div>
			</form>
		</section>
	)
}
