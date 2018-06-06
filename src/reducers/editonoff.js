import {
    SAGA_EDITONOFF_CHANGE,
} from '../actions_saga/toolboxpresen.js';

// ====================
// 編集状態ON／OFF情報
//      'on': 編集状態ON
//      'off': 編集状態OFF
// ====================
export const editonoff = (state = 'on', action) => {
    switch (action.type) {
    case SAGA_EDITONOFF_CHANGE:   // 編集状態のON／OFFが切り替えられた場合
        return action.payload.onoff;

    default:
        return state;
    }
}