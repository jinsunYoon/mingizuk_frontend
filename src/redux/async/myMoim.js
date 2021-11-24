import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    myMoimCreateAPI,
    myMoimJoinAPI,
    myMoimCommentAPI,
    myMoimLikeAPI,
} from '../../shared/api'

// ! 이부분 수정
export const myMoimCreateMD = createAsyncThunk(
    'myMoim/myCreate',
    async (data, thunkAPI) => {
        try {
            const response = await myMoimCreateAPI(data)
            if (response) {
                return response
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

// ! 여기부터는 수정하지 않았습니다 !
export const myMoimJoinMD = createAsyncThunk(
    'myMoim/myJoin',
    async (data, thunkAPI) => {
        try {
            const response = await myMoimJoinAPI(data)
            if (response) {
                return response
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const myMoimLikeMD = createAsyncThunk(
    'myMoim/myLike',
    async (data, thunkAPI) => {
        try {
            const response = await myMoimLikeAPI()
            if (response) {
                return response
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const myMoimCommentMD = createAsyncThunk(
    'myMoim/comment',
    async (data, thunkAPI) => {
        try {
            const response = await myMoimCommentAPI()
            console.log(response)
            if (response) {
                return response
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)
