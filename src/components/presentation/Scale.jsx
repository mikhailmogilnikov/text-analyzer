import { FileArchive, GearFine, Siren, WebhooksLogo } from '@phosphor-icons/react'

const Scale = () => {
	return (
		<div className='wrapper'>
			<h2 className='text-mini-title'>Масштабируемость</h2>
			<div className='scale-wrapper'>
				<div className='scale-item'>
					<WebhooksLogo weight='bold' className='icon-big' />
					<p>
						Доработка API, на который будут отправляться файлы для дообучения
						нейросети.
					</p>
				</div>

				<div className='scale-item'>
					<GearFine weight='bold' className='icon-big' />
					<p>
						Оптимизация архитектуры нейросети для ускорения обработки и
						возможности работать на менее мощном оборудовании
					</p>
				</div>

				<div className='scale-item'>
					<Siren weight='bold' className='icon-big' />
					<p>
						Подключение к системам оповещения и иному оборудования на посту
						управления
					</p>
				</div>

				<div className='scale-item'>
					<FileArchive weight='bold' className='icon-big' />
					<p>
						Автоматический сбор данных об инцидентах и анализ результатов в виде
						картографии инцидентов
					</p>
				</div>
			</div>
		</div>
	)
}

export default Scale
