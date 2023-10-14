import JavaScript from '../../../public/assets/images/JavaScript.png';
import OpenCV from '../../../public/assets/images/OpenCV.png';
import Python from '../../../public/assets/images/python.png';
import ToolsCard from './ToolsCard';

const Tools = () => {
  return (
    <div className="wrapper">
      <h2 className="text-mini-title">Технологии</h2>

      <div className="grid-3-wrapper">
        <ToolsCard
          img={Python}
          name={'Python'}
          desc={'Язык программирования. Применяется для работы нейросети.'}
        />
        <ToolsCard
          img={JavaScript}
          name={'JavaScript'}
          desc={
            'Язык программирования. Служит проводником между интерфейсом и программой.'
          }
        />
        <ToolsCard
          img={OpenCV}
          name={'OpenCV'}
          desc={
            'Библиотека алгоритмов компьютерного зрения и обработки изображений.'
          }
        />
        <ToolsCard
          name={'Pdftables'}
          desc={
            'Библиотека для перевода PDF-файлов в Excel-формат.'
          }
        />
        <ToolsCard
          name={'Openpyxl'}
          desc={
            'Библиотека для продвинутой работы с Excel-файлами.'
          }
        />
        <ToolsCard
          name={'OpenLabeling'}
          desc={'Инструмент для разметки полученного датасета.'}
        />
        <ToolsCard
          name={'HTML'}
          desc={
            'Язык разметки, на нём строится структура веб-сайта и приложения.'
          }
        />
        <ToolsCard
          name={'SCSS'}
          desc={
            'Препроцессор для CSS. Оптимизирует работу с вёрсткой контента.'
          }
        />
        <ToolsCard
          name={'React'}
          desc={
            'Библиотека для создания пользовательских интерфейсов на JavaScript.'
          }
        />
        <ToolsCard
          name={'React-dropzone'}
          desc={
            'Библиотека для React, позволяющая делать продвинутые области прикрепления файлов.'
          }
        />
        <ToolsCard
          name={'Recharts'}
          desc={
            'Библиотека для построения графиков на основе полученных данных.'
          }
        />
        <ToolsCard
          name={'Tkinter'}
          desc={
            'Библиотека для Python, используемая для получения файлов из Windows.'
          }
        />
      </div>
    </div>
  );
};

export default Tools;
