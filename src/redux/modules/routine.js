import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    myPage: '',
}

const routineSlice = createSlice({
    name: 'routine',
    initialState: initialState,
    reducers: {
        changeMyPageModal: (state, action) => {
            state.myPage = action.payload
        },
    },
})

//* reducer export
export const { changeMyPageModal } = routineSlice.actions

//* slice export
export default routineSlice
