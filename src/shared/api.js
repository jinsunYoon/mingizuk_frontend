import axios from 'axios'
import { getToken } from './utils'
import Swal from 'sweetalert2'

// Axios 인스턴스 설정
const instance = axios.create({
    baseURL: 'https://mingijuk.shop',
})
const instanceSign = axios.create({
    baseURL: 'https://mingijuk.shop',
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

const getMainRoutineAPI = () => {
    return instance.get('/api/main/ongoing')
}

const actionCompleteAPI = (data) => {
    console.log('이거 api 데이터', data)
    return instance.put('/api/actions', {
        actionId: data.actionId,
        routineId: data.routineId,
        isReset: 0,
    })
}

const actionRestartAPI = (routineId) => {
    console.log('이거 api 데이터', routineId)
    return instance.post(`/api/routines/create/${routineId}`)
}

const actionResetAPI = (routineId) => {
    console.log('이거 api 데이터', routineId)
    return instance.post(`/api/routines/reset/${routineId}`)
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

// *----------------------------------------------------

// mymoim
const myMoimCreateAPI = (data) => {
    return instance.post('/api/users/moims', { userType: 1 })
}

const myMoimJoinAPI = (data) => {
    return instance.post('/api/users/moims', { userType: 0 })
}

const myMoimCommentAPI = () => {
    return instance.get('/api/users/comments')
}

const myMoimLikeAPI = () => {
    console.log('>>', 'api')
    return instance.get('/api/moims/like')
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
    })
}

const setmainRoutineAPI = (data) => {
    return instance.put('/api/users/mainRoutine', {
        routineId: data.routineId,
    })
}

// *-----------------------------------------------------

// moim
const moimCreateAPI = (data) => {
    return instance.post('api/moims', {
        title: data.title,
        contents: data.contents,
        imgSrc: data.imgSrc,
        startAt: data.startAt,
        finishAt: data.finishAt,
        location: data.location,
    })
}

const moimReadAPI = () => {
    return instance.get('/api/moims')
}

const moimUpdateAPI = (data) => {
    return instance.put(`/api/moims/${data.moimId}`, {
        title: data.title,
        contents: data.contents,
        imgSrc: data.imgSrc,
    })
}

const moimDeleteAPI = (moimId) => {
    return instance.delete(`/api/moims/${moimId}`)
}

const moimDetailAPI = (moimId) => {
    return instance.get(`/api/moims/${moimId}`)
}

const moimLikeAPI = (moimId) => {
    return instance.post(`/api/moims/like/${moimId}`)
}

const moimUnlikeAPI = (moimId) => {
    return instance.delete(`/api/moims/like/${moimId}`)
}

const moimJoinAPI = (data) => {
    return instance.post(`/api/moims/${data.moimId}`)
}

const moimLeaveAPI = (data) => {
    return instance.post(`/api/moims/${data.moimId}/exit`)
}

const moimCreateReviewAPI = (data) => {
    return instance.post(`/api/moims/comment/${data.moimId}`, {
        contents: data.contents,
    })
}

const moimDeleteReviewAPI = (commentId) => {
    return instance.delete(`/api/moims/comment/${commentId}`)
}

const moimUpdateReviewAPI = (data) => {
    return instance.put(`/api/moims/comment/${data.commentId}`, {
        contents: data.contents,
    })
}

// * history , habittraker
const finRoutinesActionsAPI = () => {
    return instance.get('/api/main/trackerHistory')
}

// * character
const getCharacterAPI = () => {
    return instance.get(`/api/characters`)
}

const postCharacterAPI = () => {
    return instance.post(`/api/characters`)
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
    myMoimCreateAPI,
    myMoimJoinAPI,
    myMoimCommentAPI,
    myMoimLikeAPI,
    moimCreateAPI,
    actionCompleteAPI,
    moimReadAPI,
    moimDeleteAPI,
    moimDetailAPI,
    moimCreateReviewAPI,
    moimDeleteReviewAPI,
    moimUpdateReviewAPI,
    getMainRoutineAPI,
    setmainRoutineAPI,
    moimUpdateAPI,
    moimLikeAPI,
    moimUnlikeAPI,
    moimJoinAPI,
    moimLeaveAPI,
    actionRestartAPI,
    finRoutinesActionsAPI,
    actionResetAPI,
    getCharacterAPI,
    postCharacterAPI,
}
