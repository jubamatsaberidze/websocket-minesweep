import { createSelector } from "reselect";
import { RootState } from '../../store/store';

const selectSelf = (state: RootState) => state

export const gameBoard = createSelector(selectSelf, (state) => state.board.map)
export const gameStatus = createSelector(selectSelf, (state) => state.board.status)
export const isFlags = createSelector(selectSelf, (state) => state.play.flags)
export const level = createSelector(selectSelf, (state) => state.option)