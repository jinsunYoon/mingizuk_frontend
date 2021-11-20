import { createSlice } from '@reduxjs/toolkit'
import { getMainRoutineMD, setMainRoutineMD } from '../async/routine'

const initialState = {
    mainRoutine: [],
    isMain: '',
    routineId: '',
}

const mainRoutineSlice = createSlice({
    name: 'setAction',
    initialState: initialState,
    reducers: {
        setAction: (state, action) => {
            state.mainRoutine = action.payload
        },
        setRoutineId: (state, action) => {
            state.routineId = action.payload
        },
    },

    extraReducers: {
        [getMainRoutineMD.fulfilled]: (state, action) => {
            // state.mainRoutine = action.payload.data.mainRoutine
            if (action) {
                state.mainRoutine = action?.payload?.data?.mainRoutine[0]
                state.isMain = action?.payload?.data?.mainRoutine[0]?.isMain
                console.log(
                    '겟메인루틴풀필드',
                    action?.payload?.data?.mainRoutine[0]?.Actions
                )
            }
        },
        [setMainRoutineMD.fulfilled]: (state, action) => {
            console.log('셋메인루틴풀필드', action)
        },
    },
})

//* reducer export
export const { setAction, setRoutineId } = mainRoutineSlice.actions

//* slice export
export default mainRoutineSlice
