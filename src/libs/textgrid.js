//
// テキストグリッド系
//

export const TextGrid = {
    //
    // テキストグリッドの中心座標 [字詰め方向座標, 行送り方向座標] の配列を返す
    //
    // [IN]
    //   areasize_j: 字詰め方向のエリアサイズ
    //   areasize_g: 行送り方向のエリアサイズ
    //   padding_js: 字詰め方向の開始パディング値
    //   padding_je: 字詰め方向の終了パディング値
    //   padding_gs: 行送り方向の開始パディング値
    //   padding_ge: 行送り方向の終了パディング値
    //   size_j: テキストグリッドサイズ（字詰め方向）
    //   size_g: テキストグリッドサイズ（行送り方向）
    //   gyokan: 行間サイズ 
    // [OUT]
    //   [
    //       [字詰め方向座標, 行送り方向座標],    <--- グリッドの中心座標
    //       [字詰め方向座標, 行送り方向座標],
    //       ....
    //   ]    
    //
    getTextGridAry: (areasize_j,
                     areasize_g,
                     padding_js,
                     padding_je,
                     padding_gs,
                     padding_ge,
                     size_j,
                     size_g,
                     gyokan) => {
        let gridary = [];

        // 行送り方向の文字グリッド座標配列を得る
        const gyookuriAry = TextGrid.getGyookuriGridAry(
            areasize_g, padding_gs, padding_ge, gyokan, size_g
        );

        // 字詰め方向の文字グリッド座標配列を得る
        const jidumeAry = TextGrid.getJidumeGridAry(
            areasize_j, padding_js, padding_je, size_j
        );

        // 文字グリッドの中心座標配列を作成する
        for (let g = 0; g < gyookuriAry.length; g++) {
            for (let j = 0; j < jidumeAry.length; j++) {
                gridary.push([jidumeAry[j], gyookuriAry[g]]);
            }
        }

        return gridary;
    },

    //
    // テキストグリッドの中心座標の配列を返す（字詰め方向）
    //
    // [IN]
    //   len: エリアの字詰め方向の長さ
    //   padding_s: 字詰め方向エリアの開始パディング値
    //   padding_e: 字詰め方向エリアの終了パディング値
    //   size: テキストサイズ（字詰め方向）
    //
    // [OUT]
    //   テキストグリッドの中心座標（字詰め方向のみ）の配列
    //
    getJidumeGridAry: (len, padding_s, padding_e, size) => {
        const areasize = len - (padding_s + padding_e);
        const gridsu = Math.floor(areasize / size);
        const amari = areasize % size;
        const margin = amari / (gridsu - 1);

        let gridary = [];
        let pointer = 0;
        pointer += padding_s;
        for (let i = 0; i < gridsu; i++) {
            gridary.push(pointer + (size / 2));

            pointer += size;
            pointer += margin;
        }

        return gridary;
    },

    //
    // テキストグリッドの中心座標の配列を返す（行送り方向）
    //
    // [IN]
    //   len: エリアの行送り方向の長さ
    //   padding_s: 行送り方向エリアの開始パディング値
    //   padding_e: 行送り方向エリアの終了パディング値
    //   gyokan: 行間サイズ
    //   size: テキストサイズ（行送り方向）
    //
    // [OUT]
    //   テキストグリッドの中心座標（行送り方向のみ）の配列
    //
    getGyookuriGridAry: (len, padding_s, padding_e, gyokan, size) => {    
        let gridary = [];
        let pointer = 0;
        pointer += padding_s;
        while (1) {
            if ((pointer + size) > (len - padding_e)) {
                break;
            }

            gridary.push(pointer + (size / 2));

            pointer += (size + gyokan);
        }

        return gridary;
    },
};
