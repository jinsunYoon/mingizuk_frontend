import axios from 'axios';
import { getToken } from './utils';

// Axios 인스턴스 설정
const instance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});

//┏----------interceptor를 통한 header 설정----------┓
instance.interceptors.request.use(async (config) => {
	config.headers['content-type'] = 'application/json; charset=utf-8';
	config.headers['X-Requested-With'] = 'XMLHttpRequest';
	config.headers['Accept'] = '*/*';
	//getToken는 로컬 스토리지에 토큰이 있다면 반환한다 없다면 null 값 반환
	config.headers['authorization'] = await getToken();
	return config;
});
