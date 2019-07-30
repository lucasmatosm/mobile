import axios from 'axios';

const api = axios.create({
        baseURL: 'https://desafioback.herokuapp.com/'
});

export default api;