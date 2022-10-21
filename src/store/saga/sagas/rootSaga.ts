import { handleStartGame, watcherGame } from "../actions/gameActions";
import { all, takeLatest } from "redux-saga/effects";
import { startGame } from "../../reducers/startReducer";
import { initializeGame } from "../../reducers/gameReducers";

export function* watcherSaga() {
    yield all([
        takeLatest(initializeGame.type, watcherGame),
        takeLatest(startGame.type, handleStartGame),
    ])
}