import { put, select, fork } from 'redux-saga/effects';

import {
    Saga_NagashiResult_Create,
    Saga_Nagashi_Image,
    Saga_NagashiResult_Afure,
} from '../actions_saga/nagashi.js';

import { Text } from '../libs/text.js';
import { Box } from '../libs/box.js';
import { Sozai } from '../libs/sozai.js';

export function* nagashiExec(group, sozai_id) {
    // ボックス情報を得る
    const boxs = yield select((state) => state.boxs);
    // 素材情報を得る
    const sozai = yield select((state) => state.sozai);

    // 指定のボックスのグループの最初のボックスレコードを得る
    const no_ary = Box.getGroupNoAry(boxs, group);
    const first_box_id = Box.getBoxId(boxs, group, no_ary[0]);
    const box = Box.getBox(boxs, first_box_id);
    const sozai_rec = Sozai.getSozai(sozai, sozai_id);

    // 最後まで流したかどうかのフラグ
    let lastNagashiFlg = false;

    switch (box.type) {
    case 'text':        // テキストボックスの場合
        let moji_index = 0;

        // グループNo配列で繰り返す
        let centerAry, end_index;
        for (let n = 0; n < no_ary.length; n++) {
            // ボックスレコードを得る
            const target_box_id = Box.getBoxId(boxs, group, no_ary[n]);
            const box_rec = Box.getBox(boxs, target_box_id);

            // エリア情報を求める
            let areasize_j, areasize_g;
            if (box_rec.text.kumihoko == 'tate') {
                areasize_j = box_rec.y2 - box_rec.y1;
                areasize_g = box_rec.x2 - box_rec.x1;
            } else {
                areasize_j = box_rec.x2 - box_rec.x1;
                areasize_g = box_rec.y2 - box_rec.y1;
            }

            // ボックスエリアにテキストを流したときの文字の中心座標配列を得る
            [centerAry, end_index] = Text.getNagashiCenterAry (
                sozai_rec.mojiObjAry,
                moji_index,
                areasize_j,
                areasize_g,
                box_rec.text.padding_js,
                box_rec.text.padding_je,
                box_rec.text.padding_gs,
                box_rec.text.padding_ge,
                box_rec.text.size_j,
                box_rec.text.size_g,
                box_rec.text.gyokan
            );

            if (end_index == -1) {
                // 1文字も流せなかった場合
                const payload = {
                    box_id: target_box_id,
                    nagashiResult: [],
                };

                yield put(Saga_NagashiResult_Create(payload));

            } else {
                // 流した結果情報配列を得る
                const nagashiResult = Text.nagashiResult(
                    centerAry,
                    sozai_rec.mojiObjAry,
                    moji_index
                );

                const payload = {
                    box_id: target_box_id,
                    nagashiResult: nagashiResult,
                };

                yield put(Saga_NagashiResult_Create(payload));

                moji_index = end_index + 1;

                if (moji_index > sozai_rec.mojiObjAry.length - 1) {
                    // 文字列の最後まで流した
                    // break;
                    lastNagashiFlg = true;
                }
            }
        }
        
        // 溢れ処理
        if (lastNagashiFlg == false) {
            // 溢れ処理
            yield put(Saga_NagashiResult_Afure({
                group: group,
                afure: sozai_rec.mojiObjAry.length - moji_index,
            }));
console.log('文字が余った（溢れ）');
        } else {
            yield put(Saga_NagashiResult_Afure({
                group: group,
                afure: 0,
            }));
console.log('最後まで流した');
        }

        break;

    case 'image':               // イメージボックスの場合
        const payload = {
            box_id: box.id,
            image:  sozai_rec.image,
        };

        yield put(Saga_Nagashi_Image(payload));

        break;
    }
}

//
// 指定のグループ名がリンクリストに含まれていれば、それを流す
//
// [IN]
//   group: グループ名
//
export function* nagashiExecGroup(group) {
    // 指定のグループ名がリンクリストに含まれていれば、対応する素材IDを得る
    const links = yield select((state) => state.links);

    let sozai_id = '';
    for (let i = 0; i < links.length; i++) {
        if (links[i].group == group) {
            sozai_id = links[i].sozai_id;
            break;
        }
    }

    if (sozai_id == '') {
        return;
    }

    yield fork(nagashiExec, group, sozai_id);
}

//
// 指定のボックスIDのグループ名がリンクリストに含まれていれば、それを流す
//
// [IN]
//   box_id: ボックスID
//
export function* nagashiExecBox(box_id) {
    // 指定のボックスのグループ名がリンクリストに含まれていれば、対応する素材IDを得る
    const boxs  = yield select((state) => state.boxs);

    const [group, no] = Box.getGroupAndNo(boxs, box_id);

    yield fork(nagashiExecGroup, group);
} 

//
// 指定の素材IDがリンクリストに含まれていれば、それを流す
//
// [IN]
//   sozai_id: 素材ID
//
export function* nagashiExecSozai(sozai_id) {
    // 指定の素材IDがリンクリストに含まれていれば、対応するグループ名を得る
    const links = yield select((state) => state.links);
    
    let group = '';
    for (let i = 0; i < links.length; i++) {
        if (links[i].sozai_id == sozai_id) {
            group = links[i].group;
            break;
        }
    }

    if (group == '') {
        return;
    }

    yield fork(nagashiExec, group, sozai_id);
} 

//
// リンクリストの内容を全て流す
//
export function* nagashiExecAll() {
    // リンクリストを得る
    const links = yield select((state) => state.links);

    for (let i = 0; i < links.length; i++) {
        yield fork(nagashiExec, links[i].group, links[i].sozai_id);
    }
}

