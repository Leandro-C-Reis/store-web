import axios from 'axios';

//https://store-api-net.herokuapp.com/
const app = axios.create({
    baseURL: 'https://store-api-net.herokuapp.com/'
});

export default app;