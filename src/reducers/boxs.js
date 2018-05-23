import { Zahyo } from '../libs/zahyo.js';

import { TextGrid } from '../libs/textgrid.js';

import {
    SAGA_SELECTBOX_EDITBOX_MOVEEND,
    SAGA_SELECTBOX_EDITBOX_CHANGESIZE,
} from '../actions_saga/selectbox.js';

import {
    SAGA_TOOLBOXBOXDATA_BOXDATA_UPDATE,
    SAGA_TOOLBOXBOXDATA_BOXDATA_DELETE,
    SAGA_TOOLBOXBOXDATA_BOXDATA_CREATE,
} from '../actions_saga/toolboxboxdata.js';

import {
    SAGA_TOOLBOXTEXTDATA_TEXTDATA_UPDATE,
} from '../actions_saga/toolboxtextdata.js';

// ====================
// ボックスデータ
//      [
//          {
//              id: ID
//              type: 'text':テキストボックス 'image':画像ボックス
//              x1: ボックスの右上座標 X（右上基点）
//              y1: ボックスの右上座標 Y（右上基点）
//              x2: ボックスの左下座標 X（右上基点）
//              y2: ボックスの左下座標 Y（右上基点）
//              group: グループ名
//              no: グループ内の番号
//
//              textgrid: {
//                  jidume_padding: 字詰め方向パディング値
//                  gyookuri_padding: 行送り方向パディング値
//                  jidume_gridsize: グリッドサイズ（字詰め方向）
//                  gyookuri_gridsize: グリッドサイズ（行送り方向）
//                  gyokan: 行間サイズ    
//              }
//              textgridAry: [[x,y]...] 文字グリッド中心座標配列
//          }
//      ]
// ====================
export const boxs = (state = [
    {
        id: 'box001',
        type: 'text',
        x1: 100,
        y1: 100,
        x2: 200,
        y2: 300,
        group: 'test',
        no: 1,

        text: {
            kumihoko: 'tate',
            padding_js: 10,
            padding_je: 10,
            padding_gs: 10,
            padding_ge: 10,
            size_j: 10,
            size_g: 10,
            gyokan: 5,
        },
        textgrid: [],
    },
    {
        id: 'box002',
        type: 'text',
        x1: 300,
        y1: 100,
        x2: 400,
        y2: 300,
        group: 'test2',
        no: 1,

        text: {
            kumihoko: 'tate',
            padding_js: 10,
            padding_je: 10,
            padding_gs: 10,
            padding_ge: 10,
            size_j: 10,
            size_g: 10,
            gyokan: 5,
        },
        textgrid: [],
    },
    {
        id: 'box003',
        type: 'text',
        x1: 500,
        y1: 100,
        x2: 600,
        y2: 300,
        group: 'test',
        no: 2,

        text: {
            kumihoko: 'tate',
            padding_js: 10,
            padding_je: 10,
            padding_gs: 10,
            padding_ge: 10,
            size_j: 10,
            size_g: 10,
            gyokan: 5,
        },
        textgrid: [],
    },
    {
        id: 'box004',
        type: 'text',
        x1: 700,
        y1: 100,
        x2: 800,
        y2: 300,
        group: 'test3',
        no: 1,

        text: {
            kumihoko: 'tate',
            padding_js: 10,
            padding_je: 10,
            padding_gs: 10,
            padding_ge: 10,
            size_j: 10,
            size_g: 10,
            gyokan: 5,
        },
        textgrid: [],
    },
], action) => {
    let boxs;
    let areasize_j, areasize_g;

    switch (action.type) {
    case SAGA_SELECTBOX_EDITBOX_MOVEEND:
        boxs = state.slice();

        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].id == action.payload.id) {
                boxs[i].x1 = action.payload.x1;
                boxs[i].y1 = action.payload.y1;
                boxs[i].x2 = action.payload.x2;
                boxs[i].y2 = action.payload.y2;

                break;
            }
        }

        return boxs;

    case SAGA_SELECTBOX_EDITBOX_CHANGESIZE:
        boxs = state.slice();

        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].id == action.payload.id) {
                boxs[i].x1 = action.payload.x1;
                boxs[i].y1 = action.payload.y1;
                boxs[i].x2 = action.payload.x2;
                boxs[i].y2 = action.payload.y2;

                // テキストグリッド
                if (boxs[i].text.kumihoko == 'tate') {
                    areasize_j = boxs[i].y2 - boxs[i].y1;
                    areasize_g = boxs[i].x2 - boxs[i].x1;
                } else {
                    areasize_j = boxs[i].x2 - boxs[i].x1;
                    areasize_g = boxs[i].y2 - boxs[i].y1;
                }
                const textgrid = TextGrid.getTextGridAry(
                    areasize_j,  // エリアサイズ（字詰め方向）
                    areasize_g,  // エリアサイズ（行送り方向）
                    boxs[i].text.padding_js,  // パディング値（字詰め方向 開始）
                    boxs[i].text.padding_je,  // パディング値（字詰め方向 終了）
                    boxs[i].text.padding_gs,  // パディング値（行送り方向 開始）
                    boxs[i].text.padding_ge,  // パディング値（行送り方向 終了）
                    boxs[i].text.size_j,  // テキストサイズ（字詰め方向）
                    boxs[i].text.size_g,  // テキストサイズ（行送り方向）
                    boxs[i].text.gyokan  // 行間
                );
                boxs[i].textgrid = textgrid;

                break;
            }
        }

        return boxs;

    case SAGA_TOOLBOXBOXDATA_BOXDATA_UPDATE:
        boxs = state.slice();

        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].id == action.payload.box.id) {
                boxs[i].group = action.payload.box.group;
                boxs[i].no = action.payload.box.no;

                break;
            }
        }

        return boxs;

    case SAGA_TOOLBOXTEXTDATA_TEXTDATA_UPDATE:
        boxs = state.slice();

        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].id == action.payload.box.id) {
                boxs[i].text.padding_js = action.payload.box.text.padding_js;
                boxs[i].text.padding_je = action.payload.box.text.padding_je;
                boxs[i].text.padding_gs = action.payload.box.text.padding_gs;
                boxs[i].text.padding_ge = action.payload.box.text.padding_ge;
                boxs[i].text.kumihoko = action.payload.box.text.kumihoko;
                boxs[i].text.gyokan = action.payload.box.text.gyokan;

                // テキストグリッド
                if (boxs[i].text.kumihoko == 'tate') {
                    areasize_j = boxs[i].y2 - boxs[i].y1;
                    areasize_g = boxs[i].x2 - boxs[i].x1;
                } else {
                    areasize_j = boxs[i].x2 - boxs[i].x1;
                    areasize_g = boxs[i].y2 - boxs[i].y1;
                }
                const textgrid = TextGrid.getTextGridAry(
                    areasize_j,  // エリアサイズ（字詰め方向）
                    areasize_g,  // エリアサイズ（行送り方向）
                    boxs[i].text.padding_js,  // パディング値（字詰め方向 開始）
                    boxs[i].text.padding_je,  // パディング値（字詰め方向 終了）
                    boxs[i].text.padding_gs,  // パディング値（行送り方向 開始）
                    boxs[i].text.padding_ge,  // パディング値（行送り方向 終了）
                    boxs[i].text.size_j,  // テキストサイズ（字詰め方向）
                    boxs[i].text.size_g,  // テキストサイズ（行送り方向）
                    boxs[i].text.gyokan  // 行間
                );
                boxs[i].textgrid = textgrid;

                break;
            }
        }

        return boxs;

    case SAGA_TOOLBOXBOXDATA_BOXDATA_DELETE:
        boxs = state.slice();

        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].id == action.payload.id) {
                boxs.splice(i, 1);
                break;
            }
        }

        return boxs;       

    case SAGA_TOOLBOXBOXDATA_BOXDATA_CREATE:
        boxs = state.slice();

        let box;
        box = {
            id: action.payload.box.id,
            type: action.payload.box.type,
            x1: 100,
            y1: 100,
            x2: 200,
            y2: 200,
            group: action.payload.box.group,
            no: action.payload.box.no,
            text: {
                kumihoko: 'tate',
                padding_js: 10,
                padding_je: 10,
                padding_gs: 10,
                padding_ge: 10,
                size_j: 10,
                size_g: 10,
                gyokan: 5,
            },
        };

        // テキストグリッド
        if (box.text.kumihoko == 'tate') {
            areasize_j = box.y2 - box.y1;
            areasize_g = box.x2 - box.x1;
        } else {
            areasize_j = box.x2 - box.x1;
            areasize_g = box.y2 - box.y1;
        }
        const textgrid = TextGrid.getTextGridAry(
            areasize_j,  // エリアサイズ（字詰め方向）
            areasize_g,  // エリアサイズ（行送り方向）
            box.text.padding_js,  // パディング値（字詰め方向 開始）
            box.text.padding_je,  // パディング値（字詰め方向 終了）
            box.text.padding_gs,  // パディング値（行送り方向 開始）
            box.text.padding_ge,  // パディング値（行送り方向 終了）
            box.text.size_j,  // テキストサイズ（字詰め方向）
            box.text.size_g,  // テキストサイズ（行送り方向）
            box.text.gyokan  // 行間
        );
        box.textgrid = textgrid;

        // 追加する
        boxs.push(box);

        return boxs;

    default:
        return state;
    }
}
