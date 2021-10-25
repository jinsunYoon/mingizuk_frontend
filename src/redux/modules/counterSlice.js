import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};

// redux toolkit은 immer 라이브러리를 사용하기 때문에, mutable 하게 로직을 작성 할 수 있다.
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

// 각 리듀서 함수 마다 액션이 생성된다.
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice;
