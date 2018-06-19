import { Zahyo } from '../libs/zahyo.js';

import { TextGrid } from '../libs/textgrid.js';
import { Box } from '../libs/box.js';

import { PresenBox } from '../define.js';

import {
    SAGA_SELECTBOX_EDITBOX_MOVEEND,
    SAGA_SELECTBOX_EDITBOX_CHANGESIZE,
} from '../actions_saga/selectbox.js';

import {
    SAGA_TOOLBOXBOXDATA_BOXDATA_UPDATE,
    SAGA_TOOLBOXBOXDATA_BOXDATA_DELETE,
    SAGA_TOOLBOXBOXDATA_BOXDATA_CREATE,
} from '../actions_saga/toolboxboxdata.js';

import {
    SAGA_TOOLBOXTEXTDATA_TEXTDATA_UPDATE,
} from '../actions_saga/toolboxtextdata.js';

import {
    SAGA_TOOLBOXSOZAI_SOZAI_DELETE,
} from '../actions_saga/toolboxsozai.js';

import {
    SAGA_NAGASHIRESULT_CREATE,
    SAGA_NAGASHI_REMOVE,
    SAGA_NAGASHI_IMAGE,
    SAGA_NAGASHIRESULT_AFURE,
} from '../actions_saga/nagashi.js';

import {
    SAGA_CONTEXTMENU_NEWTEXTBOX,
} from '../actions_saga/contextmenu.js';


import {
    SAGA_LAYOUT_CALL,
} from '../actions_saga/toolboxpresen.js';


