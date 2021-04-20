import axios from 'axios';

const app = axios.create({
    baseURL: 'https://store-api-net.herokuapp.com'
});

export default app;