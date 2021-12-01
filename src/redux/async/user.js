import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    loginAPI,
    signupAPI,
    logoutAPI,
    loginCheckAPI,
    userInfoAPI,
    byeAPI,
} from '../../shared/api'
import { history } from '../store'

export const signupMD = createAsyncThunk(
    'user/signup',
    async (data, thunkAPI) => {
        try {
            const response = await signupAPI(data)
            if (response) {
                return response.data, history.push('/login')
            }
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const loginMD = createAsyncThunk(
    'user/login',
    async (data, thunkAPI) => {
        try {
            const response = await loginAPI(data)
            if (response) {
                return response
            }
        } catch (err) {
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
                return response
            }
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const userInfoMD = createAsyncThunk(
    'user/info',
    async (data, thunkAPI) => {
        try {
            const response = await userInfoAPI(data)
            if (response) {
                return data
            }
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const byeMD = createAsyncThunk(
    '/api/users/bye',
    async (data, thunkAPI) => {
        try {
            const response = await byeAPI()
            return response
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)
