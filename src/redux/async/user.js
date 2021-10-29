import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginAPI, signupAPI, logoutAPI } from '../../shared/api'
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
    'user/logoutz',
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
