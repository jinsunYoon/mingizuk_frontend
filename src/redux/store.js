// * import basic libary
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// * import slices
import counterSlice from './store';

export const history = createBrowserHistory();

// * reducers
const reducer = combineReducers({
    router: connectRouter(history),
    // counter: counterSlice.reducer,
});

const middlewares = [];
const env = process.env.NODE_ENV;

if (env === 'development') {
    const { logger } = require('redux-logger');
    middlewares.push(logger);
}

const store = configureStore({
    reducer,
    middleware: [...middlewares, ...getDefaultMiddleware()],
    devTools: env !== 'production',
});

export default store;
