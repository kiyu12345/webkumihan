//
// 素材関連
//

export const Sozai = {
    //
    // 素材IDから、素材レコードを返す
    //
    // [IN]
    //   sozai: 素材情報
    //   sozai_id: 素材ID
    //
    // [OUT]
    //   rec: 素材レコード
    //
    getSozai: (sozai, sozai_id) => {
        let sozai_rec = '';

        for (let i = 0; i < sozai.length; i++) {
            if (sozai[i].sozai_id == sozai_id) {
                sozai_rec = sozai[i];
                break;
            }
        }

        return sozai_rec;
    },
}