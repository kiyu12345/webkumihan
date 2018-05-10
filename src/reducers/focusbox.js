import {
    SAGA_FOCUSBOX_NON_SELECT,
    SAGA_FOCUSBOX_BOX_SELECT,
} from '../actions_saga/focusbox.js';

// ====================
// boxフォーカス情報
//      {
//          id: フォーカスされたボックスのID、未フォーカスは null
//          group: フォーカスされたボックスのグループ名
//          no: フォーカスされたボックスのグループ内のNo
//      }
// ====================
export const focusbox = (state = {id: '', group: '', no: 0}, action) => {
    switch (action.type) {
    case SAGA_FOCUSBOX_NON_SELECT:   // 全ての選択を解除した場合
        return {
            id: '',
            group: '',
            no: 0,
        };

    case SAGA_FOCUSBOX_BOX_SELECT:   // ボックスを選択した場合
        return {
            id:    action.payload.id,
            group: action.payload.group,
            no:    action.payload.no,
        };

    default:
        return state;
    }
}
