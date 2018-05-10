// import {
//     SAGA_NANI_DOUSHITA,
// } from '../actions_saga/xxxxx.js';

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
export const box = (state = [
    {
        id: 'editbox001',
        type: 'text',
        x1: 200,
        y1: 100,
        x2: 400,
        y2: 200,
        group: 'test',
        no: 1,
    }
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

    default:
        return state;
    }
}
