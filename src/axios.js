import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://kmck-mern-tinder-backend.herokuapp.com'
});

export default instance;