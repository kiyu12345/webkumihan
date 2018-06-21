import {
    SAGA_DANDD_MOUSEDOWN,
} from '../actions_saga/dandd.js';

// ====================
// ドラッグアンドドロップ情報
//      {
//          view: 'true':ドラッグ・アンド・ドロップ開始 'false':ドラッグ・アンド・ドロップ終了
//          event: マウスイベント
//          type: 'sozai'... タイプ
//          value: 情報
//      }
// ====================
export const dandd = (state = {view: 'false'}, action) => {
    let obj = [];

    switch (action.type) {
    case SAGA_DANDD_MOUSEDOWN:   // マウスダウンされた
        return action.payload;

    default:
        obj = JSON.parse(JSON.stringify(state));
        obj.view = 'false';
        return obj;
    }
}