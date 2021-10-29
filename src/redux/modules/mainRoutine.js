import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mainRoutine:[]
}

const mainRoutineSlice = createSlice({
    name: 'setAction',
    initialState: initialState,
    reducers: {
        setAction: (state, action) => {
            state.mainRoutine = action.payload

        },
    }    
})


//* reducer export
export const { setAction } =
    mainRoutineSlice.actions

//* slice export
export default mainRoutineSlice
