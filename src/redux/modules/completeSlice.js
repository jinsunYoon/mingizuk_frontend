import { Tune } from '@material-ui/icons'
import { createSlice } from '@reduxjs/toolkit'
import { actionCompleteMD, actionRestartMD } from '../async/actionComplete'

const initialState = {
    modalStatus: false,
    ImgSrc: 'https://s3.ap-northeast-2.amazonaws.com/sunnieee.shop/ming2.gif',
    actionName: '',
    actionId: '',
    routineId: '',
    actionBtn: '시작 !',
    completeBtn: false,
    defaultBtn: true,
    finDate: false,
    result: [],
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
        setFinDate: (state, { payload }) => {
            state.finDate = payload
        },
        setResult: (state, { payload }) => {
            state.result = payload
        },
    },

    extraReducers: {
        [actionCompleteMD.fulfilled]: (state, action) => {
            console.log('완료풀필드', action?.payload?.data?.result)
            state.result.push(action?.payload?.data?.result)
        },
        [actionRestartMD.fulfilled]: (state, action) => {
            console.log('리스타트풀필드', action.payload)
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
    setFinDate,
    setResult,
} = completeSlice.actions

//* slice export
export default completeSlice
