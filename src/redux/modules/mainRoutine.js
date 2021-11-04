import { createSlice } from '@reduxjs/toolkit'
import { getMainRoutineMD, setMainRoutineMD } from '../async/routine'

const initialState = {
    mainRoutine: [],
    isMain: '',
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
            // state.mainRoutine = action.payload.data.mainRoutine
            if (action) {
                state.mainRoutine = action?.payload?.data?.users[0]?.Routines[0]
                state.isMain =
                    action?.payload?.data?.users[0]?.Routines[0]?.isMain
            }
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
