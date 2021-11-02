import { Tune } from '@material-ui/icons'
import { createSlice } from '@reduxjs/toolkit'
import { actionCompleteMD } from '../async/actionComplete'

const initialState = {
    modalStatus: false,
    ImgSrc: 'https://s3.ap-northeast-2.amazonaws.com/sunnieee.shop/ming.JPG',
    actionName: '',
    actionId: '',
    routineId: '',
    actionBtn: '시작 !',
    completeBtn: false,
    defaultBtn: true,
}

const completeSlice = createSlice({
    name: 'actionComplete',
    initialState: initialState,
    reducers: {
        setModal: (state, { payload }) => {
            state.modalStatus = payload
        },
        setImgSrc: (state, { payload }) => {
            state.ImgSrc = payload
        },
        setActionName: (state, { payload }) => {
            state.actionName = payload
        },
        setActionId: (state, { payload }) => {
            state.actionId = payload
        },
        setRoutineId: (state, { payload }) => {
            state.routineId = payload
        },
        setActionBtn: (state, { payload }) => {
            state.actionBtn = payload
        },
        setCompleteBtn: (state, { payload }) => {
            state.completeBtn = payload
        },
        setDefaultBtn: (state, { payload }) => {
            state.defaultBtn = payload
        },
    },

    extraReducers: {
        [actionCompleteMD.fulfilled]: (state, { payload }) => {
            console.log('리듀서풀필드', state.payload)
        },
    },
})

//* reducer export
export const {
    setModal,
    setImgSrc,
    setActionName,
    setActionId,
    setRoutineId,
    setActionBtn,
    setCompleteBtn,
    setDefaultBtn,
} = completeSlice.actions

//* slice export
export default completeSlice
