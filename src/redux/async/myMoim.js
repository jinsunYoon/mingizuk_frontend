import { createAsyncThunk } from '@reduxjs/toolkit';
import { myMoimCreateAPI, myMoimJoinAPI, myMoimCommentAPI, myMoimLikeAPI} from '../../shared/api'

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
            const response = await myMoimCreateAPI(data)
            if(response){
                console.log(response)
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
            console.log(data)
            const response = await myMoimLikeAPI(data)
            if(response){
                console.log(response)
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
            console.log(data)
            const response = await myMoimCommentAPI(data)
            if(response){
                console.log(response)
                return response
            }
        }catch(err){
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)