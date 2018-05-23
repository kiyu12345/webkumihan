import { Zahyo } from '../libs/zahyo.js';

import {
    SAGA_TOOLBOXLINK_LINK_CREATE,
    SAGA_TOOLBOXLINK_LINK_DELETE,
} from '../actions_saga/toolboxlink.js';

// ====================
// リンクデータ
//      [
//          {
//              box_id: ボックスID（グループNoが 1 のもののみ）
//              sozai_id: 素材ID
//          },
//          .....
//      ]
// ====================
export const links = (state = [
    {
        box_id: 'box001',
        sozai_id: 'sozai001',
    },
], action) => {
    let lists;
    let link;

    switch (action.type) {
    case SAGA_TOOLBOXLINK_LINK_CREATE:
        lists = state.slice();

        link = {
            box_id: action.payload.box_id,
            sozai_id: action.payload.sozai_id,
        };

        lists.push(link);

        return lists;

    case SAGA_TOOLBOXLINK_LINK_DELETE:
        lists = state.slice();

        for (let i = 0; i < lists.length; i++) {
            if (lists[i].box_id == action.payload.box_id) {
                lists.splice(i, 1);
                break;
            }
        }

        return lists;

    default:
        return state;
    }
}
