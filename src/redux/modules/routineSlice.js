import { createSlice } from '@reduxjs/toolkit'
import {
    myRoutineCreateMD,
    myRoutinePresetMD,
    myRoutineListMD,
    myRoutineDeleteMD,
    myRoutineUpdateMD,
    finRoutinesActionsMD,
} from '../async/routine'
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
})

const initialState = {
    myPage: '',
    BtnStatus: false,
    presetRoutine: [],
    myRoutine: [],
    updateRoutineRef: '',
    habitModal: false,
    info: {},
    optionStatus: false,
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
        setRoutineModal: (state, action) => {
            state.BtnStatus = action.payload
        },
        updateRoutine: (state, action) => {
            state.updateRoutineRef = action.payload
        },
        chageMyHabitModal: (state, action) => {
            state.habitModal = action.payload
        },
        setRoutineInfo: (state, { payload }) => {
            const result = {
                id: payload.id,
                routineName: payload.routineName,
                Actions: payload.Actions,
            }
            state.info = result
        },
        setOptionModal: (state, action) => {
            state.optionStatus = action.payload
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
            // Toast.fire({
            //     icon: 'success',
            //     title: '루틴이 추가되었어요.',
            // })
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
        [myRoutineDeleteMD.rejected]: (state, { payload }) => {},
        // * ----
        [myRoutineUpdateMD.fulfilled]: (state, { payload }) => {
            Toast.fire({
                icon: 'success',
                title: '루틴을 수정하였어요.',
            })
        },
        [finRoutinesActionsMD.fulfilled]: (state, { payload }) => {
            const data = payload?.data
            const finActions = data?.finActions
            const finRoutines = data?.finRoutines
            let actionsWithDate = []
            let routienWithDate = []

            // * kind of dates (action & routine)
            const dates = []
            finActions?.forEach(({ ActionFins }) => {
                const actionDates = ActionFins.map(({ date }) =>
                    date.slice(0, 10)
                )
                dates.push(actionDates)
            })
            let setDates = new Set(dates.flat())
            setDates = [...setDates]

            // * setting routine / action
            for (const date of setDates) {
                actionsWithDate.push({ date, actions: [] })
                routienWithDate.push({ date, routines: [] })
            }

            // ! actions
            // * { date:'2021-11-11' , actions:[action1, action2...]
            finActions?.forEach(({ actionName, ActionFins }) => {
                const actionDates = ActionFins.map(({ date }) =>
                    setDates.findIndex((day) => day === date.slice(0, 10))
                )
                actionDates.map((idx) =>
                    actionsWithDate[idx].actions.push(actionName)
                )
            })

            // ! routines
            finRoutines?.forEach(({ routineName, RoutineFins }) => {
                const routineDates = RoutineFins.map(({ date }) =>
                    setDates.findIndex((day) => day === date.slice(0, 10))
                )
                routineDates.map((idx) =>
                    routienWithDate[idx]?.routines?.push(routineName)
                )
            })

            state.fin.joinDate = data?.finUser?.createdAt
            state.fin.finActions = actionsWithDate
            state.fin.finRoutines = routienWithDate
        },
    },
})

//* reducer export
export const {
    changeMyPageModal,
    updateRoutine,
    chageMyHabitModal,
    setRoutineModal,
    setRoutineInfo,
    setOptionModal,
} = routineSlice.actions

//* slice export
export default routineSlice
