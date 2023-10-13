import { Route, Routes } from 'react-router-dom'
import { Home } from './components/home/Home'
import Presentation from './components/presentation/Presentation'
import Action from './components/action/Action.jsx'

export const ProjectRoutes = () => {
	return (
		<main className='content-wrapper'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/presentation' element={<Presentation />} />
				<Route path='/graph' element={<Action />} />
			</Routes>
		</main>
	)
}
