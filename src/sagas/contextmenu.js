import { takeEvery, put, select, fork } from 'redux-saga/effects';

import {
    SU_CONTEXTMENU_OPEN,
    SU_CONTEXTMENU_CLOSE,
    SU_CONTEXTMENU_NEWBOXTEXT,
    SU_CONTEXTMENU_NEWBOXIMAGE,
    SU_CONTEXTMENU_COPYBOXTEXTONGROUP,
    SU_CONTEXTMENU_COPYBOXTEXT,
    SU_CONTEXTMENU_COPYBOXIMAGE,
    SU_CONTEXTMENU_SOZAIUNLINK,
    SU_CONTEXTMENU_BOXREMOVE,
} from '../actions_su/contextmenu.js';

import {
    Saga_ContextMenu_Open,
    Saga_ContextMenu_Close,
    Saga_ContextMenu_NewBoxText,
    Saga_ContextMenu_NewBoxImage,
} from '../actions_saga/contextmenu.js';

import {
    nagashiExec,
    nagashiExecGroup,
    nagashiExecBox,
    nagashiExecSozai,
    nagashiExecAll,
} from './nagashi.js';

import {
    SU_ToolBoxLink_DeleteButton_Click,
} from '../actions_su/toolboxlink.js';

import {
    SU_ToolBoxBoxData_DeleteButton_Click,
} from '../actions_su/toolboxboxdata.js';

import { Define } from '../define.js';
import { Box } from '../libs/box.js';
import { Grid } from '../libs/zahyo.js';


