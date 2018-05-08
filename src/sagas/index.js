import { call, take, put } from 'redux-saga/effects';

import Xxxxxx from '../procs/Xxxxx.js';

import {
    SU_DOKO_NANI_DOUSHITA,
} from '../su_actions/xxxxxx.js';

import {
    Saga_Nani_Doushita,
    Saga_Dataread_Start,
    Saga_Dataread_Success,
    Saga_Dataread_Error,
} from '../saga_actions/xxxxxx.js';

export default function* Xxxxx() {
    while (1) {
        // アクションが来るまで待つ
        yield take(SU_DOKO_NANI_DOUSHITA);

        // データ取得処理開始
        yield put(Saga_Dataread_Start());

        try {
            // データ取得処理
            const data = yield call(Xxxxxx, 5000);

            // 成功時 (resolve)
            yield put(Saga_Dataread_Success(data));
        } catch(error) {
            // 失敗時 (reject)
            yield put(Saga_Dataread_Error(error));
        }
    }
}
