import {
    SAGA_TOOLBOXFOCUS_CHANGE,
} from '../actions_saga/toolboxfocus.js';

// ====================
// ツールボックスフォーカス情報
//      'in'  : ツールボックスにフォーカスされている
//      'out' : ツールボックスにフォーカスされていない
// ====================
export const toolboxfocus = (state = 'out', action) => {
    switch (action.type) {
    case SAGA_TOOLBOXFOCUS_CHANGE:    // ツールボックスにフォーカスされた
        if (action.payload.focus == 'in') {
            return 'in';
        } else {
            return 'out';
        }

    default:
        return state;
    }
}
