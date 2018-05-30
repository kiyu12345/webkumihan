import { takeEvery, put, select, fork } from 'redux-saga/effects';

import {
    SU_SELECTBOX_BOX_NONSELECT,
    SU_SELECTBOX_BOX_SELECT,
    SU_SELECTBOX_EDITBOX_MOVEEND,
    SU_SELECTBOX_EDITBOX_CHANGESIZE,
} from '../actions_su/selectbox.js';

import {
    Saga_SelectBox_Box_NonSelect,
    Saga_SelectBox_Box_Select,
    Saga_SelectBox_EditBox_MoveEnd,
    Saga_SelectBox_EditBox_ChangeSize,
} from '../actions_saga/selectbox.js';

import {
    Saga_ToolBoxSozai_Sozai_Select,
} from '../actions_saga/toolboxsozai.js';

import {
    nagashiExec,
    nagashiExecGroup,
    nagashiExecBox,
    nagashiExecSozai,
    nagashiExecAll,
} from './nagashi.js';

import { Link } from '../libs/link.js';


export default function* selectbox() {
    // ボックス（テキストボックス）の初期処理
    const boxs = yield select((state) => state.boxs);
    for (let i = 0; i < boxs.length; i++) {
        if (boxs[i].type == 'text') {
            const payload = {
                id: boxs[i].id,
                x1: boxs[i].x1,
                y1: boxs[i].y1,
                x2: boxs[i].x2,
                y2: boxs[i].y2,
            }
            yield put(Saga_SelectBox_EditBox_ChangeSize(payload));
        }
    }


    yield takeEvery(SU_SELECTBOX_BOX_NONSELECT, function* (action) {
        yield put(Saga_SelectBox_Box_NonSelect(action.payload));
    });

    yield takeEvery(SU_SELECTBOX_BOX_SELECT, function* (action) {
        yield put(Saga_SelectBox_Box_Select(action.payload));

        // 選択したボックスのグループ名がリンクリストにあれば、その素材を選択させる
        const links = yield select((state) => state.links);
        const boxs  = yield select((state) => state.boxs);
        const sozai_id = Link.getSozaiIdFromBoxId(links, boxs, action.payload.id);
        if (sozai_id != '') {
            yield put(Saga_ToolBoxSozai_Sozai_Select({id: sozai_id}));
        }
    });

    yield takeEvery(SU_SELECTBOX_EDITBOX_MOVEEND, function* (action) {
        yield put(Saga_SelectBox_EditBox_MoveEnd(action.payload));
    });

    yield takeEvery(SU_SELECTBOX_EDITBOX_CHANGESIZE, function* (action) {
        yield put(Saga_SelectBox_EditBox_ChangeSize(action.payload));

        // 流し直す
        yield fork(nagashiExecBox, action.payload.id);
    });
}
