import axios from 'axios';
import { getToken } from './Cookie'


// Axios 인스턴스 설정
const instance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	//headers:{
	//}
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


// ┏----------interceptor를 통한 response 설정----------┓
instance.interceptors.response.use(
    async response => {
        if (response.data.message === "new token") {
            const { config } = response;
            const originalRequest = config;

            const newAccessToken = response.data.myNewToken;
            localStorage.setItem("token", newAccessToken);

            axios.defaults.headers.common.authorization = `Bearer ${newAccessToken}`;
            originalRequest.headers.authorization = `Bearer ${newAccessToken}`;
            return axios(originalRequest);
        }

        return response;
    },
    async error => {
        const {
            config,
            response: { status },
        } = error;

        if (
            status === 401 &&
            error.response.data.message !== "비밀번호가 틀렸습니다."
        ) {
            localStorage.removeItem("token");
            Swal.fire("로그인", "로그인 시간이 만료되었습니다.", "error");
        }
        return Promise.reject(error);
    },
);



// 사용자 관련 axios API 통신
export const userApi = {
//인증	
	//회원가입
	signupAX: data => 
		instance.post("api/auth/signup", {
			email: data.useremail,
			nickname: data.nickName,
			password: data.userPw,
		}),

	//일반로그인
	loginAX: data => 
		instance.post("api/auth/login", {
			email: data.userEmail,
			password: data.userPw
		}),
	
	//로그아웃
	logoutAX: data => 
		instance.get("api/auth/logout"),
	
	//로그인 유저 확인
	getUserAX: headers => 
		instance.get("api/user/me", {
			header:{
				accsessToken:,
				refreshToken:,
			}
		}),

//마이페이지
	//회원탈퇴

	//캐릭터컬렉션조회

	//정보관리-수정
	
}

const api = {
	instance,

}
	
export default api;