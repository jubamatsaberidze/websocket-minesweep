/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice } from "@reduxjs/toolkit";
import { MapPayload } from '../saga/actions/gameActions';

interface BoardState {
    map: string[],
    status: number,
}

const initialState: BoardState = {
    map: [],
    status: -1,
}

const BoardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        initializeGame() {},
        restartGame(state: BoardState) {
            state.status = -1;
        },
        setStatus(state: BoardState, action) {
            const status = action.payload as string;
            state.status = status === 'OK' ? -1 : status === 'You lose' ? 0 : 1;
        },
        setMap(state :BoardState, action) {
            state.map = MapPayload(action.payload);
        },
    },
});

export const { initializeGame, restartGame, setStatus, setMap } = BoardSlice.actions;
export const  boardReducer = BoardSlice.reducer;