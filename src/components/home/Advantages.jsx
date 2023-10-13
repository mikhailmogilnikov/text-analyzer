import { GithubLogo } from '@phosphor-icons/react'
import AdvantageCard from './AdvantageCard'
import { NavLink } from 'react-router-dom'

const Advantages = () => {
	return (
		<div className='grid-3-wrapper'>
			<AdvantageCard
				icon={'App'}
				name={'Приложение для анализа'}
				desc={'Интуитивно понятный интерфейс для взаимодействия с программой.'}
			/>
			<AdvantageCard
				icon={'Chartline'}
				name={'Отрисовка результатов'}
				desc={
					'Наглядная система мониторинга событий, получаемых после анализа.'
				}
			/>
			<AdvantageCard
				icon={'Paperclip'}
				name={'Вариативность распознавания'}
				desc={
					'Нейросеть способна различать обычных пассажиров и сотрудников РЖД.'
				}
			/>
			<AdvantageCard
				name={'Настройки объекта'}
				desc={'Возможность выбора цвета рамки и размера шрифта при анализе.'}
			/>
			<AdvantageCard
				name={'Звуковое оповещение'}
				desc={
					'Программа воспроизводит сигнал при распозновании критической ситуации.'
				}
			/>
			<NavLink
				to={'https://github.com/Sereneum/ai-railway-scanner-app'}
				target='_blank'
				className='card-wrapper large'
				style={{ boxShadow: '0 0 40px 0 rgba(0, 0, 0, 0.05)', height: '100%' }}
			>
				<div className='card-text-wrapper' style={{ padding: '1.5em' }}>
					<h2>Посмотреть решение на GitHub</h2>
					<GithubLogo weight='fill' className='icon-git-large' />
				</div>
			</NavLink>
			<AdvantageCard
				name={'Возможность дообучения'}
				desc={
					'Это позволит улучшить результаты и повысить точность распознавания.'
				}
			/>
			<AdvantageCard
				name={'Журналирование данных'}
				desc={
					'После анализа происходит логирование полученной информации в csv-файл.'
				}
			/>
		</div>
	)
}

export default Advantages
