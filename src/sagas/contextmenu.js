import { takeEvery, put, select, fork } from 'redux-saga/effects';

import {
    SU_CONTEXTMENU_OPEN,
    SU_CONTEXTMENU_CLOSE,
    SU_CONTEXTMENU_NEWTEXTBOXONGROUP,
    SU_CONTEXTMENU_NEWTEXTBOX,
} from '../actions_su/contextmenu.js';

import {
    Saga_ContextMenu_Open,
    Saga_ContextMenu_Close,
    Saga_ContextMenu_NewTextBox,
} from '../actions_saga/contextmenu.js';

import {
    nagashiExec,
    nagashiExecGroup,
    nagashiExecBox,
    nagashiExecSozai,
    nagashiExecAll,
} from './nagashi.js';

import { Box } from '../libs/box.js';


export default function* contextmenu() {
    yield takeEvery(SU_CONTEXTMENU_OPEN, function* (action) {
        yield put(Saga_ContextMenu_Open(action.payload));
    });
    yield takeEvery(SU_CONTEXTMENU_CLOSE, function* (action) {
        yield put(Saga_ContextMenu_Close(action.payload));
    });

    yield takeEvery(SU_CONTEXTMENU_NEWTEXTBOXONGROUP, function* (action) {
        const boxs = yield select((state) => state.boxs);

        const new_box_id = Box.getNewBoxId(boxs);
        const group_id = action.payload.group_id;

        const group_no_ary = Box.getGroupNoAry(boxs, group_id);

        // 選択していたボックスの情報を得る
        const select_box = Box.getBox(boxs, action.payload.box_id);

        const payload = {
            box_id:   new_box_id,
            group_id: group_id,
            group_no: group_no_ary.pop() + 1,
            type:     'text',

            text: {
                kumihoko:   select_box.text.kumihoko,
                padding_js: select_box.text.padding_js,
                padding_je: select_box.text.padding_je,
                padding_gs: select_box.text.padding_gs,
                padding_ge: select_box.text.padding_ge,
                size_j:     select_box.text.size_j,
                size_g:     select_box.text.size_g,
                gyokan:     select_box.text.gyokan,
                font:       select_box.text.font,
            },
        };

        yield put(Saga_ContextMenu_NewTextBox(payload));

        // 流しを更新
        yield fork(nagashiExecGroup, group_id);
    });

    yield takeEvery(SU_CONTEXTMENU_NEWTEXTBOX, function* (action) {
        const boxs = yield select((state) => state.boxs);

        const new_box_id = Box.getNewBoxId(boxs);
        const new_group_id  = Box.getNewGroupId(boxs);

        const payload = {
            box_id:   new_box_id,
            group_id: new_group_id,
            group_no: 1,
            type:     'text',

            text: {
                kumihoko:   'tate',
                padding_js: 10,
                padding_je: 10,
                padding_gs: 10,
                padding_ge: 10,
                size_j:     10,
                size_g:     10,
                gyokan:     5,
                font:       1,
            },
        };

        yield put(Saga_ContextMenu_NewTextBox(payload));
    });
}
