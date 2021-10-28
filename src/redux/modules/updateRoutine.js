import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    actions: [],
}

const actionSlice = createSlice({
    name: 'updateAction',
    initialState: initialState,
    reducers: {
        addAction: (state, action) => {
            state.actions.push({ actionName: action.payload, actionCnt: 0 })
        },
        minusAction: (state, action) => {
            const result = state.actions.filter(
                (act) => act.actionName !== action.payload
            )
            state.actions = result
        },
        addCount: (state, action) => {
            const ref = state.actions.findIndex(
                (act) => act.actionName === action.payload
            )
            state.actions[ref].actionCnt = state.actions[ref].actionCnt + 1
        },
        minusCount: (state, action) => {
            const ref = state.actions.findIndex(
                (act) => act.actionName === action.payload
            )
            state.actions[ref].actionCnt = state.actions[ref].actionCnt - 1
        },
    },
})

//* reducer export
export const { addAction, minusAction, addCount, minusCount } =
    actionSlice.actions

//* slice export
export default actionSlice
