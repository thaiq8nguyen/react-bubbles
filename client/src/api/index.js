import axios from '../utils/axios';

export const Authenticate = ({ username, password }) => {
  return axios.post('login', {
    username: username,
    password: password,
  });
};

export const FetchBubbleList = () => {
  return axios.get('colors');
};

export const DeleteColor = (color) => {
  return axios.delete(`colors/${color.id}`);
};

export const UpdateColor = (colorToEdit) => {
  return axios.put(`colors/${colorToEdit.id}`, colorToEdit);
};

export const AddColor = (colorObject) => {
  return axios.post('/api/colors', colorObject);
};
