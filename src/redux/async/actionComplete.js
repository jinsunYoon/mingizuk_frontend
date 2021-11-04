import { createAsyncThunk } from '@reduxjs/toolkit'
import { actionCompleteAPI } from '../../shared/api'
import { history } from '../store'

export const actionCompleteMD = createAsyncThunk(
    'actionComplete/complete',
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
