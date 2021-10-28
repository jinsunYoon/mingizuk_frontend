import axios from 'axios'
import { getToken } from './utils'

// Axios 인스턴스 설정
const instance = axios.create({
    baseURL: 'http://15.164.93.207',
})

// interceptor를 통한 header 설정
instance.interceptors.request.use(async (config) => {
    config.headers['content-type'] = 'application/json; charset=utf-8'
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    config.headers['Accept'] = '*/*'
    //getToken는 로컬 스토리지에 토큰이 있다면 반환한다 없다면 null 값 반환
    config.headers['accessToken'] = await getToken().accessToken
    config.headers['refreshToken'] = await getToken().refreshToken
    return config
})

// interceptor를 통한 response 설정
instance.interceptors.response.use(
    async (response) => {
        // window.alert(response.data.msg)
        // const tokens = response.data
        console.log(response)
        return response
    },
    async (error) => {
        // const {
        //     response: { status },
        // } = error
        console.log(error)
        // window.alert(error.response.data.msg)
    }
)

// user API
const signupAPI = (data) => {
    return instance.post('/api/auth/signup', {
        userEmail: data.userEmail,
        nickName: data.nickName,
        userPw: data.userPw,
        userPwChk: data.userPwChk,
    })
}

const loginAPI = (data) => {
    return instance.post('/api/auth/local', {
        userEmail: data.userEmail,
        userPw: data.userPw,
    })
}

// * ------------------------------------------------

// routine
const myRoutinePresetAPI = () => {
    return instance.get('/api/routines/preset')
}

const myRoutineCreateAPI = (data) => {
    console.log(getToken())
    return instance.post('/api/routines', {
        routineName: data.routineName,
        actions: data.actions,
        isMain: data.isMain,
    })
}

const myRoutineListAPI = () => {
    return instance.get('api/routines')
}

const myRoutineDeleteAPI = (routineId) => {
    return instance.delete(`/api/routines/:${routineId}`)
}

export {
    signupAPI,
    loginAPI,
    myRoutinePresetAPI,
    myRoutineCreateAPI,
    myRoutineListAPI,
    myRoutineDeleteAPI,
}
