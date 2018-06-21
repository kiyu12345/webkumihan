// import {
//     SAGA_NANI_DOUSHITA,
// } from '../actions_saga/xxxxx.js';

// ====================
// data
//    'none'    : 何もしてない
//    'working' : 読み込み中
//    'success' : 読み込み成功
//    'error'   : 読み込み失敗
// ====================
export const data = (state = 'none', action) => {
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
