import axios from 'axios';
import { localQuestions } from '../components/localQuestions';

const frontend = axios.create({
  baseURL: 'https://api.startladder.co/api/frontend',
  timeout: 4000, // Fail fast if API is dead
});

export const getQuestions = async () => {
  try {
    const response = await frontend.get('/tasks');
    if (response && response.data && response.data.task_array) {
      return response.data.task_array;
    }
  } catch (error) {
    console.warn('API connection failed. Falling back to local offline questions database.', error);
  }
  return localQuestions;
};

export default frontend;
