import { takeEvery, put, select, fork } from 'redux-saga/effects';

import {
    SU_DANDD_MOUSEDOWN,
    SU_DANDD_MOUSEUP,
} from '../actions_su/dandd.js';

import {
    Saga_DAndD_MouseDown,
    Saga_DAndD_MouseUp,
} from '../actions_saga/dandd.js';

import {
    Saga_ToolBoxLink_Link_Create,
    Saga_ToolBoxLink_Link_Delete,
} from '../actions_saga/toolboxlink.js';

import {
    Saga_Nagashi_Remove,
} from '../actions_saga/nagashi.js';

import { Zahyo } from '../libs/zahyo.js';
import { Define } from '../define.js';
import { Link } from '../libs/link.js';

import {
    nagashiExec,
    nagashiExecGroup,
    nagashiExecBox,
    nagashiExecSozai,
    nagashiExecAll,
} from './nagashi.js';


export default function* scale() {
    yield takeEvery(SU_DANDD_MOUSEDOWN, function* (action) {
        yield put(Saga_DAndD_MouseDown(action.payload));
    });
    yield takeEvery(SU_DANDD_MOUSEUP, function* (action) {
        // ボックス情報を得る
        const boxs = yield select((state) => state.boxs);

        // ドロップ処理
        // ドロップした座標（SVGイメージの右上起点からのXY座標を得る）
        const dropX = Zahyo.luToruX(action.payload.x, Define.svgimagesize.width);
        const dropY = Zahyo.luToruY(action.payload.y, Define.svgimagesize.height);

        let box = '';
        let check = false;
        for (let i = 0; i < boxs.length; i++) {
            box = boxs[i];

            // ドロップした座標がボックス内でない場合は、無視
            if (Zahyo.isInBox(dropX, dropY, box.x1, box.y1, box.x2, box.y2) == false) {
                continue;
            }

            // ドロップしたものとボックスの種別が同じでない場合は無視
            check = false;
            switch (action.payload.value.type) {
            case 'text':
                switch (box.type) {
                case 'text':
                    check = true;
                    break;
                case 'image':
                    break;
                default:
                    break;
                }
                break;

            case 'image':
                switch (box.type) {
                case 'text':
                    break;
                case 'image':
                    check = true;
                    break;
                default:
                    break;
                }
                break;
            }
            if (check == true) {
                break;
            }
        }

        // 流し処理を行う
        if (check == true && box != '') {
            const links = yield select((state) => state.links);
            const sozai_id = action.payload.value.id;
            const group = box.group;

            // ドロップした素材が既に流されていたら、削除する
            const gp = Link.getGroupFromSozaiId(links, sozai_id);
            if (gp != '') {
                const payload = {
                    group: gp,
                };
                yield put(Saga_Nagashi_Remove(payload));
                yield put(Saga_ToolBoxLink_Link_Delete(payload));
            }

            // 流し処理を行う
            yield fork(nagashiExec, group, sozai_id);

            // リンクリストに追加
            const payload = {
                group: group,
                sozai_id: sozai_id,
            };
            yield put(Saga_ToolBoxLink_Link_Create(payload));
        }

        yield put(Saga_DAndD_MouseUp(action.payload));
    });
}