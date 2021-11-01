import axios from 'axios'
import { getToken } from './utils'

// Axios 인스턴스 설정
const instance = axios.create({
    baseURL: 'http://13.125.110.160',
})
const instanceSign = axios.create({
    baseURL: 'http://13.125.110.160',
})

// interceptor를 통한 header 설정
instance.interceptors.request.use(async (config) => {
    config.headers['content-type'] = 'application/json; charset=utf-8'
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    config.headers['Accept'] = '*/*'
    config.headers['accessToken'] = await getToken().accessToken
    config.headers['refreshToken'] = await getToken().refreshToken
    return config
})
instanceSign.interceptors.request.use(async (config) => {
    config.headers['content-type'] = 'application/json; charset=utf-8'
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    config.headers['Accept'] = '*/*'
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
        console.log(error)
        window.alert(error.response.data.msg)
    }
)

instanceSign.interceptors.response.use(
    async (response) => {
        console.log(response)
        return response
    },
    async (error) => {
        console.log(error)
        window.alert(error.response.data.msg)
    }
)

// user API
const signupAPI = (data) => {
    return instanceSign.post('/api/auth/signup', {
        userEmail: data.userEmail,
        nickName: data.nickName,
        userPw: data.userPw,
        userPwChk: data.userPwChk,
    })
}

const loginAPI = (data) => {
    return instanceSign.post('/api/auth/local', {
        userEmail: data.userEmail,
        userPw: data.userPw,
    })
}

const logoutAPI = () => {
    return instance.get('/api/auth/logout')
}

const loginCheckAPI = () => {
    return instance.get('/api/auth/me')
}

// *---------------------------------------------

// mypage

const userInfoAPI = (data) => {
    return instance.put('/api/users/info', {
        nickName: data.nickName,
        userPw: data.userPw,
    })
}




// * ------------------------------------------------

// routine
const myRoutinePresetAPI = () => {
    return instance.get('/api/routines/preset')
}

const myRoutineCreateAPI = (data) => {
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
    return instance.delete(`/api/routines/${routineId}`)
}

const myRoutineUpdateAPI = (data) => {
    console.log(data)
    return instance.put(`/api/routines/${data.routineId}`, {
        routineName: data.routineName,
        actions: data.actions,
        isMain: data.isMain,
    })
}

export {
    signupAPI,
    loginAPI,
    logoutAPI,
    loginCheckAPI,
    userInfoAPI,
    myRoutinePresetAPI,
    myRoutineCreateAPI,
    myRoutineListAPI,
    myRoutineDeleteAPI,
    myRoutineUpdateAPI,
}
