import { fork, apply, call, put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { ws } from '../../../utils/constants';
import { setMap, setStatus } from '../../reducers/gameReducers';

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
            console.log(data)
            if (data.includes('map:')) yield put(setMap(data));
            if (data.includes('new:'))  {
                yield fork(getGameBoard, ws);
            }
            if (data.includes('open:')) {
                yield put(setStatus(data.split('open: ')[1]));
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

//this function takes payload(data) reveived from websocket server
//and returns squares row as app requirment
export const MapPayload = (payload: any): string[] => {
    const rows = payload.split('map:')[1].split('\n');
    return rows.filter((item: string[]) => Boolean(item.length));
}