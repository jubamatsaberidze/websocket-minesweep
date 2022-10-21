import { fork, apply, call, put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { ws } from '../../../utils/constants';

function createSocketChannel() {
    return eventChannel((emit: any) => {
        ws.onmessage = (event) => {
            const data = event.data;
            return emit(data);
          };
          return () => ws.close();
    });
};

function* getGameBoard(ws: WebSocket) {
    yield apply(ws, ws.send, ['map']);
};

export function* watcherGame(): any {
    const channel = yield call(createSocketChannel);
    while(1) {
        try {
            const data = yield take(channel);
            console.log(data) // here I test what comes from server when I click header buttons
            if (data.includes('new:'))  {
                yield fork(getGameBoard, ws);
            }
        } catch (err) {
            console.error('error: ', err);
            channel.close();
        }
    }
};

export function* handleStartGame(action: any) {
    yield apply(ws, ws.send, [
        `new ${action.payload}`,
    ]);
}

