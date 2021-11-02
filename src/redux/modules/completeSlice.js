import { Tune } from '@material-ui/icons'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    modalStatus: false,
    ImgSrc: 'https://s3.ap-northeast-2.amazonaws.com/sunnieee.shop/ming.JPG',
    actionName: '',
    actionBtn: '시작 !',
    completeBtn: false,
    defaultBtn: true,
}

const completeSlice = createSlice({
    name: 'setModal',
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
})

//* reducer export
export const {
    setModal,
    setImgSrc,
    setActionName,
    setActionBtn,
    setCompleteBtn,
    setDefaultBtn,
} = completeSlice.actions

//* slice export
export default completeSlice
