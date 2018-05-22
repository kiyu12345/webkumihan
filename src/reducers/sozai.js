import { Zahyo } from '../libs/zahyo.js';

import { TextGrid } from '../libs/textgrid.js';

import {
    SAGA_TOOLBOXSOZAI_SOZAI_UPDATE,
    SAGA_TOOLBOXSOZAI_SOZAI_DELETE,
} from '../actions_saga/toolboxsozai.js';

// ====================
// 素材データ
//      [
//          {
//              id: ID
//              type: 'text':テキスト 'image':画像
//              text: テキスト
//              image: 画像
//          },
//          .....
//      ]
// ====================
export const sozai = (state = [
    {
        id: 'sozai001',
        type: 'text',
        text: 'あいうえおかきくけこ',
        image: '',
    },
    {
        id: 'sozai002',
        type: 'text',
        text: 'かきくけこさしすせそ',
        image: '',
    },
    {
        id: 'sozai003',
        type: 'text',
        text: 'さしすせそたちつてと',
        image: '',
    },
], action) => {
    let lists;
    let sozai;

    switch (action.type) {
    case SAGA_TOOLBOXSOZAI_SOZAI_UPDATE:
        lists = state.slice();

        for (let i = 0; i < lists.length; i++) {
            if (lists[i].id == action.payload.sozai.id) {
                lists[i].type = action.payload.sozai.type;
                lists[i].text = action.payload.sozai.text;
                lists[i].image = action.payload.sozai.image;

                break;
            }
        }

        return lists;

    case SAGA_TOOLBOXSOZAI_SOZAI_DELETE:
        lists = state.slice();

        for (let i = 0; i < lists.length; i++) {
            if (lists[i].id == action.payload.id) {
                lists.splice(i, 1);
                break;
            }
        }

        return lists;

    default:
        return state;
    }
}
