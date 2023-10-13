import '../../styles/header.scss'
import { GithubLogo } from '@phosphor-icons/react'

import { useScroll } from '../../hooks/useScroll'
import HackatonLogo from '../../assets/svg/HackatonLogo'
import { NavLink } from 'react-router-dom'
import { RailwaysLogo } from '../../assets/svg/Railways'

export const Header = () => {
	const isScrolled = useScroll()

	return (
		<header className={`header-wrapper${isScrolled ? ' scrolled' : ''}`}>
			<div className='header-fader'></div>
			<div className='header-content'>
				<NavLink to={'/'} className='title'>
					<RailwaysLogo />
					<h1>Анализатор текста</h1>
				</NavLink>
				<div className='additional-content'>
					<NavLink
						to={'https://hacks-ai.ru'}
						target='_blank'
						className='hackaton-header'
					>
						<HackatonLogo />
					</NavLink>
					<NavLink
						to={'https://github.com/Sereneum/ai-railway-scanner-app'}
						target='_blank'
						className='github-button'
					>
						<GithubLogo weight='bold' className='icon-big' />
						<p>GitHub</p>
					</NavLink>
				</div>
			</div>
		</header>
	)
}
