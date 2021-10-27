/* 유저모듈 입니다 (로그인, 회원가입 로직) */

import { createReducer, createAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
    userEmail: null,
    nickName: null,
    is_login: false,
}

// action types
const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'
const GET_USER = 'GET_USER'

// action creators
// const logIn = createAction(LOG_IN, ()=>());
// const logOut = createAction(LOG_OUT, ()=>());
// const getUser = createAction(GET_USER, ()=>());

// middlewares

// 회원가입
const gethSignup = (userEmail, nickName, userPw, userPwChk) => {
    return (dispatch, getState, { history }) => {}
}

// 로그인
const getLogin = (userEmail, userPw) => {
    return () => {}
}

// 소셜로그인
const getNaver = () => {
    return () => {}
}

const getKakao = () => {
    return () => {}
}

const getGoogle = () => {
    return () => {}
}

// 로그아웃
// const getLogout = (header:{ accessToken:(token), refreshToken:(token) }) => {
//     return (() => {

//     })
// }

// 로그인 유저 확인
// const getMe = (header:{ accessToken:(token), refreshToken:(token) }) => {
//     return (() => {

//     })
// }

// 회원탈퇴
const deleteBye = () => {
    return () => {}
}
