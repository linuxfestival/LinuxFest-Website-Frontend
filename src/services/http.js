import axios from 'axios';

const httpInstance = axios.create({ baseURL: '/' });

export default httpInstance;