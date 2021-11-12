import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    actions: [],
}

const actionSlice = createSlice({
    name: 'updateAction',
    initialState: initialState,
    reducers: {
        addAction: (state, action) => {
            // * true가 minuse를 해줘야 하는 상황이다.
            if (
                state.actions
                    .map(({ actionName }) => actionName)
                    .includes(action.payload.value)
            ) {
                const result = state.actions.filter(
                    ({ actionName }) => actionName !== action.payload.value
                )
                state.actions = result
            } else {
                state.actions.push({
                    actionName: action.payload.value,
                    actionCnt: 1,
                    actionType: action.payload.type,
                })
            }
        },
        minusAction: (state, action) => {
            const result = state.actions.filter(
                (act) => act.actionName !== action.payload.value
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
            if (state.actions[ref].actionCnt > 1) {
                state.actions[ref].actionCnt = state.actions[ref].actionCnt - 1
            }
        },
        resetAction: (state, action) => {
            state.actions = []
        },
    },
})

//* reducer export
export const { addAction, minusAction, addCount, minusCount, resetAction } =
    actionSlice.actions

//* slice export
export default actionSlice
