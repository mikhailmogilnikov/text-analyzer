import '../../styles/footer.scss'
import HackatonLogo from '../../assets/svg/HackatonLogo'
import { RailwaysLogo } from '../../assets/svg/Railways'

export const Footer = () => {
	return (
		<footer className='footer-wrapper'>
			<div className='footer-content'>
				<div className='footer-item'>
					<div className='footer-title'>
					<RailwaysLogo />
					<h1>Анализатор текста</h1>
					</div>
					<div className='hackaton-footer'>
						<HackatonLogo />
					</div>
				</div>

				<div className='footer-item'></div>
			</div>
		</footer>
	)
}
