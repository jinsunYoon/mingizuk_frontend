import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    actions: [],
}

const actionSlice = createSlice({
    name: 'updateAction',
    initialState: initialState,
    reducers: {
        addAction: (state, action) => {
            console.log('<<,add', action)
            let testArray = []
            // * 중복처리
            state.actions.push({
                actionName: action.payload.value,
                actionCnt: 1,
                actionType: action.payload.type,
            })

            state.actions.map((act, idx) => {
                testArray.push(act.actionName)
            })
            const matchFilter = testArray.filter(
                (test) => test === action.payload.value
            )
            if (matchFilter.length > 1) {
                const ref = state.actions.findIndex(
                    (act) => act.actionName === action.payload.value
                )
                const refItem = state.actions[ref]
                const result = state.actions.filter((act) => act !== refItem)
                state.actions = result
            }
        },
        minusAction: (state, action) => {
            console.log('<<,minuse', action)
            const result = state.actions.filter(
                (act) => act.actionName !== action.payload.value
            )
            console.log(result)
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
