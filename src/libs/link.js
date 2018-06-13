//
// リンクリスト関連
//

export const Link = {
    //
    // 指定のグループ名がリンクされていれば、対応する素材IDを返す
    //
    getSozaiId: (links, group) => {
        let sozai_id = '';

        for (let i = 0; i < links.length; i++) {
            if (links[i].group == group) {
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
        let sozai_id = '';
        let group = '';

        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].id == box_id) {
                group = boxs[i].group;
                break;
            }
        }

        if (group != '') {
            sozai_id = Link.getSozaiId(links, group);
        }

        return sozai_id;
    },

    //
    // 指定の素材IDがリンクされていたら、対応するグループ名を返す
    //
    getGroupFromSozaiId: (links, sozai_id) => {
        let group = '';

        for (let i = 0; i < links.length; i++) {
            if (links[i].sozai_id == sozai_id) {
                group = links[i].group;
                break;
            }
        }

        return group;
    }
}
