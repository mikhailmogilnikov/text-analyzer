import AlgoItem from './AlgoItem'

const Algorythm = () => {
	return (
		<div className='wrapper'>
			<h2 className='text-mini-title'>Алгоритм</h2>

			<div className='algo-wrapper'>
				<AlgoItem
					num='1'
					name='Отправка скан-образа'
					desc='Фиксация видео с камеры или загруженного файла.'
				/>
				<AlgoItem
					num='2'
					name='Распознавание объектов'
					desc='Нейросеть определяет наличие опасных ситуаций.'
				/>
				<AlgoItem
					num='3'
					name='Журналирование критических событий'
					desc='Запись данных в csv-файл.'
				/>
				<AlgoItem
					num='4'
					name='Отрисовка графика'
					desc='Преобразование полученных данных в визуальный формат.'
				/>
			</div>
		</div>
	)
}

export default Algorythm
