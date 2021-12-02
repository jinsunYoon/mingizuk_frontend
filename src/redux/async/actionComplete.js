import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    actionCompleteAPI,
    actionRestartAPI,
    actionResetAPI,
} from '../../shared/api'
import { history } from '../store'

export const actionCompleteMD = createAsyncThunk(
    'completeSlice/actionComplete',
    async (data, thunkAPI) => {
        try {
            const response = await actionCompleteAPI(data)
            if (response) {
                return response
            }
        } catch (err) {
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
                return response
            }
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const actionResetMD = createAsyncThunk(
    'completeSlice/reset',
    async (data, thunkAPI) => {
        try {
            const response = await actionResetAPI(data)
            if (response) {
                return response
            }
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)
