import { history } from '../redux/store'

// 쿠키 가져오는 함수 : 키값을 가져와서 가공함
const getCookie = (name) => {
    let value = ';' + document.cookie
    let parts = value.split(';' + name + '=')
    if (parts.length === 2) {
        return parts.pop().split(';').shift()
    }
}

// 쿠키에 저장하는 함수
const setCookie = (name, value, exp = 7) => {
    let date = new Date()
    date.setTime(data.getTime() + exp * 24 * 60 * 60 * 1000)
    document.cookie = `${name}=${value}; expires=${date.toUTCStromg()};path=/`
}

// 쿠키를 지우는 함수 : 만료일 7일전으로 만들어서
const deleteCookie = () => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;'
}

// 아이디에서 jwt토큰 받아오는 함수
const getToken = () => {
    const token = getCookie('token')
    if (!token) {
        window.alert('로그인을 해주세요!')
        return
    }

    const payload = token.split('.')[1]
    const decoded = atob(payload)
    const index = decoded.indexOf('","iat')
    const login_user_id = decoded.slice(8, index)
    return login_user_id
}

export { getCookie, setCookie, deleteCookie, getToken }
