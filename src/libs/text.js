//
// テキスト系
//

export const Text = {
    //
    // 指定の文字列から、編集に使用する文字オブジェクト配列を作成して返す
    //
    // [IN]
    //   str: 文字列（素材）
    // [OUT]
    //   文字オブジェクト配列
    //   [
    //      {
    //          moji: 'あ'    テキスト1文字
    //          size_j: 字詰方向のサイズ（0 はデフォルト文字サイズを使用するという意味）
    //          size_g: 行送方向のサイズ（0 はデフォルト文字サイズを使用するという意味）
    //          font: フォント番号（0 はデフォルトフォントを使用するという意味）
    //      },
    //      .....
    //   ]
    //
    createMojiObjAry: (str) => {
        let mojiobjary = [];
        let mojiobj;

        for (let i = 0; i < str.length; i++) {
            mojiobj = {
                moji: str.substr(i, 1),
                size_j: 0,
                size_g: 0,
                font: 0,
            };

            mojiobjary.push(mojiobj);
        }

        return mojiobjary; 
    },


    //
    // 指定エリア（字詰方向）の範囲に、指定の文字オブジェクト配列のデータを流した場合、
    // 何文字目まで入るかのインデックスを返す
    //
    // [IN]
    //   mojiObjAry: 文字オブジェクト配列（１つの素材全体のもの）
    //   start: 文字オブジェクト配列の何番目の文字から流すことにするのか
    //   len: エリアの字詰め方向の長さ
    //   padding_s: 字詰め方向エリアの開始パディング値
    //   padding_e: 字詰め方向エリアの終了パディング値
    //   defaultSize: テキストデフォルトサイズ（字詰め方向）
    //
    // [OUT]
    //   何文字目まで入るかのインデックス
    //   -1: 1文字も入らない
    //
    getJidumeMojiNagashiIndex: (
        mojiObjAry,
        start,
        len,
        padding_s,
        padding_e,
        defaultSize,
    ) => {
        let pointer = 0;
        let size;

        pointer += padding_s;

        let i;
        let index;

        for (i = start; i < mojiObjAry.length; i++) {
            // 字詰め方向の文字サイズが 0 の場合は、デフォルトサイズ
            if (mojiObjAry[i].size_j == 0) {
                size = defaultSize;
            } else {
                size = mojiObjAry[i].size_j;
            }

            if ((pointer + size) > (len - padding_e)) {
                // はみ出した文字が改行の場合は、改行も含める
                // 但し、改行文字が先頭だった場合（1文字も入らないエリアだった場合）
                // は、改行文字を含めない
                if (mojiObjAry[i].moji == "\n") {
                    if (i == start) {
                        // 改行が先頭の場合
                    } else {
                        // 改行が先頭でない場合
                        i++;
                    }
                }
                break;
            }

            // 改行文字の場合は、改行文字までで終わり
            if (mojiObjAry[i].moji == "\n") {
                i++;
                break;
            }

            pointer += size;
        }

        if (i == start) {
            index = -1;
        } else {
            index = i - 1;
        }

        return index;
    },

    //
    // 指定エリア（字詰方向）の範囲に、指定の文字オブジェクト配列のデータを流した場合、
    // 文字の中心の座標（字詰方向）の配列を返す
    //
    // [IN]
    //   mojiObjAry: 文字オブジェクト配列（流すもののみの配列）
    //   len: エリアの字詰め方向の長さ
    //   padding_s: 字詰め方向エリアの開始パディング値
    //   padding_e: 字詰め方向エリアの終了パディング値
    //   defaultSize: テキストデフォルトサイズ（字詰め方向）
    //
    // [OUT]
    //   文字の中心座標（字詰め方向のみ）の配列
    //
    getJidumeAry: (
        mojiObjAry,
        len,
        padding_s,
        padding_e,
        defaultSize
    ) => {
        // エリアの長さ（パディングを除いたもの）を求める
        const areasize = len - (padding_s + padding_e);

        // 文字数を求める
        let mojisu = 0;
        for (let i = 0; i < mojiObjAry.length; i++) {
            if (mojiObjAry[i].moji != "\n") {
                mojisu++;
            }
        }

        // 文字列全体を足した長さを求める
        let mojilen = 0;
        for (let i = 0; i < mojiObjAry.length; i++) {
            if (mojiObjAry[i].moji != "\n") {
                mojilen += mojiObjAry[i].size_j;
            }
        }

        // 文字間スペースを求める
        const amari = areasize - mojilen;
        const margin = amari / (mojisu - 1);

        // 中心座標（字詰方向のみ）配列を作成する
        let centerAry = [];
        let pointer = 0;
        pointer += padding_s;
        for (let i = 0; i < mojiObjAry.length; i++) {
            if (mojiObjAry[i].moji == "\n") {
                centerAry.push(0);
                continue;
            }

            centerAry.push(pointer + (mojiObjAry[i].size_j / 2));

            pointer += mojiObjAry[i].size_j;
            pointer += margin;
        }

        return centerAry;        
    },

    
}