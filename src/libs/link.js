//
// リンクリスト関連
//

export const Link = {
    //
    // 指定のグループIDがリンクされていれば、対応する素材IDを返す
    //
    getSozaiId: (links, group_id) => {
        let sozai_id = '';

        for (let i = 0; i < links.length; i++) {
            if (links[i].group_id == group_id) {
                sozai_id = links[i].sozai_id;
                break;
            }
        }

        return sozai_id;
    },

    //
    // 指定のボックスIDのボックスのグループがリンクされていれば、対応する素材IDを返す
    //
    getSozaiIdFromBoxId: (links, boxs, box_id) => {
        let sozai_id = 0;
        let group_id = 0;

        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].box_id == box_id) {
                group_id = boxs[i].group_id;
                break;
            }
        }

        if (group_id != 0) {
            sozai_id = Link.getSozaiId(links, group_id);
        }

        return sozai_id;
    },

    //
    // 指定の素材IDがリンクされていたら、対応するグループ名を返す
    //
    getGroupFromSozaiId: (links, sozai_id) => {
        let group_id = 0;

        for (let i = 0; i < links.length; i++) {
            if (links[i].sozai_id == sozai_id) {
                group_id = links[i].group_id;
                break;
            }
        }

        return group_id;
    }
}
