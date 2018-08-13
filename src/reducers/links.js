import {
    SAGA_TOOLBOXLINK_LINK_CREATE,
    SAGA_TOOLBOXLINK_LINK_DELETE,
} from '../actions_saga/toolboxlink.js';

import {
    SAGA_TOOLBOXSOZAI_SOZAI_DELETE,
} from '../actions_saga/toolboxsozai.js';

import {
    SAGA_LINK_CALL,
    SAGA_LAYOUT_CALL,
    SAGA_LAYOUT_IMPORT,
} from '../actions_saga/toolboxpresen.js';

// ====================
// リンクデータ
//      [
//          {
//              group: グループ名
//              sozai_id: 素材ID
//
//              text: [
//                  {
//                      moji: 1文字
//                      size_j: 字詰方向サイズ
//                      size_g: 行送方向サイズ
//                      font: フォント番号
//                  },
//                  .....
//              ],
//          },
//          .....
//      ]
// ====================
export const links = (state = [], action) => {
    let lists;
    let link;

    switch (action.type) {
    case SAGA_LINK_CALL:
        lists = JSON.parse(JSON.stringify(action.payload.links));
        console.log(lists);
        return lists;
    
    case SAGA_LAYOUT_IMPORT:  // レイアウト読込（エクスポートしたJSONファイルの読み込み）
            lists = action.payload.json.links;
        
        return lists;

    case SAGA_TOOLBOXLINK_LINK_CREATE:
        lists = JSON.parse(JSON.stringify(state));

        link = {
            group_id: action.payload.group_id,
            sozai_id: action.payload.sozai_id,
        };

        lists.push(link);

        return lists;

    case SAGA_TOOLBOXLINK_LINK_DELETE:
        lists = JSON.parse(JSON.stringify(state));

        for (let i = 0; i < lists.length; i++) {
            if (lists[i].group_id == action.payload.group_id) {
                lists.splice(i, 1);
                break;
            }
        }

        return lists;

    case SAGA_TOOLBOXSOZAI_SOZAI_DELETE:
        lists = JSON.parse(JSON.stringify(state));

        for (let i = 0; i < lists.length; i++) {
            if (lists[i].sozai_id == action.payload.sozai_id) {
                lists.splice(i, 1);
                break;
            }
        }

        return lists;

    case SAGA_LAYOUT_CALL:
        lists = [];

        return lists;

    default:
        return state;
    }
}
