import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginAPI, signupAPI } from '../../shared/api'
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
        try {
            const response = await loginAPI(data)
            const accessToken = response.data.accessToken
            const refreshToken = response.data.refreshToken
            sessionStorage.setItem('accessToken', accessToken)
            sessionStorage.setItem('refreshToken', refreshToken)
            return response, history.push('/')
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)
