import { Text } from '../libs/text.js';
import { PresenSozai } from '../define.js';

import {
    SAGA_TOOLBOXSOZAI_SOZAI_UPDATE,
    SAGA_TOOLBOXSOZAI_SOZAI_DELETE,
    SAGA_TOOLBOXSOZAI_SOZAI_CREATE,
    SAGA_TOOLBOXSOZAI_SOZAI_SELECT,
    SAGA_TOOLBOXSOZAI_SOZAI_NONSELECT,
    SAGA_TOOLBOXSOZAI_SOZAI_TOGGLE,
} from '../actions_saga/toolboxsozai.js';

import {
    SAGA_SOZAI_CALL,
} from '../actions_saga/toolboxpresen.js';

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
export const sozai = (state = [], action) => {
    let lists;
    let sozai;

    switch (action.type) {
    case SAGA_SOZAI_CALL:
        lists = JSON.parse(JSON.stringify(PresenSozai[action.payload.pattern]));

        for (let i = 0; i < lists.length; i++) {
            if (lists[i].type == 'text') {
                // 文字オブジェクト配列を作成してセットする
                lists[i].mojiObjAry = Text.createMojiObjAry(lists[i].text);
            }
        }
        
        return lists;

    case SAGA_TOOLBOXSOZAI_SOZAI_SELECT:
        lists = JSON.parse(JSON.stringify(state));

        for (let i = 0; i < lists.length; i++) {
            lists[i].select = '';
        }

        for (let i = 0; i < lists.length; i++) {
            if (lists[i].sozai_id == action.payload.sozai_id) {
                lists[i].select = 'on';
                break;
            }
        }

        return lists;

    case SAGA_TOOLBOXSOZAI_SOZAI_NONSELECT:
        lists = JSON.parse(JSON.stringify(state));

        for (let i = 0; i < lists.length; i++) {
            lists[i].select = '';
        }

        return lists;

    case SAGA_TOOLBOXSOZAI_SOZAI_TOGGLE:
        lists = JSON.parse(JSON.stringify(state));

        let index = -1;
        let select;

        for (let i = 0; i < lists.length; i++) {
            if (lists[i].sozai_id == action.payload.sozai_id) {
                index = i;
                select = lists[i].select;
                break;
            }
        }

        if (index == -1) {
            return lists;
        }
        
        for (let i = 0; i < lists.length; i++) {
            lists[i].select = '';
        }

        select = (select == 'on') ? '' : 'on';

        lists[index].select = select;

        return lists;

    case SAGA_TOOLBOXSOZAI_SOZAI_UPDATE:
        lists = JSON.parse(JSON.stringify(state));

        for (let i = 0; i < lists.length; i++) {
            // lists[i].select = '';

            if (lists[i].sozai_id == action.payload.sozai.sozai_id) {
                lists[i].type = action.payload.sozai.type;
                lists[i].text = action.payload.sozai.text;

                // 文字オブジェクト配列を作成してセットする
                lists[i].mojiObjAry = Text.createMojiObjAry(action.payload.sozai.text);

                lists[i].image = action.payload.sozai.image;
                
                // lists[i].select = 'on';

                break;
            }
        }

        return lists;

    case SAGA_TOOLBOXSOZAI_SOZAI_DELETE:
        lists = JSON.parse(JSON.stringify(state));

        for (let i = 0; i < lists.length; i++) {
            lists[i].select = '';
        }

        for (let i = 0; i < lists.length; i++) {
            if (lists[i].sozai_id == action.payload.sozai_id) {
                lists.splice(i, 1);
                break;
            }
        }

        return lists;

    case SAGA_TOOLBOXSOZAI_SOZAI_CREATE:
        lists = JSON.parse(JSON.stringify(state));

        for (let i = 0; i < lists.length; i++) {
            lists[i].select = '';
        }

        sozai = {
            sozai_id: action.payload.sozai_id,
            type: action.payload.type,
            text: action.payload.text,

            // 文字オブジェクト配列を作成してセットする
            mojiObjAry: Text.createMojiObjAry(action.payload.text),

            image: action.payload.image,

            select: 'on',
        };

        lists.push(sozai);

        return lists;

    default:
        return state;
    }
}
