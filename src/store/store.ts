import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import { boardReducer } from './reducers/gameReducers';
import { playReducer } from "./reducers/playReducer";
import { startReducer } from "./reducers/startReducer";
import { watcherSaga } from "./saga/sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        board: boardReducer,
        option: startReducer,
        play: playReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return [...getDefaultMiddleware({
            thunk: false,
        }), sagaMiddleware]
    }
});

sagaMiddleware.run(watcherSaga);

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
