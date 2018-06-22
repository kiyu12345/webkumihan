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
        view: 'true',
        remember_view: 'true',
    },
    {
        toolbox_id: 2,
        type: 'boxdata',
        x: 0,
        y: 0,
        w: 200,
        h: 140,
        view: 'true',
        remember_view: 'true',
    },
    {
        toolbox_id: 3,
        type: 'textdata',
        x: 0,
        y: 0,
        w: 200,
        h: 160,
        view: 'false',
        remember_view: 'false',
    },
    {
        toolbox_id: 4,
        type: 'linedata',
        x: 0,
        y: 0,
        w: 200,
        h: 160,
        view: 'false',
        remember_view: 'false',
    },
    {
        toolbox_id: 5,
        type: 'sozai',
        x: 0,
        y: 0,
        w: 200,
        h: 400,
        view: 'true',
        remember_view: 'true',
    },
    {
        toolbox_id: 6,
        type: 'link',
        x: 0,
        y: 0,
        w: 200,
        h: 470,
        view: 'false',
        remember_view: 'false',
    },
    {
        toolbox_id: 7,
        type: 'presen',
        x: 0,
        y: 0,
        w: 200,
        h: 100,
        view: 'true',
        remember_view: 'true',
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

    case SAGA_SELECTBOX_BOX_SELECT:   // ボックスを選択した場合
        toolboxs = JSON.parse(JSON.stringify(state));

        // ツールボックスのON/OFFを切り替える
        for (let i = 0; i < toolboxs.length; i++) {
            switch (toolboxs[i].type) {
            case 'textdata':    // テキスト情報ツールボックス
                if (action.payload.type == 'text') {
                    toolboxs[i].view = 'true';
                } else {
                    toolboxs[i].view = 'false';
                }
                break;
            case 'linedata':    // ライン情報ツールボックス
                if (action.payload.type == 'line') {
                    toolboxs[i].view = 'true';
                } else {
                    toolboxs[i].view = 'false';
                }
                break;
            }
        }

        // 現在の表示状態を覚えておく
        for (let i = 0; i < toolboxs.length; i++) {
            toolboxs[i].remember_view = toolboxs[i].view;
        }

        return toolboxs;

    case SAGA_SELECTBOX_BOX_NONSELECT:   // ボックスの選択を解除した場合
        toolboxs = JSON.parse(JSON.stringify(state));

        // ボックス種別によるツールボックスの表示をOFFにする
        for (let i = 0; i < toolboxs.length; i++) {
            switch (toolboxs[i].type) {
            case 'textdata':    // テキスト情報ツールボックス
            case 'linedata':    // ライン情報ツールボックス
                toolboxs[i].view = 'false';
                break;
            }
        }

        // 現在の表示状態を覚えておく
        for (let i = 0; i < toolboxs.length; i++) {
            toolboxs[i].remember_view = toolboxs[i].view;
        }

        return toolboxs;

    case SAGA_EDITONOFF_CHANGE:     // 編集状態のON/OFFが切り替えられた
        toolboxs = JSON.parse(JSON.stringify(state));

        if (action.payload.onoff == 'on') {
            // 覚えておいたツールボックスの表示状態に戻す
            for (let i = 0; i < toolboxs.length; i++) {
                toolboxs[i].view = toolboxs[i].remember_view;
            }
        } else {
            // 必要なツールボックスを残して、他は非表示にする
            for (let i = 0; i < toolboxs.length; i++) {
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
