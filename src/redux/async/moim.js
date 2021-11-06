import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    moimCreateAPI,
    moimReadAPI,
    moimDeleteAPI,
    moimDetailAPI,
    moimJoinAPI,
    moimCreateReviewAPI,
    moimDeleteReviewAPI,
    moimUpdateReviewAPI,
    moimUpdateAPI,
    moimLikeAPI,
    moimUnlikeAPI,
} from '../../shared/api'
import { history } from '../store'
import swal from 'sweetalert'
import Swal from 'sweetalert2'

export const moimCreateMD = createAsyncThunk(
    'moim/create',
    async (data, thunkAPI) => {
        try {
            const response = await moimCreateAPI(data)
            if (response) {
                swal('Good job!', 'You clicked the button!', 'success', {
                    button: 'Aww yiss!',
                })
                history.push('/moim')
                return response
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const moimReadMD = createAsyncThunk(
    'moim/read',
    async (data, thunkAPI) => {
        try {
            const response = await moimReadAPI()
            if (response) {
                return response
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const moimUpdateMD = createAsyncThunk(
    'moim/update',
    async (data, thunkAPI) => {
        try {
            const response = await moimUpdateAPI(data)
            if (response) {
                console.log(response)
                return data
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const moimDeleteMD = createAsyncThunk(
    'moim/delete',
    async (data, thunkAPI) => {
        try {
            const response = await moimDeleteAPI(data)
            if (response) {
                return data
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const moimDetailMD = createAsyncThunk(
    'moim/detail',
    async (data, thunkAPI) => {
        try {
            const response = await moimDetailAPI(data)
            if (response) {
                return response
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const moimLikeMD = createAsyncThunk(
    'moim/like',
    async (data, thunkAPI) => {
        try {
            const response = await moimLikeAPI(data)
            if (response) {
                console.log('md', response)
                return response
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const moimUnlikeMD = createAsyncThunk(
    'moim/unlike',
    async (data, thunkAPI) => {
        try {
            const response = await moimUnlikeAPI(data)
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

export const moimJoinMD = createAsyncThunk(
    'moim/join',
    async (data, thunkAPI) => {
        try {
            const response = await moimJoinAPI(data)
            if (response) {
                console.log('join', response, data)
                return response
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const moimReviewCreateMD = createAsyncThunk(
    'moim/reviewCreate',
    async (data, thunkAPI) => {
        try {
            const response = await moimCreateReviewAPI(data)
            if (response) {
                Swal.fire('리뷰를 작성하였습니다.')
                const _data = { response, data }
                return _data
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const moimDeleteReviewMD = createAsyncThunk(
    'moim/reviewDelete',
    async (data, thunkAPI) => {
        try {
            const response = await moimDeleteReviewAPI(data.reviewId)
            if (response) {
                Swal.fire('리뷰를 삭제하였습니다.')
                return data
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const moimUpdateReviewMD = createAsyncThunk(
    'moim/reviewUpdate',
    async (data, thunkAPI) => {
        try {
            const response = await moimUpdateReviewAPI(data)
            if (response) {
                Swal.fire('리뷰를 수정하였습니다.')
                return data
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)
