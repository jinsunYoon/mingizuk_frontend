import { createSlice } from '@reduxjs/toolkit'
import {
    myRoutineCreateMD,
    myRoutinePresetMD,
    myRoutineListMD,
    myRoutineDeleteMD,
    myRoutineUpdateMD,
    finRoutinesActionsMD,
} from '../async/routine'

const initialState = {
    myPage: '',
    presetRoutine: [],
    myRoutine: [],
    updateRoutineRef: '',
    habitModal: false,
    fin: {
        finActions: [],
        finRoutines: [],
        joinDate: '',
    },
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
        chageMyHabitModal: (state, action) => {
            state.habitModal = action.payload
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
            const result = state.myRoutine.filter(
                (routine) => routine.id !== payload
            )
            state.myRoutine = result
        },
        // * ----
        [myRoutineUpdateMD.fulfilled]: (state, { payload }) => {
            console.log(payload)
        },
        [finRoutinesActionsMD.fulfilled]: (state, { payload }) => {
            const data = payload.data
            const finActions = data.finActions
            let actionsWithDate = []

            // ! actions
            // * kind of dates
            const dates = []
            finActions.forEach(({ ActionFins }) => {
                const actionDates = ActionFins.map(({ date }) =>
                    date.slice(0, 10)
                )
                dates.push(actionDates)
            })
            let setDates = new Set(dates.flat())
            setDates = [...setDates]
            for (const date of setDates) {
                actionsWithDate.push({ date, actions: [] })
            }

            // * { date:'2021-11-11' , actions:[action1, action2...]
            finActions.forEach(({ actionName, ActionFins }) => {
                const actionDates = ActionFins.map(({ date }) =>
                    setDates.findIndex((day) => day === date.slice(0, 10))
                )
                actionDates.map((idx) =>
                    actionsWithDate[idx].actions.push(actionName)
                )
            })
            console.log('final', actionsWithDate)

            state.fin.joinDate = data.finUser.createdAt
            state.fin.finActions = actionsWithDate
        },
    },
})

//* reducer export
export const { changeMyPageModal, updateRoutine, chageMyHabitModal } =
    routineSlice.actions

//* slice export
export default routineSlice
