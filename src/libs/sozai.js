//
// 素材関連
//

export const Sozai = {
    //
    // 素材IDから、素材レコードを返す
    //
    // [IN]
    //   sozai: 素材情報
    //   id: 素材ID
    //
    // [OUT]
    //   rec: 素材レコード
    //
    getSozai: (sozai, id) => {
        let sozai_rec = '';

        for (let i = 0; i < sozai.length; i++) {
            if (sozai[i].id == id) {
                sozai_rec = sozai[i];
                break;
            }
        }

        return sozai_rec;
    },
}