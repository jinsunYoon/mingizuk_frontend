import axios from 'axios'
import { getToken } from './utils'

// Axios 인스턴스 설정
const instance = axios.create({
    baseURL: 'http://52.79.237.95',
})
const instanceSign = axios.create({
    baseURL: 'http://52.79.237.95',
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

//mainpage

const actionCompleteAPI = (data) => {
    console.log('이거 api 데이터', data)
    return instance.put('/api/users/action', {
        actionId: data[0],
        routineId: data[1],
    })
}

// *---------------------------------------------------
// mypage

const userInfoAPI = (data) => {
    console.log(data)
    return instance.put('/api/users/info', {
        nickName: data.newNickName,
        userPw: data.newPwd,
    })
}

const kakaoAPI = () => {
    return axios.get('http://13.125.110.160/api/auth/kakao')
}


// *----------------------------------------------------
// mymoim
const myMoimCreateAPI = (data) => {
    console.log(data)
    return instance.post('/api/users/moims', {
        userType: 1,
    })
}

const myMoimJoinAPI = (data) => {
    console.log(data)
    return instance.post('/api/users/moims', {
        usertype: 0,
    })
}

const myMoimCommentAPI = (data) => {
    console.log(data)
    return instance.get('/api/users/comments')
}

const myMoimLikeAPI=(data)=>{
    console.log(data)
    return instance.get('/api/moim/like')
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
    return instance.put(`/api/routines/${data.routineId}`, {
        routineName: data.routineName,
        actions: data.actions,
        isMain: data.isMain,
    })
}




// *-----------------------------------------------------

// moim
const moimCreateAPI = (data) => {
    return instance.post('api/moims', {
        title: data.title,
        contents: data.contents,
    })
}





export {
    signupAPI,
    loginAPI,
    logoutAPI,
    kakaoAPI,
    loginCheckAPI,
    userInfoAPI,
    myRoutinePresetAPI,
    myRoutineCreateAPI,
    myRoutineListAPI,
    myRoutineDeleteAPI,
    myRoutineUpdateAPI,
    myMoimCreateAPI,
    myMoimJoinAPI,
    myMoimCommentAPI,
    myMoimLikeAPI,
    moimCreateAPI,
    actionCompleteAPI,
}
