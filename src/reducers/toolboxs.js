import {
    SAGA_TOOLBOX_MOVEEND,
} from '../actions_saga/toolbox.js';

import {
    SAGA_SELECTBOX_BOX_SELECT,
    SAGA_SELECTBOX_BOX_NONSELECT,
} from '../actions_saga/selectbox.js';

import {
    SAGA_EDITONOFF_CHANGE,
} from '../actions_saga/toolboxpresen.js';

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
        toolbox_id: 1,
        type: 'scale',
        x: 0,
        y: 0,
        w: 200,
        h: 40,
    },
    {
        toolbox_id: 2,
        type: 'boxdata',
        x: 0,
        y: 0,
        w: 200,
        h: 140,
    },
    {
        toolbox_id: 3,
        type: 'textdata',
        x: 0,
        y: 0,
        w: 200,
        h: 160,
    },
    {
        toolbox_id: 4,
        type: 'linedata',
        x: 0,
        y: 0,
        w: 200,
        h: 160,
    },
    {
        toolbox_id: 5,
        type: 'sozai',
        x: 0,
        y: 0,
        w: 200,
        h: 485,
    },
    {
        toolbox_id: 6,
        type: 'link',
        x: 0,
        y: 0,
        w: 200,
        h: 470,
    },
    {
        toolbox_id: 7,
        type: 'presen',
        x: 0,
        y: 0,
        w: 200,
        h: 100,
    },
], action) => {
    let toolboxs;

    switch (action.type) {
    case SAGA_TOOLBOX_MOVEEND:
        toolboxs = JSON.parse(JSON.stringify(state));

        let i;
        for (i = 0; i < toolboxs.length; i++) {
            if (toolboxs[i].toolbox_id == action.payload.toolbox_id) {
                toolboxs[i].x = action.payload.x;
                toolboxs[i].y = action.payload.y;
                break;
            }
        }

        // 最前面にもってくる
        const toolbox = toolboxs.slice(i, i + 1);
        toolboxs.splice(i, 1);
        toolboxs = toolboxs.concat(toolbox);

        return toolboxs;

    default:
        return state;
    }
}
