import ProblemCard from './ProblemCard';

const Problems = () => {
    return (
        <div className="wrapper">
            <h2 className="text-mini-title">Проблематика</h2>
            <div className="problem-wrapper">
                <ProblemCard
                    name={'Временные затраты'}
                    desc={
                        'Оформление документов от реестра до регистрации в бухгалтерии занимает много времени и подвержено ошибкам.'
                    }
                    icon="Graph"
                />
                <ProblemCard
                    name={'Ручная обработка'}
                    desc={
                        'Наличие ручных операций, таких как создание реестров, сканирование документов и проверка их корректности, увеличивает вероятность ошибок и требует дополнительных усилий от сотрудников.'
                    }
                    icon="CurrencyRub"
                />
                <ProblemCard
                    name={'Финансовые риски'}
                    desc={
                        'Недостаточная точность и задержки в процессе бухгалтерской регистрации могут создать финансовые риски для организации, такие как ошибки в налогообложении, штрафы и потеря денежных средств'
                    }
                    icon="Warning"
                />
            </div>
        </div>
    );
};

export default Problems;
