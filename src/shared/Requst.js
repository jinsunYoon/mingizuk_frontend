import axios from 'axios';
import { getCookie } from './Cookie';

const instance = axios.create({
    baseURL: '',
    headers: { 'X-AUTH-TOKEN': getCookie('token') },
})

export default instance;