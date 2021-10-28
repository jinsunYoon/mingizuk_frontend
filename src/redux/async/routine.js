import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    myRoutinePresetAPI,
    myRoutineCreateAPI,
    myRoutineListAPI,
    myRoutineDeleteAPI,
} from '../../shared/api'

export const myRoutinePresetMD = createAsyncThunk(
    'routine/preset',
    async (data, thunkAPI) => {
        try {
            const response = await myRoutinePresetAPI()
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

export const myRoutineCreateMD = createAsyncThunk(
    'routine/create',
    async (data, thunkAPI) => {
        try {
            console.log('2', data)
            const response = await myRoutineCreateAPI(data)
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

export const myRoutineListMD = createAsyncThunk(
    'routine/mylist',
    async (data, thunkAPI) => {
        try {
            const response = await myRoutineListAPI()
            if (response) {
                return response
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const myRoutineDeleteMD = createAsyncThunk(
    'routine/delete',
    async (routineId, thunkAPI) => {
        try {
            const response = await myRoutineDeleteAPI(routineId)
            if (response) {
                return response
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)
