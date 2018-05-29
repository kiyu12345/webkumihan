import { takeEvery, put, select, fork } from 'redux-saga/effects';

import {
    SU_TOOLBOX_MOVEEND,
} from '../actions_su/toolbox.js';
import {
    Saga_ToolBox_MoveEnd,
} from '../actions_saga/toolbox.js';

import {
    SU_TOOLBOXBOXDATA_UPDATEBUTTON_CLICK,
    SU_TOOLBOXBOXDATA_DELETEBUTTON_CLICK,
    SU_TOOLBOXBOXDATA_CREATEBUTTON_CLICK,
} from '../actions_su/toolboxboxdata.js';
import {
    Saga_ToolBoxBoxData_BoxData_Update,
    Saga_ToolBoxBoxData_BoxData_Delete,
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
    SU_TOOLBOXSOZAI_CREATEBUTTON_CLICK,
} from '../actions_su/toolboxsozai.js';
import {
    Saga_ToolBoxSozai_Sozai_Update,
    Saga_ToolBoxSozai_Sozai_Delete,
    Saga_ToolBoxSozai_Sozai_Create,
    Saga_Sozai_Delete,
} from '../actions_saga/toolboxsozai.js';

import {
    SU_TOOLBOXLINK_CREATEBUTTON_CLICK,
    SU_TOOLBOXLINK_DELETEBUTTON_CLICK,
} from '../actions_su/toolboxlink.js';
import {
    Saga_ToolBoxLink_Link_Create,
    Saga_ToolBoxLink_Link_Delete,
} from '../actions_saga/toolboxlink.js';

import {
    Saga_NagashiResult_Create,
} from '../actions_saga/nagashi.js';

import { nagashiExec, nagashiExecSozai } from './nagashi.js';

import { Zahyo } from '../libs/zahyo.js';
import { Text } from '../libs/text.js';
import { Box } from '../libs/box.js';
import { Sozai } from '../libs/sozai.js';


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

        case 'sozai':   // 素材リストツールボックス
            payload = {
                id: toolboxs[i].id,
                x: Zahyo.windowArea().w - toolboxs[i].w - 20 - 200 - 5,
                y: 5,
            };

            yield put(Saga_ToolBox_MoveEnd(payload));

            break;

        case 'link':    // リンクリストツールボックス
            payload = {
                id: toolboxs[i].id,
                x: Zahyo.windowArea().w - toolboxs[i].w - 20 - 200 - 5 - 200 - 5,
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

    yield takeEvery(SU_TOOLBOXBOXDATA_UPDATEBUTTON_CLICK, function* (action) {
        yield put(Saga_ToolBoxBoxData_BoxData_Update(action.payload));
    });
    yield takeEvery(SU_TOOLBOXBOXDATA_DELETEBUTTON_CLICK, function* (action) {
        yield put(Saga_ToolBoxBoxData_BoxData_Delete(action.payload));
    });
    yield takeEvery(SU_TOOLBOXBOXDATA_CREATEBUTTON_CLICK, function* (action) {
        yield put(Saga_ToolBoxBoxData_BoxData_Create(action.payload));
    });

    yield takeEvery(SU_TOOLBOXTEXTDATA_UPDATEBUTTON_CLICK, function* (action) {
        yield put(Saga_ToolBoxTextData_TextData_Update(action.payload));
    });

    yield takeEvery(SU_TOOLBOXSOZAI_UPDATEBUTTON_CLICK, function* (action) {
        yield put(Saga_ToolBoxSozai_Sozai_Update(action.payload));

        // 流し処理を行う
        yield fork(nagashiExecSozai, action.payload.sozai.id);
    });
    yield takeEvery(SU_TOOLBOXSOZAI_DELETEBUTTON_CLICK, function* (action) {
        // 削除しようとしている素材がリンクリストにある場合、
        // そのリンクされているボックスのグループを得てディスパッチする
        const boxs  = yield select((state) => state.boxs);
        const links = yield select((state) => state.links);
        const group = Box.getLinkGroup(boxs, links, action.payload.id);
        if (group != '') {
            const payload = {
                group: group,
            }
            yield put(Saga_Sozai_Delete(payload));
        }

        yield put(Saga_ToolBoxSozai_Sozai_Delete(action.payload));
    });
    yield takeEvery(SU_TOOLBOXSOZAI_CREATEBUTTON_CLICK, function* (action) {
        yield put(Saga_ToolBoxSozai_Sozai_Create(action.payload));
    });

    yield takeEvery(SU_TOOLBOXLINK_CREATEBUTTON_CLICK, function* (action) {
        yield put(Saga_ToolBoxLink_Link_Create(action.payload));

        // 流し処理を行う
        yield fork(nagashiExec, action.payload.box_id, action.payload.sozai_id);
    });
    yield takeEvery(SU_TOOLBOXLINK_DELETEBUTTON_CLICK, function* (action) {
        yield put(Saga_ToolBoxLink_Link_Delete(action.payload));
    });
}
