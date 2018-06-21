import {
    SAGA_CONTEXTMENU_OPEN,
    SAGA_CONTEXTMENU_CLOSE,
} from '../actions_saga/contextmenu.js';

// ====================
// コンテキストメニューを開く・閉じる
//
//     'open': 開く
//     'close': 閉じる
// ====================
export const contextmenu = (state = {openclose: 'close', x: 0, y: 0}, action) => {
    let obj;

    switch (action.type) {
    case SAGA_CONTEXTMENU_OPEN:   // コンテキストメニューを開く
        obj = {
            openclose: 'open',
            x: action.payload.x,
            y: action.payload.y,
        };

        return obj;

    case SAGA_CONTEXTMENU_CLOSE:  // コンテキストメニューを閉じる
        obj = {
            openclose: 'close',
            x: 0,
            y: 0,
        };

        return obj;

    default:
        return state;
    }
}