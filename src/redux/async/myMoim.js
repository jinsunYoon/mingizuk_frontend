import { createAsyncThunk } from '@reduxjs/toolkit';
import { 
    myMoimCreateAPI, 
    myMoimJoinAPI, 
    myMoimCommentAPI, 
    myMoimLikeAPI
} from '../../shared/api'


export const myMoimCreateMD = createAsyncThunk(
    'users/moims',
    async(data, thunkAPI) => {
        try{
            console.log(data)
            const response = await myMoimCreateAPI(data)
            if(response){
                console.log(response)
                return response
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const myMoimJoinMD = createAsyncThunk(
    'users/moims',
    async(data, thunkAPI) => {
        try{
            console.log(data)
            const response = await myMoimJoinAPI(data)
            if(response){
                console.log(response, '>>>마이모임조인 리스폰스')
                return response
            }
        }catch(err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const myMoimLikeMD = createAsyncThunk(
    'users/moim/like',
    async(data, thunkAPI) => {
        try{
            const response = await myMoimLikeAPI()
            if(response){
                console.log(response,'>>>라이크 리스폰스')
                return response
            }
        }catch(err){
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const myMoimCommentMD = createAsyncThunk(
    'user/comments',
    async(data, thunkAPI) => {
        try{
            const response = await myMoimCommentAPI()
            if(response){
                return response
            }
        }catch(err){
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)