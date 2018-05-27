//
// 配列関連
//

export const LibArray = {
    //
    // 指定のものを配列に入れて返す
    // 同じものが存在する場合は、配列に含めない
    //
    // [IN]
    //   ary: 配列
    //   val: 値
    //
    // [OUT]
    //   ary: 配列
    //
    setArrayUnique: (ary, val) => {
        let flg = false;

        for (let i = 0; i < ary.length; i++) {
            if (ary[i] == val) {
                flg = true;
                break;
            }
        }

        if (flg == false) {
            ary.push(val);
        }

        return ary;
    },
} 