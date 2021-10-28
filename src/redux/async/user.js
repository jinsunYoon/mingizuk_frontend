import { createAsyncThunk } from '@reduxjs/toolkit'
import { signupAPI } from '../../shared/api'

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
