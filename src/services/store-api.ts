import axios from 'axios';

//https://store-api-net.herokuapp.com/
const app = axios.create({
    baseURL: 'http://localhost:8000'
});

export default app;