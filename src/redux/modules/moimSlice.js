import { createSlice } from '@reduxjs/toolkit'
import { moimCreateMD } from '../async/moim'

const initialState = {
    
}

const moimSlice = createSlice({
    name: 'moim',
    initialState: initialState,
    reducers: {
    },
    extraReducers: {
        [moimCreateMD.fulfilled]: (state, { payload }) => {
            console.log(payload)
        },
        [moimCreateMD.rejected]: (state, { payload }) => {
            console.log(payload)
        },
    },
})

//* reducer export
// export const {}

//* slice export
export default moimSlice
