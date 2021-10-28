import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginAPI, signupAPI, logoutAPI } from '../../shared/api'

export const signupMD = createAsyncThunk(
    'user/signup',
    async (data, thunkAPI) => {
        try {
            const response = await signupAPI(data)
            if (response) {
                console.log('>>', response)
                return response.data
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
            return response
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const logoutMD = createAsyncThunk(
    'user/logout',
    async (data, thunkAPI) => {
        try{
            const response = await logoutAPI(data)
            return response
        } catch (err){
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)