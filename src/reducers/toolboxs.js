import { Zahyo } from '../libs/zahyo.js';

import {
    SAGA_TOOLBOX_MOVEEND,
} from '../actions_saga/toolbox.js';

// ====================
// ツールボックスデータ
//      [
//          {
//              id: ID,
//              type: 'scale':拡大縮小ボックス
//              x: ツールボックスの左上座標 X (px)
//              y: ツールボックスの左上座標 Y (px)
//              w: ツールボックスの幅（px)
//              h: ツールボックスの高さ (px)
//              view: 'true':表示 'false': 非表示
//          }
//      ]
// ====================
export const toolboxs = (state = [
    {
        id: 'toolbox001',
        type: 'scale',
        x: 0,
        y: 0,
        w: 200,
        h: 40,
        view: 'true',
    },
    {
        id: 'toolbox002',
        type: 'boxdata',
        x: 0,
        y: 0,
        w: 200,
        h: 100,
        view: 'true',
    },
    {
        id: 'toolbox003',
        type: 'textdata',
        x: 0,
        y: 0,
        w: 200,
        h: 160,
        view: 'true',
    },
], action) => {
    switch (action.type) {
    case SAGA_TOOLBOX_MOVEEND:
        let toolboxs = state.slice();

        for (let i = 0; i < toolboxs.length; i++) {
            if (toolboxs[i].id == action.payload.id) {
                toolboxs[i].x = action.payload.x;
                toolboxs[i].y = action.payload.y;
                break;
            }
        }

        return toolboxs;

    default:
        return state;
    }
}
