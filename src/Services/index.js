import axios from 'axios';
import { toast } from 'react-toastify';
const BASE_URL = 'https://users-crud-backend-nsup.onrender.com/';
export const getUsers = async () => {
  try {
    const res = await axios.get(BASE_URL + 'user');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const createUser = async (data) => {
  try {
    await axios.post(BASE_URL + 'user', data);
    toast.success('User created successfully!');
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (userId, newDataUser) => {
  try {
    await axios.put(BASE_URL + `user/${userId}/`, newDataUser);
    toast.success('User updated successfully!');
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (userId) => {
  try {
    await axios.delete(BASE_URL + `user/${userId}`);
    toast.success('User deleted successfully!');
  } catch (error) {
    console.log(error);
  }
};
export const emptyValueForm = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  birthday: '',
};
