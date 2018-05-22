import { takeEvery, put, select } from 'redux-saga/effects';

import {
    SU_TOOLBOX_MOVEEND,
} from '../actions_su/toolbox.js';
import {
    Saga_ToolBox_MoveEnd,
} from '../actions_saga/toolbox.js';

import {
    SU_TOOLBOXBOXDATA_UPDATEBUTTON_CLICK,
    SU_TOOLBOXBOXDATA_CREATEBUTTON_CLICK,
} from '../actions_su/toolboxboxdata.js';
import {
    Saga_ToolBoxBoxData_BoxData_Change,
    Saga_ToolBoxBoxData_BoxData_Create,
} from '../actions_saga/toolboxboxdata.js';

import {
    SU_TOOLBOXTEXTDATA_UPDATEBUTTON_CLICK,
} from '../actions_su/toolboxtextdata.js';
import {
    Saga_ToolBoxTextData_TextData_Update,
} from '../actions_saga/toolboxtextdata.js';

import {
    SU_TOOLBOXSOZAI_UPDATEBUTTON_CLICK,
    SU_TOOLBOXSOZAI_DELETEBUTTON_CLICK,
} from '../actions_su/toolboxsozai.js';
import {
    Saga_ToolBoxSozai_Sozai_Update,
    Saga_ToolBoxSozai_Sozai_Delete,
} from '../actions_saga/toolboxsozai.js';


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
        
        case 'boxdata':   // ボックス情報ツールボックス
            payload = {
                id: toolboxs[i].id,
                x: Zahyo.windowArea().w - toolboxs[i].w - 20,
                y: 50,
            };

            yield put(Saga_ToolBox_MoveEnd(payload));

            break;

        case 'textdata':   // テキスト情報ツールボックス
            payload = {
                id: toolboxs[i].id,
                x: Zahyo.windowArea().w - toolboxs[i].w - 20,
                y: 175,
            };

            yield put(Saga_ToolBox_MoveEnd(payload));

            break;
        }
    }

    
    // takeEvery
    yield takeEvery(SU_TOOLBOX_MOVEEND, function* (action) {
        yield put(Saga_ToolBox_MoveEnd(action.payload));
    });

    yield takeEvery(SU_TOOLBOXBOXDATA_UPDATEBUTTON_CLICK, function* (action) {
        yield put(Saga_ToolBoxBoxData_BoxData_Change(action.payload));
    });
    yield takeEvery(SU_TOOLBOXBOXDATA_CREATEBUTTON_CLICK, function* (action) {
        yield put(Saga_ToolBoxBoxData_BoxData_Create(action.payload));
    });

    yield takeEvery(SU_TOOLBOXTEXTDATA_UPDATEBUTTON_CLICK, function* (action) {
        yield put(Saga_ToolBoxTextData_TextData_Update(action.payload));
    });

    yield takeEvery(SU_TOOLBOXSOZAI_UPDATEBUTTON_CLICK, function* (action) {
        yield put(Saga_ToolBoxSozai_Sozai_Update(action.payload));
    });
    yield takeEvery(SU_TOOLBOXSOZAI_DELETEBUTTON_CLICK, function* (action) {
        yield put(Saga_ToolBoxSozai_Sozai_Delete(action.payload));
    });
}
