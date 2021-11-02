import { Iron } from '@mui/icons-material'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    loginAPI,
    signupAPI,
    logoutAPI,
    loginCheckAPI,
    userInfoAPI,
    kakaoAPI,
} from '../../shared/api'
import { history } from '../store'

export const signupMD = createAsyncThunk(
    'user/signup',
    async (data, thunkAPI) => {
        try {
            const response = await signupAPI(data)
            if (response) {
                console.log('>>', response)
                return response.data, history.push('/login')
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const loginMD = createAsyncThunk(
    'user/login',
    async (data, thunkAPI) => {
        console.log('1', data)
        try {
            const response = await loginAPI(data)
            history.push('/')
            if (response) {
                console.log(response)
                return response
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const logoutMD = createAsyncThunk(
    'user/logout',
    async (data, thunkAPI) => {
        try {
            const response = await logoutAPI()
            return response
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const loginCheckMD = createAsyncThunk(
    'user/loginCheck',
    async (data, thunkAPI) => {
        try {
            const response = await loginCheckAPI()
            if (response) {
                console.log('로긴체크MD', response)
                return response
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const userInfoMD = createAsyncThunk(
    'user/info',
    async (data, thunkAPI) => {
        try {
            console.log('<<', data)
            const response = await userInfoAPI(data)
            if (response) {
                console.log('userInfoMd', response)
                return response
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const kakaoLoginMD = createAsyncThunk(
    'user/kakao',
    async (data, thunkAPI) => {
        try {
            const response = await kakaoAPI()
            if (response) {
                console.log(response)
                return response
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)
