//
// ボックス関連
//

export const Box = {
    //
    // ボックスIDから、ボックスレコードを返す
    //
    // [IN]
    //   boxs: ボックス情報
    //   id: ボックスID
    //
    // [OUT]
    //   rec: ボックスレコード
    //
    getBox: (boxs, id) => {
        let box = '';

        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].id == id) {
                box = boxs[i];
                break;
            }
        }

        return box;
    },

    //
    // ボックスIDから、グループ名とNoを返す
    //
    // [IN]
    //   boxs: ボックス情報
    //   id: ボックスID
    //
    // [OUT]
    //   [group, no]
    //
    getGroupAndNo: (boxs, id) => {
        let group = '';
        let no = -1;

        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].id == id) {
                group = boxs[i].group;
                no = boxs[i].no;
                break;
            }
        }

        return [group, no]
    },

    //
    // グループ名から、グループNoの一覧（配列）を返す
    //
    // [IN]
    //   boxs: ボックス情報
    //   group: グループ名
    //
    // [OUT]
    //   [ no, no, no, ... ]  <--- グループNoの配列
    //
    getGroupNoAry: (boxs, group) => {
        let ary = [];

        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].group == group) {
                ary.push(boxs[i].no);
            }
        }

        ary.sort((a, b) => a - b);

        return ary;
    },

    //
    // グループ名とグループNoから、ボックスIDを返す
    //
    // [IN]
    //   boxs: ボックス情報
    //   group: グループ名
    //   no: グループNo
    //
    // [OUT]
    //   id: ボックスID
    //
    getBoxId: (boxs, group, no) => {
        let id = '';

        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].group == group && boxs[i].no == no) {
                id = boxs[i].id;
                break;
            }
        }

        return id;
    },

    getLinkGroup: (boxs, links, sozai_id) => {
        let group = '';
        let no;

        let box_id = '';
        for (let i = 0; i < links.length; i++) {
            if (links[i].sozai_id == sozai_id) {
                box_id = links[i].box_id;
                break;
            }
        }

        if (box_id != '') {
            [group, no] = Box.getGroupAndNo(boxs, box_id);
        }

        return group;
    }
}