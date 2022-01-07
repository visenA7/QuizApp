import axios from 'axios';

const frontend = axios.create({
  baseURL: 'https://api.startladder.co/api/frontend',
});

export default frontend;
