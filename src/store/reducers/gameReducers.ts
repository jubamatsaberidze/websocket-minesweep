/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice } from "@reduxjs/toolkit";

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
    },
});

export const { initializeGame } = BoardSlice.actions;
export const  boardReducer = BoardSlice.reducer;