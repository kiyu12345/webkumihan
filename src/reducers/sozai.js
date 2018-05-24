import { Zahyo } from '../libs/zahyo.js';

import { Text } from '../libs/text.js';

import {
    SAGA_TOOLBOXSOZAI_SOZAI_UPDATE,
    SAGA_TOOLBOXSOZAI_SOZAI_DELETE,
    SAGA_TOOLBOXSOZAI_SOZAI_CREATE,
} from '../actions_saga/toolboxsozai.js';

// ====================
// 素材データ
//      [
//          {
//              id: ID
//              type: 'text':テキスト 'image':画像
//              text: テキスト
//              mojiObjAry: 文字オブジェクト配列
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
        mojiObjAry: [],
        image: '',
    },
    {
        id: 'sozai002',
        type: 'text',
        text: 'かきくけこさしすせそ',
        mojiObjAry: [],
        image: '',
    },
    {
        id: 'sozai003',
        type: 'text',
        text: 'さしすせそたちつてと',
        mojiObjAry: [],
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

                // 文字オブジェクト配列を作成してセットする
                lists[i].mojiObjAry = Text.createMojiObjAry(action.payload.sozai.text);

                lists[i].image = action.payload.sozai.image;

                break;
            }
        }

console.log(lists);

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

    case SAGA_TOOLBOXSOZAI_SOZAI_CREATE:
        lists = state.slice();

        sozai = {
            id: action.payload.id,
            type: action.payload.type,
            text: action.payload.text,

            // 文字オブジェクト配列を作成してセットする
            mojiObjAry: Text.createMojiObjAry(action.payload.text),

            image: action.payload.image,
        };

        lists.push(sozai);

        return lists;

    default:
        return state;
    }
}
