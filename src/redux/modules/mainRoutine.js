import { createSlice } from '@reduxjs/toolkit'
import { getMainRoutineMD, setMainRoutineMD } from '../async/routine'
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
            Toast.fire({
                icon: 'success',
                title: '메인 루틴으로 설정되었어요.',
            })
        },
    },
})

//* reducer export
export const { setAction, setRoutineId } = mainRoutineSlice.actions

//* slice export
export default mainRoutineSlice
