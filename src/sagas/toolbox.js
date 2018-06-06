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
    SU_TOOLBOXSOZAI_SOZAI_TOGGLE,
} from '../actions_su/toolboxsozai.js';
import {
    Saga_ToolBoxSozai_Sozai_Update,
    Saga_ToolBoxSozai_Sozai_Delete,
    Saga_ToolBoxSozai_Sozai_Create,
    Saga_ToolBoxSozai_Sozai_Toggle,
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
    SU_TOOLBOXPRESEN_LAYOUTCALLBUTTON_CLICK,
    SU_TOOLBOXPRESEN_SOZAICALLBUTTON_CLICK,
    SU_TOOLBOXPRESEN_LINKCALLBUTTON_CLICK,

    SU_TOOLBOXPRESEN_EDITONOFFBUTTON_CLICK,
} from '../actions_su/toolboxpresen.js';
import {
    Saga_Layout_Call,
    Saga_Sozai_Call,
    Saga_Link_Call,
    
    Saga_EditOnOff_Change,
} from '../actions_saga/toolboxpresen.js';

import {
    Saga_NagashiResult_Create,
    Saga_Nagashi_Remove,
} from '../actions_saga/nagashi.js';

import {
    nagashiExec,
    nagashiExecGroup,
    nagashiExecBox,
    nagashiExecSozai,
    nagashiExecAll,
} from './nagashi.js';

import { Zahyo } from '../libs/zahyo.js';
import { Text } from '../libs/text.js';
import { Box } from '../libs/box.js';
import { Sozai } from '../libs/sozai.js';

import { PresenLink } from '../define.js';

export default function* toolbox() {
    // 素材の初期処理
    const sozai = yield select((state) => state.sozai);
    for (let i = 0; i < sozai.length; i++) {
        const payload = {
            sozai: {
                id: sozai[i].id,
                type: sozai[i].type,
                text: sozai[i].text,
                image: sozai[i].image,
            },
        };
        yield put(Saga_ToolBoxSozai_Sozai_Update(payload));
    }

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
                y: 195,
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

        case 'presen':  // プレゼン用ツールボックス
            payload = {
                id: toolboxs[i].id,
                x: Zahyo.windowArea().w - toolboxs[i].w - 20,
                y: 400,
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

        // すべてを流し直す
        yield fork(nagashiExecAll);
    });
    yield takeEvery(SU_TOOLBOXBOXDATA_DELETEBUTTON_CLICK, function* (action) {
        // 削除しようとしているボックスのグループ名を得る
        let boxs = yield select((state) => state.boxs);
        const [group, no] = Box.getGroupAndNo(boxs, action.payload.id);

        // ボックスを削除
        yield put(Saga_ToolBoxBoxData_BoxData_Delete(action.payload));

        // ボックスリスト内に削除したボックスのグループ名が存在しなければ、
        // リンクリストも削除する
        boxs = yield select((state) => state.boxs);
        const groups = Box.getGroupAry(boxs);
        if (groups.indexOf(group) < 0) {
            const payload = {
                group: group,
            };
            yield put(Saga_ToolBoxLink_Link_Delete(payload));
        } else {
            // 存在したら、流し直す
            yield fork(nagashiExecGroup, group);
        }
    });
    yield takeEvery(SU_TOOLBOXBOXDATA_CREATEBUTTON_CLICK, function* (action) {
        yield put(Saga_ToolBoxBoxData_BoxData_Create(action.payload));

        // 流す
        yield fork(nagashiExecBox, action.payload.box.id);
    });

    yield takeEvery(SU_TOOLBOXTEXTDATA_UPDATEBUTTON_CLICK, function* (action) {
        yield put(Saga_ToolBoxTextData_TextData_Update(action.payload));

        // 流しを更新
        yield fork(nagashiExecBox, action.payload.box.id);
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
            yield put(Saga_Nagashi_Remove(payload));
        }

        yield put(Saga_ToolBoxSozai_Sozai_Delete(action.payload));
    });
    yield takeEvery(SU_TOOLBOXSOZAI_CREATEBUTTON_CLICK, function* (action) {
        yield put(Saga_ToolBoxSozai_Sozai_Create(action.payload));
    });
    yield takeEvery(SU_TOOLBOXSOZAI_SOZAI_TOGGLE, function* (action) {
        yield put(Saga_ToolBoxSozai_Sozai_Toggle(action.payload));
    });

    yield takeEvery(SU_TOOLBOXLINK_CREATEBUTTON_CLICK, function* (action) {
        yield put(Saga_ToolBoxLink_Link_Create(action.payload));

        // 流し処理を行う
        yield fork(nagashiExec, action.payload.group, action.payload.sozai_id);
    });
    yield takeEvery(SU_TOOLBOXLINK_DELETEBUTTON_CLICK, function* (action) {
        // リンクを削除しようとしているグループを得てディスパッチする
        yield put(Saga_Nagashi_Remove(action.payload));

        yield put(Saga_ToolBoxLink_Link_Delete(action.payload));
    });

    yield takeEvery(SU_TOOLBOXPRESEN_LAYOUTCALLBUTTON_CLICK, function* (action) {
        yield put(Saga_Layout_Call(action.payload));
    });
    yield takeEvery(SU_TOOLBOXPRESEN_SOZAICALLBUTTON_CLICK, function* (action) {
        yield put(Saga_Sozai_Call(action.payload));
    });
    yield takeEvery(SU_TOOLBOXPRESEN_LINKCALLBUTTON_CLICK, function* (action) {
        // プレゼン用リンクリストを得る
        const plinklist = PresenLink[action.payload.pattern];

        for (let i = 0; i < plinklist.length; i++) {
            // グループ名と素材が両方ともに存在して、種類も合っていれば、流してリストとして加える

        }
        yield put(Saga_Link_Call());
    });
    yield takeEvery(SU_TOOLBOXPRESEN_EDITONOFFBUTTON_CLICK, function* (action) {
        yield put(Saga_EditOnOff_Change(action.payload));
    });
}
