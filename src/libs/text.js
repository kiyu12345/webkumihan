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
    //   areasize_j: エリアの字詰方向の長さ
    //   padding_s: 字詰方向エリアの開始パディング値
    //   padding_e: 字詰方向エリアの終了パディング値
    //   defaultSize: テキストデフォルトサイズ（字詰方向）
    //
    // [OUT]
    //   [ index, normalgyo ]
    //   index: 何文字目まで入るかのインデックス  -1:1文字も入らない
    //   normalgyo: 0:通常の行（行末揃えさせる行）
    //              1:文の途中で改行された行または最終行（行末揃えさせなくていい行）
    //
    getJidumeMojiNagashiIndex: (
        mojiObjAry,
        start,
        areasize_j,
        padding_s,
        padding_e,
        defaultSize,
    ) => {
        let pointer = 0;
        let size;

        pointer += padding_s;

        let i;
        let index;
        let normalgyo = 0;

        for (i = start; i < mojiObjAry.length; i++) {
            // 字詰め方向の文字サイズが 0 の場合は、デフォルトサイズ
            if (mojiObjAry[i].size_j == 0) {
                size = defaultSize;
            } else {
                size = mojiObjAry[i].size_j;
            }

            if ((pointer + size) > (areasize_j - padding_e)) {
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
                normalgyo = 0;    // 通常の行（行末揃えさせる行）
                break;
            }

            // 改行文字の場合は、改行文字までで終わり
            if (mojiObjAry[i].moji == "\n") {
                i++;
                normalgyo = 1;   // 文の途中で改行された行（行末揃えさせなくていい行）
                break;
            }

            pointer += size;
        }

        if (i == start) {
            index = -1;
        } else {
            if (i >= mojiObjAry.length) {
                normalgyo = 1;   // 最終行（行末揃えさせなくていい行）
            }
            index = i - 1;
        }

        return [index, normalgyo];
    },

    //
    // 指定エリア（字詰方向）の範囲に、指定の文字オブジェクト配列のデータを流した場合、
    // 文字の中心の座標（字詰方向）の配列を返す
    // ※ 通常行（行の途中で改行していない行、または最終行でない行）の場合に使用する
    //
    // [IN]
    //   mojiObjAry: 文字オブジェクト配列（１つの素材全体のもの）
    //   index_s: 開始インデックス
    //   index_e: 終了インデックス
    //   areasize_j: エリアの字詰方向の長さ
    //   padding_s: 字詰方向エリアの開始パディング値
    //   padding_e: 字詰方向エリアの終了パディング値
    //   defaultSize: テキストデフォルトサイズ（字詰方向）
    //
    // [OUT]
    //   文字の中心座標（字詰め方向のみ）の配列
    //
    getJidumeAry: (
        mojiObjAry,
        index_s,
        index_e,
        areasize_j,
        padding_s,
        padding_e,
        defaultSize
    ) => {
        // エリアの長さ（パディングを除いたもの）を求める
        const areasize = areasize_j - (padding_s + padding_e);

        // 文字数を求める
        let mojisu = 0;
        for (let i = index_s; i <= index_e; i++) {
            if (mojiObjAry[i].moji != "\n") {
                mojisu++;
            }
        }

        // 文字列全体を足した長さを求める
        let mojilen = 0;
        let size;
        for (let i = index_s; i <= index_e; i++) {
            if (mojiObjAry[i].size_j == 0) {
                size = defaultSize;
            } else {
                size = mojiObjAry[i].size_j;
            }

            if (mojiObjAry[i].moji != "\n") {
                mojilen += size;
            }
        }

        // 文字間スペースを求める
        const amari = areasize - mojilen;
        const margin = amari / (mojisu - 1);

        // 中心座標（字詰方向のみ）配列を作成する
        let centerAry = [];
        let pointer = 0;
        pointer += padding_s;
        for (let i = index_s; i <= index_e; i++) {
            if (mojiObjAry[i].moji == "\n") {
                centerAry.push(0);
                continue;
            }
            
            if (mojiObjAry[i].size_j == 0) {
                size = defaultSize;
            } else {
                size = mojiObjAry[i].size_j;
            }

            centerAry.push(pointer + (size / 2));

            pointer += size;
            pointer += margin;
        }

        return centerAry;        
    },

    //
    // 指定エリア（字詰方向）の範囲に、指定の文字オブジェクト配列のデータを流した場合、
    // 文字の中心の座標（字詰方向）の配列を返す
    // ※ 文の途中で改行している行、または最終行の場合に使用する
    //
    // [IN]
    //   mojiObjAry: 文字オブジェクト配列（流すもののみの配列）
    //   index_s: 開始インデックス
    //   index_e: 終了インデックス
    //   padding_s: 字詰方向エリアの開始パディング値
    //   defaultSize: テキストデフォルトサイズ（字詰方向）
    //
    // [OUT]
    //   文字の中心座標（字詰方向のみ）の配列
    //
    getJidumeArySoroeNashi: (
        mojiObjAry,
        index_s,
        index_e,
        padding_s,
        defaultSize
    ) => {
        // 文字数を求める
        let mojisu = 0;
        for (let i = index_s; i <= index_e; i++) {
            if (mojiObjAry[i].moji != "\n") {
               mojisu++;
            }
        }

        // 中心座標（字詰方向のみ）配列を作成する
        let centerAry = [];
        let pointer = 0;
        pointer += padding_s;
        for (let i = index_s; i <= index_e; i++) {
            if (mojiObjAry[i].moji == "\n") {
                centerAry.push(0);
                continue;
            }
           
            let size;
            if (mojiObjAry[i].size_j == 0) {
                size = defaultSize;
            } else {
                size = mojiObjAry[i].size_j;
            }

            centerAry.push(pointer + (size / 2));

            pointer += size;
        }

        return centerAry;        
    },
    
    //
    // 文字オブジェクト配列において、残り全行の開始インデックス・終了インデックス
    // のオブジェクト配列を返す
    //
    // [IN]
    //   mojiObjAry: 文字オブジェクト配列（１つの素材全体のもの）
    //   start: 開始インデックス
    //   areasize_j: エリアの字詰方向の長さ
    //   padding_s: 字詰方向エリアの開始パディング値
    //   padding_e: 字詰方向エリアの終了パディング値
    //   defaultSize: テキストデフォルトサイズ（字詰方向）
    //
    // [OUT]
    //   全行の開始インデックス・終了インデックスのオブジェクト配列
    //   [
    //       {
    //           s: 開始インデックス
    //           e: 終了インデックス
    //           normalgyo: 0:通常行（行末揃えする行） 1:行末揃えさせなくていい行
    //       },
    //       ....
    //   ]
    //
    getZenGyoIndexAry: (
        mojiObjAry,
        start,
        areasize_j,
        padding_s,
        padding_e,
        defaultSize
    ) => {
        let indexAry = [];
        let indexObj = {};

        if (mojiObjAry.length <= 0) {
            return indexAry;
        }

        while (1) {
            // 一行文のインデックス値を得る
            let [end, normalgyo] = Text.getJidumeMojiNagashiIndex(
                mojiObjAry,
                start,
                areasize_j,
                padding_s,
                padding_e,
                defaultSize
            );

            // 1文字も入らなかった場合は抜ける
            if (end == -1) {
                break;
            }

            indexObj = {
                s: start,
                e: end,
                normalgyo: normalgyo,
            };
            indexAry.push(indexObj);

            // 終了インデックスが最後の文字なら抜ける
            if (end >= mojiObjAry.length - 1) {
                break;
            }

            start = end + 1;
        }

        return indexAry;
    },

    //
    // 指定の開始インデックスから終了インデックスまでの文字列の行送方向の最大幅を返す
    //
    // [IN]
    //   mojiObjAry: 文字オブジェクト配列（１つの素材全体のもの）
    //   index_s: 開始インデックス
    //   index_e: 終了インデックス
    //   defaultSize: デフォルトの行送方向サイズ
    //
    // [OUT]
    //   最大幅
    //
    maxSizeGyoOkuri: (
        mojiObjAry,
        index_s,
        index_e,
        defaultSize
    ) => {
        let max = 0;
        let size;

        for (let i = index_s; i <= index_e; i++) {
            if (mojiObjAry[i].size_g == 0) {
                size = defaultSize;
            } else {
                size = mojiObjAry[i].size_g;
            }

            if (max < size) {
                max = size;
            }
        }

        return max;
    },

    //
    // 指定エリア（行送方向）の範囲に、指定の文字オブジェクト配列のデータを流した場合、
    // 文字の中心の座標（行送方向）の配列を返す
    //
    // [IN]
    //   mojiObjAry: 文字オブジェクト配列（１つの素材全体のもの）
    //   start: 開始インデックス
    //   areasize_j: エリアの字詰方向の長さ
    //   areasize_g: エリアの行送方向の長さ
    //   padding_js: 字詰方向エリアの開始パディング値
    //   padding_je: 字詰方向エリアの終了パディング値
    //   padding_gs: 行送方向エリアの開始パディング値
    //   padding_ge: 行送方向エリアの終了パディング値
    //   defaultSize: デフォルト文字サイズ（行送方向）
    //   gyokan: 行間サイズ
    //
    // [OUT]
    //   文字の中心座標（行送方向のみ）の配列
    //
    getGyookuriAry: (
        mojiObjAry,
        start,
        areasize_j,
        areasize_g,
        padding_js,
        padding_je,
        padding_gs,
        padding_ge,
        defaultSize,
        gyokan
    ) => {
        let centerAry = [];
        let max_width = 0;

        // 流した場合の行単位インデックス配列を取得する
        const gyoIndexAry = Text.getZenGyoIndexAry(
            mojiObjAry,
            start,
            areasize_j,
            padding_js,
            padding_je,
            defaultSize
        );

        let pointer = 0;
        pointer += padding_gs;
        for (let i = 0; i < gyoIndexAry.length; i++) {
            // 行の最大幅を得る
            max_width = Text.maxSizeGyoOkuri(
                mojiObjAry,
                gyoIndexAry[i].s,
                gyoIndexAry[i].e,
                defaultSize
            );

            if ((pointer + max_width) > (areasize_g - padding_ge)) {
                break;
            }

            centerAry.push(pointer + (max_width / 2));

            pointer += max_width;
            pointer += gyokan;
        }

        return centerAry;
    },

    //
    // 指定エリアに文字列を流した際の中心座標 [字詰め方向座標, 行送り方向座標] の配列を返す
    //
    // [IN]
    //   mojiObjAry: 文字オブジェクト配列（１つの素材全体のもの）
    //   start: 開始インデックス
    //   areasize_j: 字詰方向のエリアサイズ
    //   areasize_g: 行送方向のエリアサイズ
    //   padding_js: 字詰方向の開始パディング値
    //   padding_je: 字詰方向の終了パディング値
    //   padding_gs: 行送方向の開始パディング値
    //   padding_ge: 行送方向の終了パディング値
    //   size_j: デフォルト文字サイズ（字詰め方向）
    //   size_g: デフォルト文字サイズ（行送り方向）
    //   gyokan: 行間サイズ 
    //
    // [OUT]
    //   [ 中心座標配列, 終了インデックス ]
    //   
    //       中心座標配列：
    //         [
    //             [字詰め方向座標, 行送り方向座標],   <---- 文字の中心座標
    //             [字詰め方向座標, 行送り方向座標],
    //             ....
    //         ] 
    //       終了インデックス：
    //         -1: 1文字も流せなかった  
    //
    getNagashiCenterAry: (
        mojiObjAry,
        start,
        areasize_j,
        areasize_g,
        padding_js,
        padding_je,
        padding_gs,
        padding_ge,
        size_j,
        size_g,
        gyokan
    ) => {
        let centerAry = [];

        // 当エリアに文字列を流した場合の行単位インデックス情報を得る
        const zenGyoIndexAry = Text.getZenGyoIndexAry(
            mojiObjAry,
            start,
            areasize_j,
            padding_js,
            padding_je,
            size_j,
        );

        // 文字の中心の座標（行送方向）の配列を得る
        const gyookuriAry = Text.getGyookuriAry(
            mojiObjAry,
            start,
            areasize_j,
            areasize_g,
            padding_js,
            padding_je,
            padding_gs,
            padding_ge,
            size_g,
            gyokan
        );

        let jidumeAry;

        let g, j;
        for (g = 0; g < gyookuriAry.length; g++) {
            if (zenGyoIndexAry[g].normalgyo == 0) {
                jidumeAry = Text.getJidumeAry(
                    mojiObjAry,
                    zenGyoIndexAry[g].s,
                    zenGyoIndexAry[g].e,
                    areasize_j,
                    padding_js,
                    padding_je,
                    size_j
                );
            } else {
                jidumeAry = Text.getJidumeArySoroeNashi(
                    mojiObjAry,
                    zenGyoIndexAry[g].s,
                    zenGyoIndexAry[g].e,
                    padding_js,
                    size_j
                );
            }

            for (j = 0; j < jidumeAry.length; j++) {
                centerAry.push([jidumeAry[j], gyookuriAry[g]]);
            }
        }

        // 終了インデックスを得る
        let end_index;
        if (g <= 0) {
            end_index = -1;
        } else {
            end_index = zenGyoIndexAry[g - 1].e;
        }

        return [centerAry, end_index];
    }
}
