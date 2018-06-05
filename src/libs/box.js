import { LibArray } from "./array";

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
    // ボックスリストの全グループのグループ名配列を返す
    //
    // [IN]
    //   boxs: ボックス情報
    //
    // [OUT]
    //   [group, group, group, ...]  <--- グループ名の配列
    //
    getGroupAry: (boxs) => {
        let ary = [];

        for (let i = 0; i < boxs.length; i++) {
            ary = LibArray.setArrayUnique(ary, boxs[i].group);
        }

        return ary;
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

    //
    // 素材IDとリンクされているボックスグループ名を返す
    //
    // [IN]
    //   boxs: ボックス情報
    //   links: リンク情報
    //   sozai_id: 素材ID
    //
    // [OUT]
    //   group: グループ名
    //
    getLinkGroup: (boxs, links, sozai_id) => {
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