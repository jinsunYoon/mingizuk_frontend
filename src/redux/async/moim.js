import { createAsyncThunk } from '@reduxjs/toolkit'
import { moimCreateAPI } from '../../shared/api'
import { history } from '../store'

export const moimCreateMD = createAsyncThunk(
    'moim/create',
    async (data, thunkAPI) => {
        try {
            console.log(data)
            const response = await moimCreateAPI(data)
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
