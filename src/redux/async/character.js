import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCharacterAPI, postCharacterAPI } from '../../shared/api'
import { history } from '../store'

export const getCharacterMD = createAsyncThunk(
    'character/get',
    async (data, thunkAPI) => {
        try {
            const response = await getCharacterAPI()
            if (response) {
                return response
            }
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const postCharacterMD = createAsyncThunk(
    'character/post',
    async (data, thunkAPI) => {
        try {
            const response = await postCharacterAPI()
            if (response) {
                return response
            }
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)
