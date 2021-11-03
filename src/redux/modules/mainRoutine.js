import { createSlice } from '@reduxjs/toolkit'
import { getMainRoutineMD, setMainRoutineMD } from '../async/routine'

const initialState = {
    mainRoutine: [],
}

const mainRoutineSlice = createSlice({
    name: 'setAction',
    initialState: initialState,
    reducers: {
        setAction: (state, action) => {
            state.mainRoutine = action.payload
        },
    },

    extraReducers: {
        [getMainRoutineMD.fulfilled]: (state, action) => {
            state.mainRoutine = action.payload.data.mainRoutine
        },
        [setMainRoutineMD.fulfilled]: (state, action) => {
            console.log('셋메인루틴풀필드', action)
        },
    },
})

//* reducer export
export const { setAction } = mainRoutineSlice.actions

//* slice export
export default mainRoutineSlice
