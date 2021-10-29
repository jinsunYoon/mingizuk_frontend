import { createSlice } from '@reduxjs/toolkit'
import {
    myRoutineCreateMD,
    myRoutinePresetMD,
    myRoutineListMD,
    myRoutineDeleteMD,
    myRoutineUpdateMD,
} from '../async/routine'

const initialState = {
    myPage: '',
    presetRoutine: [],
    myRoutine: [],
    updateRoutineRef: '',
}

const routineSlice = createSlice({
    name: 'routine',
    initialState: initialState,
    reducers: {
        changeMyPageModal: (state, action) => {
            state.myPage = action.payload
        },
        updateRoutine: (state, action) => {
            state.updateRoutineRef = action.payload
        },
    },
    extraReducers: {
        [myRoutinePresetMD.fulfilled]: (state, { payload }) => {
            state.presetRoutine = payload.data.routines
        },
        [myRoutinePresetMD.pending]: (state, { payload }) => {},
        [myRoutinePresetMD.rejected]: (state, { payload }) => {},
        // * ----
        [myRoutineCreateMD.fulfilled]: (state, { payload }) => {
            console.log(payload)
        },
        [myRoutineCreateMD.pending]: (state, { payload }) => {},
        [myRoutineCreateMD.rejected]: (state, { payload }) => {},
        // * ----
        [myRoutineListMD.fulfilled]: (state, { payload }) => {
            state.myRoutine = payload.data.routines
        },
        // * ----
        [myRoutineDeleteMD.fulfilled]: (state, { payload }) => {
            console.log(payload)
        },
        // * ----
        [myRoutineUpdateMD.fulfilled]: (state, { payload }) => {
            console.log(payload)
        },
    },
})

//* reducer export
export const { changeMyPageModal, updateRoutine } = routineSlice.actions

//* slice export
export default routineSlice
