import axios from 'axios';

const post = (fileContents, file) => {
  const formData = new FormData();
  formData.append(
    'file',
    new Blob([fileContents], { type: file.type }),
    file.name,
  );
  axios
    .post('http://192.168.43.227:5000/upload', formData)
    .then((response) => {
      console.log('File uploaded successfully', response.data);
    })
    .catch((error) => {
      console.error('Error uploading file', error);
    });
};

export default post;
