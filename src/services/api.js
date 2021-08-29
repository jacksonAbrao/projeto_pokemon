import axios from 'axios';

const api = axios.create({
  baseURL: 'http://https://pokeapi.co/',
});

export default api;
