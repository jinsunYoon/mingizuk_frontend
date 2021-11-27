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
    moimLeaveAPI,
    moimLocationAPI,
    moimScrollAPI,
    moimLocationScrollAPI,
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
                history.push('/moim')
                return data
            }
        } catch (err) {
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
                return response
            }
        } catch (err) {
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
                return data
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

export const moimLeaveMD = createAsyncThunk(
    'moim/leave',
    async (data, thunkAPI) => {
        try {
            console.log(data.moimId)
            const response = await moimLeaveAPI(data)
            if (response) {
                return data
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const moimLocationMD = createAsyncThunk(
    'moim/location',
    async (locationFilter, thunkAPI) => {
        try {
            const response = await moimLocationAPI(locationFilter)
            console.log('>>>>>!', response)
            if (response) {
                return response
            }
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const moimScrollMD = createAsyncThunk(
    'moim/scroll',
    async (lastId, thunkAPI) => {
        try {
            const response = await moimScrollAPI(lastId)
            console.log('>>>>', response)
            if (response) {
                return response
            }
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const moimLocationScrollMD = createAsyncThunk(
    'moim/locationScroll',
    async (lastId, thunkAPI) => {
        try {
            const response = await moimScrollAPI(lastId)
            console.log('>>>>', response)
            if (response) {
                return response
            }
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)
