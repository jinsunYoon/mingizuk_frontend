import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    modalStatus: false,
    ImgSrc: 'https://s3.ap-northeast-2.amazonaws.com/sunnieee.shop/ming.JPG',
    actionName: '',
    actionBtn: '시작 !',
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
    },
})

//* reducer export
export const { setModal, setImgSrc, setActionName, setActionBtn } =
    completeSlice.actions

//* slice export
export default completeSlice
