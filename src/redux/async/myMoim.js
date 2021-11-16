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
                console.log('>>>', response)
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
            console.log(data)
            const response = await myMoimJoinAPI(data)
            if (response) {
                console.log('>>>', 'join', response)
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
                console.log('>>>', 'like', response)
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
                console.log(response, '>>>마이코멘트 리스폰스')
                return response
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)
