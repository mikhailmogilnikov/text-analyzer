import ProblemCard from './ProblemCard'

const Problems = () => {
	return (
		<div className='wrapper'>
			<h2 className='text-mini-title'>Проблематика</h2>
			<div className='problem-wrapper'>
				<ProblemCard
					name={'Временные затраты'}
					desc={
						'Оформление документов от реестра до регистрации в бухгалтерии занимает много времени и подвержено ошибкам.'
					}
					icon='Graph'
				/>
				<ProblemCard
					name={'Сложности после внедрения'}
					desc={
						'Инновации не исключают рисков при оформлении документов из-за некорректных заполнений, что требует дополнительных обработок и затрат.'
					}
					icon='CurrencyRub'
				/>
				<ProblemCard
					name={'Потребность в автоматизации'}
					desc={
						'Для улучшения процесса нужна автоматизация анализа документов. Это позволит проверять документы и оптимизировать данные.'
					}
					icon='Warning'
				/>
			</div>
		</div>
	)
}

export default Problems
