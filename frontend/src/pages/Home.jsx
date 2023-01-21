import { useState } from 'react'
import FormField from '../components/FormField'
import Loader from '../components/Loader'

const RenderCards = ({ data, title }) => {
	if (data?.length > 0) {
		return data.map((post) => <Card key={post._id} {...post} />)
	} else {
		return (
			<h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'>
				{title}
			</h2>
		)
	}
}

export default function Home() {
	const [loading, setLoading] = useState(false)
	const [allPosts, setAllPosts] = useState(null)
	const [searchText, setSearchText] = useState('')

	return (
		<section className='max-w-7xl mx-auto'>
			<div>
				<h1 className='font-extrabold text-[#222328] text-[32px]'>
					The Community Showcase
				</h1>
				<p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>
					Browse through a collection of images
				</p>
			</div>

			<div className='mt-16'>
				<FormField />
			</div>

			<div className='mt-16'>
				{loading ? (
					<div className='flex justify-center items-center'>
						<Loader />
					</div>
				) : (
					<>
						{searchText && (
							<h2 className='font-medium text-[#666e75] text-xl mb-3'>
								Showing results for{' '}
								<span className='text-[#222328]'>{searchText}</span>
							</h2>
						)}
						<div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3'>
							{searchText ? (
								<RenderCards data={[]} title='No results found' />
							) : (
								<RenderCards data={[]} title='No posts found' />
							)}
						</div>
					</>
				)}
			</div>
		</section>
	)
}
