import { CircleNotch, CloudArrowUp } from '@phosphor-icons/react';
import '../../styles/action.scss';
import { useState } from 'react';
import Dropzone from 'react-dropzone';
import post from '../../scripts/post.js';

const Action = () => {
  const [state, setState] = useState(null);

  const changeState = () => {
    if (state === null) {
      setState('attached');
    } else {
      setState(null);
    }
  };

  const onDrop = (acceptedFiles) => {
    if (!acceptedFiles.length) return;
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const fileContents = e.target.result;
      post(fileContents, file);
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="presentation-wrapper">
      <div className="map-wrapper">
        <div className="map-header">
          <h1>Онлайн-анализатор документов</h1>
          {state === null ? (
            <p className="low-opacity">Ожидание скан-образа (.pdf, .docx).</p>
          ) : (
            <p style={{ color: '#dad71e' }}>
              Ожидание проверки. Пожалуйста, подождите.
            </p>
            // <></>
          )}
        </div>
        {state === null ? (
          <Dropzone
            onDrop={onDrop}
            accept={{ 'data/pdf': ['.pdf'] }}
            maxFiles={1}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className="attach-field">
                <input {...getInputProps()} />

                <CloudArrowUp className="icon-attach" />
                <h2>Прикрепите файл или перетащите его в это поле</h2>
              </div>
            )}
          </Dropzone>
        ) : (
          <>
            <div style={{ padding: '100px' }}>
              <CircleNotch
                weight="bold"
                className="icon-big loader low-opacity"
              />
            </div>

            {/* <div className="scale-wrapper" style={{ padding: '50px' }}>
              <h2>Тип акта: М-10</h2>
              <div className="scale-item" style={{ borderColor: '#34da1e51' }}>
                <p
                  style={{
                    textAlign: 'center',
                    width: '100%',
                    color: '#34da1e',
                  }}
                >
                  Успешно! Файл соответствует критериям акта.
                </p>
              </div>
            </div> */}

            {/* <div className="scale-wrapper" style={{ padding: '50px' }}>
              <h2>Тип акта: М-10</h2>
              <p
                style={{
                  textAlign: 'center',
                  width: '100%',
                  color: '#da1e1e',
                  fontSize: '16px'
                }}
              >
                Файл содержит ошибки.
              </p>

              <div className="scale-item" style={{ borderColor: '#da1e1e51' }}>
                <p
                  style={{
                    textAlign: 'center',
                    width: '100%',
                  }}
                >
                  Ошибка
                </p>
              </div>
              <div className="scale-item" style={{ borderColor: '#da1e1e51' }}>
                <p
                  style={{
                    textAlign: 'center',
                    width: '100%',
                  }}
                >
                  Ошибка
                </p>
              </div>
            </div> */}

            <div className="button-wrapper" style={{ maxWidth: '400px' }}>
              <div
                style={{ marginTop: '40px' }}
                onClick={changeState}
                className="button select-zoom"
              >
                <p>Отмена</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Action;

// [
//     {
//         "filename": "1.mp4",
//         "cases_count": "2",
//         "timestamps": [
//             "00:22",
//             "00:25"
//         ]
//     },
//     {
//         "filename": "2.mp4",
//         "cases_count": "2",
//         "timestamps": [
//             "00:00",
//             "00:03"
//         ]
//     },
//     {
//         "filename": "3.mp4",
//         "cases_count": "1",
//         "timestamps": [
//             "00:22"
//         ]
//     },
//     {
//         "filename": "4.mp4",
//         "cases_count": "1",
//         "timestamps": [
//             "00:00"
//         ]
//     },
//     {
//         "filename": "5.mp4",
//         "cases_count": "1",
//         "timestamps": [
//             "00:00"
//         ]
//     }
// ]
