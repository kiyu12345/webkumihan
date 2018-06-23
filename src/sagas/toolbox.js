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
    SU_TOOLBOXLINEDATA_UPDATEBUTTON_CLICK,
} from '../actions_su/toolboxlinedata.js';
import {
    Saga_ToolBoxLineData_LineData_Update,
} from '../actions_saga/toolboxlinedata.js';

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
    Saga_ToolBoxSozai_Sozai_NonSelect,
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
    SU_ContextMenu_NewBoxText,
    SU_ContextMenu_NewBoxImage,
    SU_ContextMenu_NewBoxLine,
} from '../actions_su/contextmenu.js';

import {
    SU_SelectBox_Box_NonSelect,
} from '../actions_su/selectbox.js';
import {
    Saga_SelectBox_Box_NonSelect,
} from '../actions_saga/selectbox.js';

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
import { Box } from '../libs/box.js';
import { Sozai } from '../libs/sozai.js';

import { PresenLink } from '../define.js';


export default function* toolbox() {
    // 素材の初期処理
    const sozai = yield select((state) => state.sozai);
    for (let i = 0; i < sozai.length; i++) {
        const payload = {
            sozai: {
                sozai_id: sozai[i].sozai_id,
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
                toolbox_id: toolboxs[i].toolbox_id,
                x: Zahyo.windowArea().w - toolboxs[i].w - 20,
                y: 5,
            };

            yield put(Saga_ToolBox_MoveEnd(payload));

            break;
        
        case 'boxdata':   // ボックス情報ツールボックス
            payload = {
                toolbox_id: toolboxs[i].toolbox_id,
                x: Zahyo.windowArea().w - toolboxs[i].w - 20,
                y: 50,
            };

            yield put(Saga_ToolBox_MoveEnd(payload));

            break;

        case 'textdata':   // テキスト情報ツールボックス
            payload = {
                toolbox_id: toolboxs[i].toolbox_id,
                x: Zahyo.windowArea().w - toolboxs[i].w - 20,
                y: 195,
            };

            yield put(Saga_ToolBox_MoveEnd(payload));

            break;

        case 'linedata':   // ライン情報ツールボックス
            payload = {
                toolbox_id: toolboxs[i].toolbox_id,
                x: Zahyo.windowArea().w - toolboxs[i].w - 20,
                y: 195,
            };

            yield put(Saga_ToolBox_MoveEnd(payload));

            break;

        case 'sozai':   // 素材リストツールボックス
            payload = {
                toolbox_id: toolboxs[i].toolbox_id,
                x: Zahyo.windowArea().w - toolboxs[i].w - 20 - 200 - 5,
                y: 5,
            };

            yield put(Saga_ToolBox_MoveEnd(payload));

            break;

        case 'link':    // リンクリストツールボックス
            payload = {
                toolbox_id: toolboxs[i].toolbox_id,
                x: Zahyo.windowArea().w - toolboxs[i].w - 20 - 200 - 5 - 200 - 5,
                y: 5,
            };

            yield put(Saga_ToolBox_MoveEnd(payload));

            break;

        case 'presen':  // プレゼン用ツールボックス
            payload = {
                toolbox_id: toolboxs[i].toolbox_id,
                x: Zahyo.windowArea().w - toolboxs[i].w - 20,
                y: 400,
            };

            yield put(Saga_ToolBox_MoveEnd(payload));

            break;
        }
    }

    
    // ツールボックスの移動を完了
    yield takeEvery(SU_TOOLBOX_MOVEEND, function* (action) {
        yield put(Saga_ToolBox_MoveEnd(action.payload));
    });

    // ボックス情報ツールボックスの「更新」が押された
    yield takeEvery(SU_TOOLBOXBOXDATA_UPDATEBUTTON_CLICK, function* (action) {
        yield put(Saga_ToolBoxBoxData_BoxData_Update(action.payload));

        // すべてを流し直す
        yield fork(nagashiExecAll);
    });

    // ボックス情報ツールボックスの「ボックス削除」が押された
    yield takeEvery(SU_TOOLBOXBOXDATA_DELETEBUTTON_CLICK, function* (action) {
        // 削除しようとしているボックスのグループIDを得る
        let boxs = yield select((state) => state.boxs);
        const [group_id, group_no] = Box.getGroupAndNo(boxs, action.payload.box_id);

        // ボックスを削除
        yield put(Saga_ToolBoxBoxData_BoxData_Delete(action.payload));

        // ボックスリスト内に削除したボックスのグループIDが存在しなければ、
        // リンクリストも削除する
        boxs = yield select((state) => state.boxs);
        const groups = Box.getGroupAry(boxs);
        if (groups.indexOf(group_id) < 0) {
            const payload = {
                group_id: group_id,
            };
            yield put(Saga_ToolBoxLink_Link_Delete(payload));
        } else {
            // 存在したら、流し直す
            yield fork(nagashiExecGroup, group_id);
        }
    });

    // ボックス情報ツールボックスの「新規作成」が押された
    yield takeEvery(SU_TOOLBOXBOXDATA_CREATEBUTTON_CLICK, function* (action) {
        const payload = {
            cur_x: 300,
            cur_y: 100,
        };

        switch (action.payload.type) {
        case 'text':
            yield put(SU_ContextMenu_NewBoxText(payload));
            break;
        case 'image':
            yield put(SU_ContextMenu_NewBoxImage(payload));
            break;
        case 'line':
            payload.hoko = 'tate';
            yield put(SU_ContextMenu_NewBoxLine(payload));
        }
    });

    // テキスト情報ツールボックスの「更新」が押された
    yield takeEvery(SU_TOOLBOXTEXTDATA_UPDATEBUTTON_CLICK, function* (action) {
        yield put(Saga_ToolBoxTextData_TextData_Update(action.payload));

        // 流しを更新
        yield fork(nagashiExecBox, action.payload.box_id);
    });

    // ライン情報ツールボックスの「更新」が押された
    yield takeEvery(SU_TOOLBOXLINEDATA_UPDATEBUTTON_CLICK, function* (action) {
        yield put(Saga_ToolBoxLineData_LineData_Update(action.payload));

        // 流しを更新
        yield fork(nagashiExecBox, action.payload.box_id);
    });

    // 素材リストツールボックスの「更新」が押された
    yield takeEvery(SU_TOOLBOXSOZAI_UPDATEBUTTON_CLICK, function* (action) {
        yield put(Saga_ToolBoxSozai_Sozai_Update(action.payload));

        // 流し処理を行う
        yield fork(nagashiExecSozai, action.payload.sozai.sozai_id);
    });

    // 素材リストツールボックスの「削除」が押された
    yield takeEvery(SU_TOOLBOXSOZAI_DELETEBUTTON_CLICK, function* (action) {
        // 削除しようとしている素材がリンクリストにある場合、
        // そのリンクされているボックスのグループを得てディスパッチする
        const boxs  = yield select((state) => state.boxs);
        const links = yield select((state) => state.links);
        const group_id = Box.getLinkGroup(boxs, links, action.payload.sozai_id);
        if (group_id != '') {
            const payload = {
                group_id: group_id,
            }
            yield put(Saga_Nagashi_Remove(payload));
        }

        yield put(Saga_ToolBoxSozai_Sozai_Delete(action.payload));
    });

    // 素材リストツールボックスの「新規作成」が押された
    yield takeEvery(SU_TOOLBOXSOZAI_CREATEBUTTON_CLICK, function* (action) {
        yield put(Saga_ToolBoxSozai_Sozai_Create(action.payload));
    });

    // 素材リストツールボックスのリストが押された
    yield takeEvery(SU_TOOLBOXSOZAI_SOZAI_TOGGLE, function* (action) {
        yield put(Saga_ToolBoxSozai_Sozai_Toggle(action.payload));
    });

    // リンクリストツールボックスの「リンク」が押された
    yield takeEvery(SU_TOOLBOXLINK_CREATEBUTTON_CLICK, function* (action) {
        yield put(Saga_ToolBoxLink_Link_Create(action.payload));

        // 流し処理を行う
        yield fork(nagashiExec, action.payload.group_id, action.payload.sozai_id);
    });

    // リンクリストツールボックスの「リンク解除」が押された
    yield takeEvery(SU_TOOLBOXLINK_DELETEBUTTON_CLICK, function* (action) {
        // ボックス情報から、素材情報を削除する
        yield put(Saga_Nagashi_Remove(action.payload));
        // リンクリストから、削除する
        yield put(Saga_ToolBoxLink_Link_Delete(action.payload));
    });

    // プレゼン用ツールボックスの「レイアウト呼び出し」が押された
    yield takeEvery(SU_TOOLBOXPRESEN_LAYOUTCALLBUTTON_CLICK, function* (action) {
        // ボックスの選択を解除しておく
        yield put(SU_SelectBox_Box_NonSelect());
        
        yield put(Saga_Layout_Call(action.payload));
    });

    // プレゼン用ツールボックスの「素材呼び出し」が押された
    yield takeEvery(SU_TOOLBOXPRESEN_SOZAICALLBUTTON_CLICK, function* (action) {
        yield put(Saga_Sozai_Call(action.payload));
    });

    // プレゼン用ツールボックスの「自動全リンク」が押された
    yield takeEvery(SU_TOOLBOXPRESEN_LINKCALLBUTTON_CLICK, function* (action) {
        // プレゼン用リンクリストを得る
        const plinklist = PresenLink[action.payload.pattern];
        // ボックスリストを得る
        const boxs = yield select((state) => state.boxs);
        // 素材リストを得る
        const sozais = yield select((state) => state.sozai);

        let linklist = [];
        for (let i = 0; i < plinklist.length; i++) {
            const group_id = plinklist[i].group_id;
            const sozai_id = plinklist[i].sozai_id;

            // ボックスリストからグループNo配列を得る
            const group_no_ary = Box.getGroupNoAry(boxs, group_id);

            // ボックスリストにグループがなければ、無視
            if (group_no_ary.length <= 0) {
                continue;
            }

            // ボックスを得る
            const box_id = Box.getBoxId(boxs, group_id, group_no_ary[0]);
            const box = Box.getBox(boxs, box_id);

            // 素材リストから素材を得る
            const sozai = Sozai.getSozai(sozais, sozai_id);

            // 素材リストに素材が存在しなければ、無視
            if (sozai == '') {
                continue;
            }

            // ボックスと素材の種類が異なっていれば、無視
            if (box.type != sozai.type) {
                continue;
            }

            // 正しいリンクリストとして作成する
            linklist.push({
                group_id: group_id,
                sozai_id: sozai_id,
            });
        }

        // 作成したリンクリストを整理（重複をカット）する
        const newlinklist = linklist.filter((x, i, self) => {
            if (firstIndex(self, x) === i) {
                return true;
            }
            return false;
        });
        function firstIndex(list, obj) {
            for (let i = 0; i < list.length; i++) {
                if (list[i].group_id == obj.group_id
                 && list[i].sozai_id == obj.sozai_id) {
                     return i;
                 }
            }

            return -1;
        }

        // 流し処理を行う
        for (let i = 0; i < newlinklist.length; i++) {
            yield fork(nagashiExec, newlinklist[i].group_id, newlinklist[i].sozai_id);
        }

        yield put(Saga_Link_Call({links: newlinklist}));
    });

    // プレゼン用ツールボックスの「編集ON/OFF」が押された
    yield takeEvery(SU_TOOLBOXPRESEN_EDITONOFFBUTTON_CLICK, function* (action) {
        // 編集OFFの場合、選択ボックスをOFFにする
        if (action.payload.onoff == 'off') {
            yield put(Saga_SelectBox_Box_NonSelect());
        }

        yield put(Saga_EditOnOff_Change(action.payload));
    });
}
