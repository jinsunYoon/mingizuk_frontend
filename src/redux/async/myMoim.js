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
                console.log(response, '>>>>>>>check')
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
    'users/moims',
    async (data, thunkAPI) => {
        try {
            console.log(data)
            const response = await myMoimJoinAPI(data)
            if (response) {
                console.log(response, '>>>마이모임조인 리스폰스')
                return response
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const myMoimLikeMD = createAsyncThunk(
    'users/moim/like',
    async (data, thunkAPI) => {
        try {
            const response = await myMoimLikeAPI()
            if (response) {
                console.log(response, '>>>라이크 리스폰스')
                return response
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const myMoimCommentMD = createAsyncThunk(
    'user/comments',
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
