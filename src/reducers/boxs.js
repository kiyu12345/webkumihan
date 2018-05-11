import { Zahyo } from '../libs/zahyo.js';

import {
    SAGA_SELECTBOX_EDITBOX_MOVEEND,
} from '../actions_saga/selectbox.js';

// ====================
// editboxデータ
//      [
//          {
//              id: ID,
//              type: 'text':テキストボックス 'image':画像ボックス
//              x1: エディットボックスの左上座標 X
//              y1: エディットボックスの左上座標 Y
//              x2: エディットボックスの右下座標 X
//              y2: エディットボックスの右下座標 Y
//              group: グループ名
//              no: グループ内の番号
//          }
//      ]
// ====================
export const boxs = (state = [
    {
        id: 'box001',
        type: 'text',
        x1: 200,
        y1: 100,
        x2: 400,
        y2: 200,
        group: 'test',
        no: 1,
    },
    {
        id: 'box002',
        type: 'text',
        x1: 100,
        y1: 300,
        x2: 200,
        y2: 500,
        group: 'test',
        no: 2,
    },
    {
        id: 'box003',
        type: 'text',
        x1: 300,
        y1: 400,
        x2: 400,
        y2: 600,
        group: 'test2',
        no: 1,
    },
], action) => {
    switch (action.type) {
    // case SAGA_DATAREAD_START:
    //     return 'working';
    //
    // case SAGA_DATAREAD_SUCCESS:
    //     return 'success';
    //
    // case SAGA_DATAREAD_ERROR:
    //     return 'error';
    case SAGA_SELECTBOX_EDITBOX_MOVEEND:
        let boxs = state.slice();

        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].id == action.payload.id) {
                const z = Zahyo.changeRect1(boxs[i].x1,
                                            boxs[i].y1,
                                            boxs[i].x2,
                                            boxs[i].y2);
                
                boxs[i].x1 = action.payload.x;
                boxs[i].y1 = action.payload.y;
                boxs[i].x2 = action.payload.x + z.w;
                boxs[i].y2 = action.payload.y + z.h;

                break;
            }
        }

        return boxs;

    default:
        return state;
    }
}
