import {
    SAGA_SELECTBOX_BOX_NONSELECT,
    SAGA_SELECTBOX_BOX_SELECT,
} from '../actions_saga/selectbox.js';

import {
    SAGA_TOOLBOXBOXDATA_BOXDATA_CHANGE,
} from '../actions_saga/toolboxboxdata.js';

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
    case SAGA_SELECTBOX_BOX_NONSELECT:   // 全ての選択を解除した場合
        return {
            id: '',
            group: '',
            no: 0,
        };

    case SAGA_SELECTBOX_BOX_SELECT:   // ボックスを選択した場合
        return {
            id:    action.payload.id,
            group: action.payload.group,
            no:    action.payload.no,
        };

    case SAGA_TOOLBOXBOXDATA_BOXDATA_CHANGE:    // ボックス情報ツールボックスで更新ボタンが押された場合
        return {
            id:    action.payload.box.id,
            group: action.payload.box.group,
            no:    action.payload.box.no,
        };

    default:
        return state;
    }
}
