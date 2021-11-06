import { createAsyncThunk } from '@reduxjs/toolkit'
import { actionCompleteAPI, actionRestartAPI } from '../../shared/api'
import { history } from '../store'

export const actionCompleteMD = createAsyncThunk(
    'completeSlice/actionComplete',
    async (data, thunkAPI) => {
        try {
            const response = await actionCompleteAPI(data)
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

export const actionRestartMD = createAsyncThunk(
    'completeSlice/complete',
    async (data, thunkAPI) => {
        try {
            const response = await actionRestartAPI(data)
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
