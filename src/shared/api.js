import axios from 'axios'
import { useQuery } from 'react-query'
import { history } from '../redux/store'
import { getToken } from './utils'
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
})

const BASE_URL = 'https://mingijuk.shop'

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
        return response
    },
    async (error) => {
        if (
            error.response.data.msg ===
            'accessToken이 재발급되었습니다. 다시 로그인해주세요'
        ) {
            history.push('/login')

            return
        } else if (
            error.response.data.msg.includes(
                '이미 동일한 이름으로 등록된 루틴이 있습니다.'
            )
        ) {
            Toast.fire({
                icon: 'error',
                title: '이미 동일한 이름으로 등록된 루틴이 있습니다.',
            })
            history.push('/routine/mypage')
            return
        }
    }
)

instanceSign.interceptors.response.use(
    async (response) => {
        return response
    },
    async (error) => {
        if (error.response.data.msg.includes('이미 존재하는 이메일')) {
            Toast.fire({
                icon: 'error',
                title: '이미 존재하는 이메일입니다.',
            })
            return
        } else if (error.response.data.msg.includes('이미 존재하는 닉네임')) {
            Toast.fire({
                icon: 'error',
                title: '이미 존재하는 닉네임입니다.',
            })
        }
    }
)

// * react-query-get * react-query-get * react-query-get
const queryGet = (key, url) => {
    return useQuery(
        key,
        () =>
            axios
                .get(`${BASE_URL}${url}`, {
                    headers: {
                        ['accessToken']: getToken().accessToken,
                        ['refreshToken']: getToken().refreshToken,
                    },
                })
                .then(({ data }) => data),
        {
            cacheTime: 60 * 60 * 1000,
            refetchOnWindowFocus: false,
        }
    )
}

const queryDelete = async (url) => {
    return axios
        .delete(`${BASE_URL}${url}`, {
            headers: {
                ['accessToken']: getToken().accessToken,
                ['refreshToken']: getToken().refreshToken,
            },
        })
        .then((res) => console.log('<>', res))
}

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
    return instanceSign
        .post('/api/auth/local', {
            userEmail: data.userEmail,
            userPw: data.userPw,
        })
        .catch((err) => {})
}

const logoutAPI = () => {
    return instance.get('/api/auth/logout')
}

const loginCheckAPI = () => {
    return axios.get(`${BASE_URL}/api/auth/me`, {
        headers: {
            ['accessToken']: getToken().accessToken,
            ['refreshToken']: getToken().refreshToken,
        },
    })
}

const byeAPI = () => {
    return instance.delete('/api/users/bye')
}

// *---------------------------------------------

//mainpage

const getMainRoutineAPI = () => {
    return instance.get('/api/main/ongoing')
}

const actionCompleteAPI = (data) => {
    return instance.put('/api/actions', {
        actionId: data.actionId,
        routineId: data.routineId,
        isReset: 0,
    })
}

const actionRestartAPI = (routineId) => {
    return instance.post(`/api/routines/create/${routineId}`)
}

const actionResetAPI = (routineId) => {
    return instance.put(`/api/routines/reset/${routineId}`)
}

// *---------------------------------------------------

// mypage
const userInfoAPI = (data) => {
    return instance.put('/api/users/info', {
        nickName: data.newNickName,
        userPw: data.newPwd,
    })
}

// *----------------------------------------------------

// mymoim
const myMoimCreateAPI = (data) => {
    return instance.post('/api/moims/mymoims', { userType: 1 })
}

const myMoimJoinAPI = (data) => {
    return instance.post('/api/moims/mymoims', { userType: 0 })
}

const myMoimCommentAPI = () => {
    return instance.get('/api/moims/comment/mycomments')
}

const myMoimLikeAPI = () => {
    return instance.get('/api/moims/like/mylikes')
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
    // .then(() => {
    //     Toast.fire({
    //         icon: 'success',
    //         title: '루틴이 추가되었어요.',
    //     })
    // })
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
        routineId: data,
    })
}

// *-----------------------------------------------------

// moim
const moimCreateAPI = (data) => {
    const locationSp = data.location.split(' ')
    let gu = locationSp.find((e) => {
        return e.charAt(e.length - 1) === '구'
    })
    if (!gu) {
        gu = locationSp.find((e) => {
            return e.charAt(e.length - 1) === '시'
        })
    }

    return instance.post('api/moims', {
        title: data.title,
        contents: data.contents,
        imgSrc: data.imgSrc,
        startAt: data.startAt,
        finishAt: data.finishAt,
        location: data.location,
        filter: data.filter,
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
        finishAt: data.finishAt,
        startAt: data.startAt,
    })
}

const moimDeleteAPI = (moimId) => {
    return instance.delete(`/api/moims/${moimId}`)
}

// *******
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

const moimLocationAPI = (locationFilter) => {
    return instance.post(`/api/moims/search`, { filter: locationFilter })
}

const moimScrollAPI = (lastID) => {
    return instance.post(`/api/moims/scroll/${lastID}`)
}

const moimLocationScrollAPI = (lastID) => {
    return instance.post(`/api/moims/scroll-location/${lastID}`)
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
    queryGet,
    queryDelete,
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
    moimLocationAPI,
    moimScrollAPI,
    moimLocationScrollAPI,
    byeAPI,
}
