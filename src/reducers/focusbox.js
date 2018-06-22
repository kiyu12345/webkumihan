import {
    SAGA_SELECTBOX_BOX_NONSELECT,
    SAGA_SELECTBOX_BOX_SELECT,
} from '../actions_saga/selectbox.js';

import {
    SAGA_TOOLBOXBOXDATA_BOXDATA_UPDATE,
    SAGA_TOOLBOXBOXDATA_BOXDATA_DELETE,
    SAGA_TOOLBOXBOXDATA_BOXDATA_CREATE,
} from '../actions_saga/toolboxboxdata.js';

import {
    SAGA_CONTEXTMENU_NEWBOXTEXT,
    SAGA_CONTEXTMENU_NEWBOXIMAGE,
    SAGA_CONTEXTMENU_NEWBOXLINE,
} from '../actions_saga/contextmenu.js';


// ====================
// boxフォーカス情報
//      {
//          box_id: フォーカスされたボックスのID、未フォーカスは null
//          group_id: フォーカスされたボックスのグループ名
//          group_no: フォーカスされたボックスのグループ内のNo
//          type: 'text':テキスト 'image':画像 'title':見出し 'haikei':背景 'line':罫線 'rect':矩形線
//      }
// ====================
export const focusbox = (state = {box_id: 0, group_id: 0, group_no: 0, type: ''}, action) => {
    switch (action.type) {
    case SAGA_SELECTBOX_BOX_NONSELECT:   // 全ての選択を解除した場合
        return {
            box_id: 0,
            group_id: 0,
            box_no: 0,
            type: '',
        };

    case SAGA_SELECTBOX_BOX_SELECT:   // ボックスを選択した場合
        return {
            box_id:   action.payload.box_id,
            group_id: action.payload.group_id,
            group_no: action.payload.group_no,
            type:     action.payload.type,
        };

    case SAGA_TOOLBOXBOXDATA_BOXDATA_UPDATE:    // ボックス情報を更新した場合
        return {
            box_id:   action.payload.box.box_id,
            group_id: action.payload.box.group_id,
            group_no: action.payload.box.group_no,
            type:     action.payload.box.type,
        };

    case SAGA_TOOLBOXBOXDATA_BOXDATA_DELETE:    // ボックスを削除した場合
        return {
            box_id: 0,
            group_id: 0,
            group_no: 0,
            type: '',
        };

    case SAGA_TOOLBOXBOXDATA_BOXDATA_CREATE:    // ボックスを新規作成した場合
        return {
            box_id:   action.payload.box.box_id,
            group_id: action.payload.box.group_id,
            group_no: action.payload.box.group_no,
            type:     action.payload.box.type,
        };

/***
    case SAGA_CONTEXTMENU_NEWBOXTEXT:           // コンテキストメニュの「新規作成 テキストボックス」
        return {
            box_id:   action.payload.box_id,
            group_id: action.payload.group_id,
            group_no: action.payload.group_no,
            type:     action.payload.type,
        };

    case SAGA_CONTEXTMENU_NEWBOXIMAGE:           // コンテキストメニュの「新規作成 画像ボックス」
        return {
            box_id:   action.payload.box_id,
            group_id: action.payload.group_id,
            group_no: action.payload.group_no,
            type:     action.payload.type,
        };

    case SAGA_CONTEXTMENU_NEWBOXLINE:           // コンテキストメニュの「新規作成 ラインボックス」
        return {
            box_id:   action.payload.box_id,
            group_id: action.payload.group_id,
            group_no: action.payload.group_no,
            type:     action.payload.type,
        };
***/

    default:
        return state;
    }
}
