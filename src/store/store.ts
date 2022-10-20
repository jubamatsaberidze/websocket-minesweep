import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        //
    },
    middleware: (getDefaultMiddleware) => {
        return [...getDefaultMiddleware({
            thunk: false,
        }), sagaMiddleware]
    },
    devTools: {
        trace: process.env.REACT_APP_NODE_ENV !== 'development',
    },
});

// sagaMiddleware.run()

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
