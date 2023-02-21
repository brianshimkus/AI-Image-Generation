import { Home, CreatePost } from './pages'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'

export default function App() {
	return (
		<BrowserRouter>
			<header className='w-full flex justify-between items-center bg-gray-800 sm:px-8 px-4 py-4 border-b border-b-slate-900'>
				<Link to='/'>
					<h1 className='font-bold text-green-400 text-3xl tracking-wider'>
						AI Image Generator
					</h1>
				</Link>

				<Link
					to='/create-post'
					className='font-inter font-medium bg-green-500 text-green-900 uppercase px-4 py-2 rounded-md transition ease-in-out duration-300 hover:bg-green-300 tracking-wider'>
					Create
				</Link>
			</header>
			<main className='sm:p-8 px-4 py-8 bg-gray-800 min-h-[calc(100vh-73px)]'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/create-post' element={<CreatePost />} />
				</Routes>
			</main>
		</BrowserRouter>
	)
}
