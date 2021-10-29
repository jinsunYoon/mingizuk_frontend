/* 유저모듈 입니다 (로그인, 회원가입 로직) - immer, redux-actions 이용 */
import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import instance from '../../shared/api';

const initialState = {
    userEmail: null,
    nickName: null,
    is_login: false,
}

// action types
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const GET_USER = 'GET_USER';

// action creators
const logIn = createAction(LOG_IN, (user)=>(user));
const logOut = createAction(LOG_OUT, (user)=>(user));
const getUser = createAction(GET_USER, (user)=>(user));

// middlewares
    // 회원가입
    const getSignup = (userEmail, nickName, userPw, userPwChk) => {
        return ( dispatch, getState, {history} ) => {
            instance
                .get('/signup', {
                    userEmail: userEmail,
                    nickName: nickName,
                    userPw: userPw,
                    userPwChk: userPwChk
                })
                .then((res) => {
                    window.alert('회원가입을 축하드립니다.')
                    // history.replace('/login');
                })
                .catch((err) => {
                    window.alert('이미 존재하는 아이디입니다.')
                });

                console.log("postSignup으로 값이 잘 받아와지나?", userEmail, nickName, userPw, userPwChk)
            }
    }

    // 로그인
    const getLogin = (userEmail, userPw) => {
        return ( () => {
            instance
        } )
    } 

    // 소셜로그인
    const getNaver = () => {
        return ( () => {

        } )
    }

    const getKakao = () => {
        return (() => {
            
        })
    }

    const getGoogle = () => {
        return ( () => {
            
        })
    }

    // 로그아웃
    const getLogout = (header:{ accessToken:(token), refreshToken:(token) }) => {
        return (() => {
            
        })
    }

    // 로그인 유저 확인
    const getMe = (header:{ accessToken:(token), refreshToken:(token) }) => {
        return (() => {

        })
    }

    // 회원탈퇴
    const deleteBye = () => {
        return (() => {

        })
    }

const actionCreators = {
    logIn,
    logOut,
    getUser,

}
export { actionCreators }