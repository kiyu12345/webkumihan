//
// 文字グリッド系
//

export const MojiGrid = {
    //
    // 文字グリッドの中心座標の配列を返す
    //
    // [IN]
    //   len: エリアの字詰め方向の長さ
    //   padding: 字詰め方向のパディング値
    //   gridsize: 文字グリッドサイズ（字詰め方向）
    // [OUT]
    //   文字グリッドの中心座標（字詰め方向のみ）の配列
    //
    getJidumeGridAry: (len, padding, gridsize) => {
        const areasize = len - (padding * 2);
        const gridsu = Math.floor(areasize / gridsize);
        const amari = areasize % gridsize;
        const margin = amari / (gridsu - 1);

        let gridary = [];
        let pointer = 0;
        pointer += padding;
        for (let i = 0; i < gridsu; i++) {
            gridary.push(pointer + (gridsize / 2));

            pointer += gridsize;
            pointer += margin;
        }

        return gridary;
    }
}