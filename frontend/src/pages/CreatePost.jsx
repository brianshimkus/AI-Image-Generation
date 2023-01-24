import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
				</div>
			</form>
		</section>
	)
}