// ====================
// ボックスデータ
//      [
//          {
//              box_id: ID
//              group_id: グループID
//              group_no: グループ内の番号
//              type: 'text':  テキストボックス
//                    'image': 画像ボックス
//                    'title': 見出し
//                    'line':  罫線（縦または横の線）
//                    'rect':  矩形線
//              x1: ボックスの右上座標 X（右上基点）
//              y1: ボックスの右上座標 Y（右上基点）
//              x2: ボックスの左下座標 X（右上基点）
//              y2: ボックスの左下座標 Y（右上基点）
//
//              text: {
//                  kumihoko: 'tate':縦 'yoko':横
//                  padding_js: パディング値（字詰方向 開始）
//                  padding_je: パディング地（字詰方向 終了）
//                  padding_gs: パディング値（行送方向 開始）
//                  padding_ge: パディング値（行送方向 終了）
//                  size_j: 文字サイズ（字詰方向）
//                  size_g: 文字サイズ（行送方向）
//                  gyokan: 行間サイズ
//                  font: フォント番号
//
//                  grid: [[x,y]...] 文字グリッド中心座標配列
//                  result: [
//                                  {
//                                      moji: 'あ'   文字
//                                      size_j: 文字サイズ（0:デフォルトサイズ）
//                                      size_g: 文字サイズ（0:デフォルトサイズ）
//                                      j: 中心座標（字詰方向）
//                                      g: 中心座標（行送方向）
//                                  },
//                                  ......
//                              ]
//                  afure: あふれ文字数
//              }
//
//              image: {
//                  url: 画像のリンク先（フルパス）
//              }
//
//              title: {
//                  kumihoko: 'tate':縦 'yoko':横
//                  padding_js: パディング値（字詰方向 開始）
//                  padding_je: パディング地（字詰方向 終了）
//                  padding_gs: パディング値（行送方向 開始）
//                  padding_ge: パディング値（行送方向 終了）
//                  font: フォント番号
//                  kind: 装飾種類
//
//                  result: [
//                              {
//                                  moji: 'あ'   文字
//                                  size_j: 文字サイズ（0:デフォルトサイズ）
//                                  size_g: 文字サイズ（0:デフォルトサイズ）
//                                  j: 中心座標（字詰方向）
//                                  g: 中心座標（行送方向）
//                              },
//                              ......
//                          ]
//              }
//
//              haikei: {
//                  kind: 種類
//              }
//
//              line: {
//                  hoko: 'tate':縦 'yoko':横
//                  padding_s: パディング値（開始）
//                  padding_e: パディング値（終了）
//                  width: 罫線の太さ
//                  kind: 種類
//              }
//
//              rect: {
//                  left: 'on' or 'off'
//                  right: 'on' or 'off'
//                  top: 'on' or 'off'
//                  bottom: 'on' or 'off'
//                  width: 罫線の太さ
//                  kind: 種類
//              }
//          }
//      ]
//
// ====================
export const boxs = (state = [], action) => {
    let boxs;
    let box;
    let areasize_j, areasize_g;

    switch (action.type) {
    case SAGA_LAYOUT_CALL:  // レイアウト呼び出し（define.js 定義のものの呼び出し）
        boxs = JSON.parse(JSON.stringify(PresenBox[action.payload.pattern]));

        for (let i = 0; i < boxs.length; i++) {
            switch (boxs[i].type) {
            case 'text':
                // テキストグリッド
                if (boxs[i].text.kumihoko == 'tate') {
                    areasize_j = boxs[i].y2 - boxs[i].y1;
                    areasize_g = boxs[i].x2 - boxs[i].x1;
                } else {
                    areasize_j = boxs[i].x2 - boxs[i].x1;
                    areasize_g = boxs[i].y2 - boxs[i].y1;
                }
                const textgrid = TextGrid.getTextGridAry(
                    areasize_j,  // エリアサイズ（字詰め方向）
                    areasize_g,  // エリアサイズ（行送り方向）
                    boxs[i].text.padding_js,  // パディング値（字詰め方向 開始）
                    boxs[i].text.padding_je,  // パディング値（字詰め方向 終了）
                    boxs[i].text.padding_gs,  // パディング値（行送り方向 開始）
                    boxs[i].text.padding_ge,  // パディング値（行送り方向 終了）
                    boxs[i].text.size_j,  // テキストサイズ（字詰め方向）
                    boxs[i].text.size_g,  // テキストサイズ（行送り方向）
                    boxs[i].text.gyokan,  // 行間
                );
                boxs[i].text.grid = textgrid;
                boxs[i].text.result = [];
                boxs[i].text.afure = '';

                break;

            case 'image':
                boxs[i].image.url = '';
                
                break;
            }
        }

        return boxs;

    case SAGA_SELECTBOX_EDITBOX_MOVEEND:    // 選択ボックスの移動完了時
        boxs = JSON.parse(JSON.stringify(state));

        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].box_id == action.payload.box_id) {
                boxs[i].x1 = action.payload.x1;
                boxs[i].y1 = action.payload.y1;
                boxs[i].x2 = action.payload.x2;
                boxs[i].y2 = action.payload.y2;

                break;
            }
        }

        return boxs;

    case SAGA_SELECTBOX_EDITBOX_CHANGESIZE:     // 選択ボックスのサイズ変更完了時
        boxs = JSON.parse(JSON.stringify(state));

        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].box_id == action.payload.box_id) {
                boxs[i].x1 = action.payload.x1;
                boxs[i].y1 = action.payload.y1;
                boxs[i].x2 = action.payload.x2;
                boxs[i].y2 = action.payload.y2;
                
                switch (boxs[i].type) {
                case 'text':
                    // テキストグリッド
                    if (boxs[i].text.kumihoko == 'tate') {
                        areasize_j = boxs[i].y2 - boxs[i].y1;
                        areasize_g = boxs[i].x2 - boxs[i].x1;
                    } else {
                        areasize_j = boxs[i].x2 - boxs[i].x1;
                        areasize_g = boxs[i].y2 - boxs[i].y1;
                    }
                    const textgrid = TextGrid.getTextGridAry(
                        areasize_j,  // エリアサイズ（字詰め方向）
                        areasize_g,  // エリアサイズ（行送り方向）
                        boxs[i].text.padding_js,  // パディング値（字詰め方向 開始）
                        boxs[i].text.padding_je,  // パディング値（字詰め方向 終了）
                        boxs[i].text.padding_gs,  // パディング値（行送り方向 開始）
                        boxs[i].text.padding_ge,  // パディング値（行送り方向 終了）
                        boxs[i].text.size_j,  // テキストサイズ（字詰め方向）
                        boxs[i].text.size_g,  // テキストサイズ（行送り方向）
                        boxs[i].text.gyokan,  // 行間
                    );
                    boxs[i].text.grid = textgrid;

                    break;

                case 'image':
                    break;
                }

                break;
            }
        }

        return boxs;

    case SAGA_TOOLBOXBOXDATA_BOXDATA_UPDATE:    // ボックス情報の更新時
        boxs = JSON.parse(JSON.stringify(state));

        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].box_id == action.payload.box.box_id) {
                boxs[i].group_id = action.payload.box.group_id;
                boxs[i].group_no = action.payload.box.group_no;

                break;
            }
        }

        return boxs;

    case SAGA_TOOLBOXTEXTDATA_TEXTDATA_UPDATE:    // テキストボックスのテキスト情報の更新時
        boxs = JSON.parse(JSON.stringify(state));

        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].box_id == action.payload.box.box_id) {
                switch (boxs[i].type) {
                case 'text':
                    boxs[i].text.padding_js = action.payload.box.text.padding_js;
                    boxs[i].text.padding_je = action.payload.box.text.padding_je;
                    boxs[i].text.padding_gs = action.payload.box.text.padding_gs;
                    boxs[i].text.padding_ge = action.payload.box.text.padding_ge;
                    boxs[i].text.kumihoko   = action.payload.box.text.kumihoko;
                    boxs[i].text.gyokan     = action.payload.box.text.gyokan;
                    boxs[i].text.font       = action.payload.box.text.font;

                    // テキストグリッド
                    if (boxs[i].text.kumihoko == 'tate') {
                        areasize_j = boxs[i].y2 - boxs[i].y1;
                        areasize_g = boxs[i].x2 - boxs[i].x1;
                    } else {
                        areasize_j = boxs[i].x2 - boxs[i].x1;
                        areasize_g = boxs[i].y2 - boxs[i].y1;
                    }
                    const textgrid = TextGrid.getTextGridAry(
                        areasize_j,  // エリアサイズ（字詰め方向）
                        areasize_g,  // エリアサイズ（行送り方向）
                        boxs[i].text.padding_js,  // パディング値（字詰め方向 開始）
                        boxs[i].text.padding_je,  // パディング値（字詰め方向 終了）
                        boxs[i].text.padding_gs,  // パディング値（行送り方向 開始）
                        boxs[i].text.padding_ge,  // パディング値（行送り方向 終了）
                        boxs[i].text.size_j,  // テキストサイズ（字詰め方向）
                        boxs[i].text.size_g,  // テキストサイズ（行送り方向）
                        boxs[i].text.gyokan,  // 行間
                    );
                    boxs[i].text.grid = textgrid;

                    break;

                case 'image':
                    break;
                }

                break;
            }
        }

        return boxs;

    case SAGA_TOOLBOXBOXDATA_BOXDATA_DELETE:  // ボックスの削除時
        boxs = JSON.parse(JSON.stringify(state));

        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].box_id == action.payload.box_id) {
                boxs.splice(i, 1);
                break;
            }
        }

        return boxs;       

    case SAGA_TOOLBOXBOXDATA_BOXDATA_CREATE:  // ボックスの新規作成時
        boxs = JSON.parse(JSON.stringify(state));

        box = {
            box_id: action.payload.box.box_id,
            group_id: action.payload.box.group_id,
            group_no: action.payload.box.group_no,
            type: action.payload.box.type,
            x1: 100,
            y1: 100,
            x2: 200,
            y2: 200,
            text: {
                kumihoko: 'tate',
                padding_js: 10,
                padding_je: 10,
                padding_gs: 10,
                padding_ge: 10,
                size_j: 10,
                size_g: 10,
                gyokan: 5,
                font: 1,
            },
        };

        if (box.type == 'text') {
            // テキストグリッド
            if (box.text.kumihoko == 'tate') {
                areasize_j = box.y2 - box.y1;
                areasize_g = box.x2 - box.x1;
            } else {
                areasize_j = box.x2 - box.x1;
                areasize_g = box.y2 - box.y1;
            }
            const textgrid = TextGrid.getTextGridAry(
                areasize_j,  // エリアサイズ（字詰め方向）
                areasize_g,  // エリアサイズ（行送り方向）
                box.text.padding_js,  // パディング値（字詰め方向 開始）
                box.text.padding_je,  // パディング値（字詰め方向 終了）
                box.text.padding_gs,  // パディング値（行送り方向 開始）
                box.text.padding_ge,  // パディング値（行送り方向 終了）
                box.text.size_j,  // テキストサイズ（字詰め方向）
                box.text.size_g,  // テキストサイズ（行送り方向）
                box.text.gyokan,  // 行間
            );
            box.text.grid = textgrid;
            box.text.result = [];
            box.text.afure = 0;
        }

        // 追加する
        boxs.push(box);

        return boxs;

    case SAGA_NAGASHIRESULT_CREATE:    // テキスト流し結果の作成時
        boxs = JSON.parse(JSON.stringify(state));

        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].box_id == action.payload.box_id) {
                boxs[i].text.result = action.payload.nagashiResult;
                boxs[i].text.afure = 0;
                break;
            }
        }

        return boxs;

    case SAGA_NAGASHI_IMAGE:    // 画像の流し時
        boxs = JSON.parse(JSON.stringify(state));

        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].box_id == action.payload.box_id) {
                boxs[i].image.url = action.payload.imageUrl;
                break;
            }
        }

        return boxs;

    case SAGA_NAGASHI_REMOVE:    // 流し結果の削除時
        boxs = JSON.parse(JSON.stringify(state));

        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].group_id == action.payload.group_id) {
                switch (boxs[i].type) {
                case 'text':
                    boxs[i].text.result = [];
                    boxs[i].text.afure  = 0;
                    break;
                case 'image':
                    boxs[i].image.url = '';
                    break;
                }
            }
        }

        return boxs;

    case SAGA_NAGASHIRESULT_AFURE:    // 流した結果あふれた場合
        boxs = JSON.parse(JSON.stringify(state));

        const group_id = action.payload.group_id;

        // グループの最後のNoを得る
        const group_no_ary = Box.getGroupNoAry(boxs, group_id);
        const last_group_no = group_no_ary.pop();

        // 溢れフラグをセット
        const box_id = Box.getBoxId(boxs, group_id, last_group_no);
        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].box_id == box_id) {
                boxs[i].text.afure = action.payload.afure;
                break;
            }
        }

        return boxs;

    case SAGA_CONTEXTMENU_NEWTEXTBOX:   // テキストボックスの新規作成（グループ化なし）
        boxs = JSON.parse(JSON.stringify(state));

        box = {
            box_id:   action.payload.box_id,
            group_id: action.payload.group_id,
            group_no: action.payload.group_no,
            type:     action.payload.type,
            x1: 100,
            y1: 100,
            x2: 400,
            y2: 300,
            text: {
                kumihoko:   action.payload.text.kumihoko,
                padding_js: action.payload.text.padding_js,
                padding_je: action.payload.text.padding_je,
                padding_gs: action.payload.text.padding_gs,
                padding_ge: action.payload.text.padding_ge,
                size_j:     action.payload.text.size_j,
                size_g:     action.payload.text.size_g,
                gyokan:     action.payload.text.gyokan,
                font:       action.payload.text.font,

                grid: [],
                result: [],
                afure: 0,
            },
        };

        // テキストグリッド
        if (box.text.kumihoko == 'tate') {
            areasize_j = box.y2 - box.y1;
            areasize_g = box.x2 - box.x1;
        } else {
            areasize_j = box.x2 - box.x1;
            areasize_g = box.y2 - box.y1;
        }
        const textgrid = TextGrid.getTextGridAry(
            areasize_j,  // エリアサイズ（字詰め方向）
            areasize_g,  // エリアサイズ（行送り方向）
            box.text.padding_js,  // パディング値（字詰め方向 開始）
            box.text.padding_je,  // パディング値（字詰め方向 終了）
            box.text.padding_gs,  // パディング値（行送り方向 開始）
            box.text.padding_ge,  // パディング値（行送り方向 終了）
            box.text.size_j,  // テキストサイズ（字詰め方向）
            box.text.size_g,  // テキストサイズ（行送り方向）
            box.text.gyokan,  // 行間
        );
        box.text.grid = textgrid;
        box.text.result = [];
        box.text.afure = 0;

        boxs.push(box);

        return boxs;

    default:
        return state;
    }
}
