import { Zahyo } from '../libs/zahyo.js';

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
        h: 140,
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
    {
        id: 'toolbox004',
        type: 'sozai',
        x: 0,
        y: 0,
        w: 200,
        h: 400,
        view: 'true',
    },
    {
        id: 'toolbox005',
        type: 'link',
        x: 0,
        y: 0,
        w: 200,
        h: 470,
        view: 'true',
    },
    {
        id: 'toolbox999',
        type: 'presen',
        x: 0,
        y: 0,
        w: 200,
        h: 100,
        view: 'true',
    },
], action) => {
    let toolboxs;

    switch (action.type) {
    case SAGA_TOOLBOX_MOVEEND:
        toolboxs = JSON.parse(JSON.stringify(state));

        let i;
        for (i = 0; i < toolboxs.length; i++) {
            if (toolboxs[i].id == action.payload.id) {
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

    case SAGA_SELECTBOX_BOX_SELECT:   // ボックスを選択した場合
        toolboxs = JSON.parse(JSON.stringify(state));

        for (let i = 0; i < toolboxs.length; i++) {
            if (toolboxs[i].type == 'textdata') {
                if (action.payload.type == 'text') {
                    toolboxs[i].view = 'true';
                } else {
                    toolboxs[i].view = 'false';
                }
                // break;
            }
        }

        return toolboxs;

    case SAGA_SELECTBOX_BOX_NONSELECT:   // ボックスの選択を解除した場合
        toolboxs = JSON.parse(JSON.stringify(state));

        for (let i = 0; i < toolboxs.length; i++) {
            if (toolboxs[i].type == 'textdata') {
                // toolboxs[i].view = 'false';
                break;
            }
        }

        return toolboxs;

    case SAGA_EDITONOFF_CHANGE:     // 編集状態のON/OFFが切り替えられた
        toolboxs = JSON.parse(JSON.stringify(state));

        for (let i = 0; i < toolboxs.length; i++) {
            if (action.payload.onoff == 'on') {
                toolboxs[i].view = 'true';
            } else {
                toolboxs[i].view = 'false';
                if (toolboxs[i].type == 'presen' || toolboxs[i].type == 'scale') {
                    toolboxs[i].view = 'true';
                }
            }
        }

        return toolboxs;

    default:
        return state;
    }
}
