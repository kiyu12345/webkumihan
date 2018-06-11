import { Zahyo } from '../libs/zahyo.js';

import { TextGrid } from '../libs/textgrid.js';

import { PresenLine } from '../define.js';

import {
    SAGA_LAYOUT_CALL,
} from '../actions_saga/toolboxpresen.js';

// ====================
// ラインデータ
//      [
//          {
//              id: ID
//              type: 'rect':矩形 'line':ライン
//              x1: 右上座標 X（右上基点）
//              y1: 右上座標 Y（右上基点）
//              x2: 左下座標 X（右上基点）
//              y2: 左下座標 Y（右上基点）
//
//              width: 線幅
//              color: 線の色
//          }
//      ]
// ====================
export const lines = (state = [], action) => {
    let lines;
    let areasize_j, areasize_g;

    switch (action.type) {
    case SAGA_LAYOUT_CALL:
        lines = JSON.parse(JSON.stringify(PresenLine[action.payload.pattern]));

        return lines;

    default:
        return state;
    }
}