export default function* contextmenu() {
    yield takeEvery(SU_CONTEXTMENU_OPEN, function* (action) {
        yield put(Saga_ContextMenu_Open(action.payload));
    });
    yield takeEvery(SU_CONTEXTMENU_CLOSE, function* (action) {
        yield put(Saga_ContextMenu_Close(action.payload));
    });

    // ボックスの新規作成（テキストボックス）
    yield takeEvery(SU_CONTEXTMENU_NEWBOXTEXT, function* (action) {
        const boxs = yield select((state) => state.boxs);

        // 新規ボックスのデフォルトサイズ
        const box_width  = 200;
        const box_height = 100;

        // ボックスの基点座標
        let tx = action.payload.cur_x - box_width;
        let ty = action.payload.cur_y;

        // ボックスの基点座標をスナップさせる
        [tx, ty] = Grid.snap(
            tx,
            ty,
            Define.svgimagesize.width,
            Define.svgimagesize.height,
            Define.grid.width,
            Define.grid.height
        );

        // ボックスの始点と終点を求める
        let x1 = tx;
        let y1 = ty;
        let x2 = x1 + box_width;
        let y2 = y1 + box_height;

        // ボックスを紙面エリアに収める
        [x1, y1, x2, y2] = Grid.changeInArea(
            x1, y1, x2, y2,
            Define.svgimagesize.width,
            Define.svgimagesize.height,
            Define.grid.width,
            Define.grid.height
        );

        const new_box_id    = Box.getNewBoxId(boxs);
        const new_group_id  = Box.getNewGroupId(boxs);

        const payload = {
            box_id:   new_box_id,
            group_id: new_group_id,
            group_no: 1,
            type:     'text',
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,

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

        yield put(Saga_ContextMenu_NewBoxText(payload));
    });

    // ボックスの新規作成（画像ボックス）
    yield takeEvery(SU_CONTEXTMENU_NEWBOXIMAGE, function* (action) {
        const boxs = yield select((state) => state.boxs);

        // 新規ボックスのデフォルトサイズ
        const box_width  = 200;
        const box_height = 100;

        // ボックスの基点座標
        let tx = action.payload.cur_x - box_width;
        let ty = action.payload.cur_y;

        // ボックスの基点座標をスナップさせる
        [tx, ty] = Grid.snap(
            tx,
            ty,
            Define.svgimagesize.width,
            Define.svgimagesize.height,
            Define.grid.width,
            Define.grid.height
        );

        // ボックスの始点と終点を求める
        let x1 = tx;
        let y1 = ty;
        let x2 = x1 + box_width;
        let y2 = y1 + box_height;

        // ボックスを紙面エリアに収める
        [x1, y1, x2, y2] = Grid.changeInArea(
            x1, y1, x2, y2,
            Define.svgimagesize.width,
            Define.svgimagesize.height,
            Define.grid.width,
            Define.grid.height
        );

        const new_box_id    = Box.getNewBoxId(boxs);
        const new_group_id  = Box.getNewGroupId(boxs);

        const payload = {
            box_id:   new_box_id,
            group_id: new_group_id,
            group_no: 1,
            type:     'image',
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,

            image: {
                url: '',
            },
        };

        yield put(Saga_ContextMenu_NewBoxImage(payload));
    });

    // テキストボックスの複製（グループ化する）
    yield takeEvery(SU_CONTEXTMENU_COPYBOXTEXTONGROUP, function* (action) {
        const boxs = yield select((state) => state.boxs);

        // 複製元ボックスのボックス情報を得る
        const f_box = Box.getBox(boxs, action.payload.box_id);

        // 複製元ボックスの幅と高さを得る
        const f_box_width  = f_box.x2 - f_box.x1;
        const f_box_height = f_box.y2 - f_box.y1;

        // 複製ボックスの基点座標
        let tx = f_box.x1 - 50;
        let ty = f_box.y1 + 50;

        // 複製ボックスの基点座標をスナップさせる
        [tx, ty] = Grid.snap(
            tx,
            ty,
            Define.svgimagesize.width,
            Define.svgimagesize.height,
            Define.grid.width,
            Define.grid.height
        );

        // 複製ボックスの始点と終点を求める
        let x1 = tx;
        let y1 = ty;
        let x2 = x1 + f_box_width;
        let y2 = y1 + f_box_height;

        // ボックスを紙面エリアに収める
        [x1, y1, x2, y2] = Grid.changeInArea(
            x1, y1, x2, y2,
            Define.svgimagesize.width,
            Define.svgimagesize.height,
            Define.grid.width,
            Define.grid.height
        );

        const new_box_id = Box.getNewBoxId(boxs);
        const group_id   = action.payload.group_id;

        // グループの最後の番号を得る
        const group_no_ary = Box.getGroupNoAry(boxs, group_id);
        const new_group_no = group_no_ary.pop() + 1;

        const payload = {
            box_id:   new_box_id,
            group_id: action.payload.group_id,
            group_no: new_group_no,
            type:     'text',
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,

            text: {
                kumihoko:   f_box.text.kumihoko,
                padding_js: f_box.text.padding_js,
                padding_je: f_box.text.padding_je,
                padding_gs: f_box.text.padding_gs,
                padding_ge: f_box.text.padding_ge,
                size_j:     f_box.text.size_j,
                size_g:     f_box.text.size_g,
                gyokan:     f_box.text.gyokan,
                font:       f_box.text.font,
            },
        };

        yield put(Saga_ContextMenu_NewBoxText(payload));

        // 流しを更新
        yield fork(nagashiExecGroup, group_id);
    });

    // テキストボックスの複製
    yield takeEvery(SU_CONTEXTMENU_COPYBOXTEXT, function* (action) {
        const boxs = yield select((state) => state.boxs);

        // 複製元ボックスのボックス情報を得る
        const f_box = Box.getBox(boxs, action.payload.box_id);

        // 複製元ボックスの幅と高さを得る
        const f_box_width  = f_box.x2 - f_box.x1;
        const f_box_height = f_box.y2 - f_box.y1;

        // 複製ボックスの基点座標
        let tx = f_box.x1 - 50;
        let ty = f_box.y1 + 50;

        // 複製ボックスの基点座標をスナップさせる
        [tx, ty] = Grid.snap(
            tx,
            ty,
            Define.svgimagesize.width,
            Define.svgimagesize.height,
            Define.grid.width,
            Define.grid.height
        );

        // 複製ボックスの始点と終点を求める
        let x1 = tx;
        let y1 = ty;
        let x2 = x1 + f_box_width;
        let y2 = y1 + f_box_height;

        // ボックスを紙面エリアに収める
        [x1, y1, x2, y2] = Grid.changeInArea(
            x1, y1, x2, y2,
            Define.svgimagesize.width,
            Define.svgimagesize.height,
            Define.grid.width,
            Define.grid.height
        );

        const new_box_id   = Box.getNewBoxId(boxs);
        const new_group_id = Box.getNewGroupId(boxs);

        const payload = {
            box_id:   new_box_id,
            group_id: new_group_id,
            group_no: 1,
            type:     'text',
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,

            text: {
                kumihoko:   f_box.text.kumihoko,
                padding_js: f_box.text.padding_js,
                padding_je: f_box.text.padding_je,
                padding_gs: f_box.text.padding_gs,
                padding_ge: f_box.text.padding_ge,
                size_j:     f_box.text.size_j,
                size_g:     f_box.text.size_g,
                gyokan:     f_box.text.gyokan,
                font:       f_box.text.font,
            },
        };

        yield put(Saga_ContextMenu_NewBoxText(payload));
    });

    // 画像ボックスの複製
    yield takeEvery(SU_CONTEXTMENU_COPYBOXIMAGE, function* (action) {
        const boxs = yield select((state) => state.boxs);

        // 複製元ボックスのボックス情報を得る
        const f_box = Box.getBox(boxs, action.payload.box_id);

        // 複製元ボックスの幅と高さを得る
        const f_box_width  = f_box.x2 - f_box.x1;
        const f_box_height = f_box.y2 - f_box.y1;

        // 複製ボックスの基点座標
        let tx = f_box.x1 - 50;
        let ty = f_box.y1 + 50;

        // 複製ボックスの基点座標をスナップさせる
        [tx, ty] = Grid.snap(
            tx,
            ty,
            Define.svgimagesize.width,
            Define.svgimagesize.height,
            Define.grid.width,
            Define.grid.height
        );

        // 複製ボックスの始点と終点を求める
        let x1 = tx;
        let y1 = ty;
        let x2 = x1 + f_box_width;
        let y2 = y1 + f_box_height;

        // ボックスを紙面エリアに収める
        [x1, y1, x2, y2] = Grid.changeInArea(
            x1, y1, x2, y2,
            Define.svgimagesize.width,
            Define.svgimagesize.height,
            Define.grid.width,
            Define.grid.height
        );

        const new_box_id   = Box.getNewBoxId(boxs);
        const new_group_id = Box.getNewGroupId(boxs);

        const payload = {
            box_id:   new_box_id,
            group_id: new_group_id,
            group_no: 1,
            type:     'image',
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,

            image: {
                url: '',
            },
        };

        yield put(Saga_ContextMenu_NewBoxImage(payload));
    });

    // 素材をはずす
    yield takeEvery(SU_CONTEXTMENU_SOZAIUNLINK, function* (action) {
        yield put(SU_ToolBoxLink_DeleteButton_Click(action.payload));
    });

    // ボックスを削除
    yield takeEvery(SU_CONTEXTMENU_BOXREMOVE, function* (action) {
        yield put(SU_ToolBoxBoxData_DeleteButton_Click(action.payload));
    });
}
