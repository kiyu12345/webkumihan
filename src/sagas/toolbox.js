import { takeEvery, put, select } from 'redux-saga/effects';

import {
    SU_TOOLBOX_MOVEEND,
} from '../actions_su/toolbox.js';

import {
    Saga_ToolBox_MoveEnd,
} from '../actions_saga/toolbox.js';

import { Zahyo } from '../libs/zahyo.js';


export default function* toolbox() {
    // ツールボックスを初期位置にセットする
     const toolboxs = yield select((state) => state.toolboxs);
    let payload = {};

    for (let i = 0; i < toolboxs.length; i++) {
        switch (toolboxs[i].type) {
        case 'scale':   // 拡大縮小ツールボックス
            payload = {
                id: toolboxs[i].id,
                x: Zahyo.windowArea().w - toolboxs[i].w - 20,
                y: 5,
            };

            yield put(Saga_ToolBox_MoveEnd(payload));

            break;
        }
    }

    // takeEvery
    yield takeEvery(SU_TOOLBOX_MOVEEND, function* (action) {
        yield put(Saga_ToolBox_MoveEnd(action.payload));
    });
}
