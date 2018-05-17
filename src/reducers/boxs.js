import { Zahyo } from '../libs/zahyo.js';

import {
    SAGA_SELECTBOX_EDITBOX_MOVEEND,
} from '../actions_saga/selectbox.js';

// ====================
// ボックスデータ
//      [
//          {
//              id: ID,
//              type: 'text':テキストボックス 'image':画像ボックス
//              x1: ボックスの右上座標 X（右上基点）
//              y1: ボックスの右上座標 Y（右上基点）
//              x2: ボックスの左下座標 X（右上基点）
//              y2: ボックスの左下座標 Y（右上基点）
//              group: グループ名
//              no: グループ内の番号
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
    },
    {
        id: 'box002',
        type: 'text',
        x1: 300,
        y1: 100,
        x2: 400,
        y2: 300,
        group: 'test2',
        no: 2,
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
    },
    {
        id: 'box004',
        type: 'text',
        x1: 700,
        y1: 100,
        x2: 800,
        y2: 300,
        group: 'test3',
        no: 2,
    },
], action) => {
    switch (action.type) {
    case SAGA_SELECTBOX_EDITBOX_MOVEEND:
        let boxs = state.slice();

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

    default:
        return state;
    }
}
