import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    myRoutinePresetAPI,
    myRoutineCreateAPI,
    myRoutineListAPI,
    myRoutineDeleteAPI,
    myRoutineUpdateAPI,
    getMainRoutineAPI,
    setmainRoutineAPI,
    finRoutinesActionsAPI,
} from '../../shared/api'
import { history } from '../store'

export const myRoutinePresetMD = createAsyncThunk(
    'routine/preset',
    async (data, thunkAPI) => {
        try {
            const response = await myRoutinePresetAPI()
            if (response) {
                return response
            }
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const myRoutineCreateMD = createAsyncThunk(
    'routine/create',
    async (data, thunkAPI) => {
        try {
            const response = await myRoutineCreateAPI(data)
            if (response) {
                history.push('/routine/mypage')
                return data
            }
        } catch (err) {
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
                return routineId
            }
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const myRoutineUpdateMD = createAsyncThunk(
    'routine/update',
    async (data, thunkAPI) => {
        try {
            const response = await myRoutineUpdateAPI(data)
            if (response) {
                history.push('/routine/mypage')
                return response
            }
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const getMainRoutineMD = createAsyncThunk(
    'routine/mainRoutine',
    async (data, thunkAPI) => {
        try {
            const response = await getMainRoutineAPI()
            if (response) {
                return response
            }
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const setMainRoutineMD = createAsyncThunk(
    'routine/setMainRoutine',
    async (data, thunkAPI) => {
        try {
            const response = await setmainRoutineAPI(data)
            if (response) {
                return response
            }
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const finRoutinesActionsMD = createAsyncThunk(
    'routine/getFins',
    async (data, thunkAPI) => {
        try {
            const response = await finRoutinesActionsAPI(data)
            console.log('>>?', response)
            if (response) {
                return response
            }
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)
