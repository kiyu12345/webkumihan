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
    //   box_id: ボックスID
    //
    // [OUT]
    //   rec: ボックスレコード
    //
    getBox: (boxs, box_id) => {
        let box = '';

        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].box_id == box_id) {
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
    //   box_id: ボックスID
    //
    // [OUT]
    //   [group, no]
    //
    getGroupAndNo: (boxs, box_id) => {
        let group_id = 0;
        let group_no = 0;

        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].box_id == box_id) {
                group_id = boxs[i].group_id;
                group_no = boxs[i].group_no;
                break;
            }
        }

        return [group_id, group_no]
    },

    //
    // ボックスリストの全グループのグループID配列を返す
    //
    // [IN]
    //   boxs: ボックス情報
    //
    // [OUT]
    //   [group_id, group_id, group_id, ...]  <--- グループIDの配列
    //
    getGroupAry: (boxs) => {
        let ary = [];

        for (let i = 0; i < boxs.length; i++) {
            ary = LibArray.setArrayUnique(ary, boxs[i].group_id);
        }

        ary.sort((a, b) => a - b);

        return ary;
    },

    //
    // グループIDから、グループNoの一覧（配列）を返す
    //
    // [IN]
    //   boxs: ボックス情報
    //   group_id: グループID
    //
    // [OUT]
    //   [ group_no, group_no, group_no, ... ]  <--- グループNoの配列
    //
    getGroupNoAry: (boxs, group_id) => {
        let ary = [];

        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].group_id == group_id) {
                ary.push(boxs[i].group_no);
            }
        }

        ary.sort((a, b) => a - b);

        return ary;
    },

    //
    // グループIDとグループNoから、ボックスIDを返す
    //
    // [IN]
    //   boxs: ボックス情報
    //   group_id: グループ名
    //   group_no: グループNo
    //
    // [OUT]
    //   box_id: ボックスID
    //
    getBoxId: (boxs, group_id, group_no) => {
        let box_id = '';

        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].group_id == group_id && boxs[i].group_no == group_no) {
                box_id = boxs[i].box_id;
                break;
            }
        }

        return box_id;
    },

    //
    // 素材IDとリンクされているボックスグループIDを返す
    //
    // [IN]
    //   boxs: ボックス情報
    //   links: リンク情報
    //   sozai_id: 素材ID
    //
    // [OUT]
    //   group_id: グループID
    //
    getLinkGroup: (boxs, links, sozai_id) => {
        let group_id = 0;

        for (let i = 0; i < links.length; i++) {
            if (links[i].sozai_id == sozai_id) {
                group_id = links[i].group_id;
                break;
            }
        }

        return group_id;
    },

    //
    // 新規ボックスを作成する場合のボックスIDを返す
    //
    // [IN]
    //   boxs: ボックス情報
    //
    // [OUT]
    //   box_id: 新規ボックスのボックスID
    //
    getNewBoxId: (boxs) => {
        let box_id = 0;

        for (let i = 0; i < boxs.length; i++) {
            if (boxs[i].box_id > box_id) {
                box_id = boxs[i].box_id;
            }
        }

        return box_id + 1;
    },

    //
    // 新規ボックスを作成する場合の新規グループIDを返す
    //
    // [IN]
    //   boxs: ボックス情報
    //
    // [OUT]
    //   group_id: 新規ボックスのグループID
    //
    getNewGroupId: (boxs) => {
        const prefix = 'group';
        let name;

        for (let num = 1; num < 999; num++) {
            name = prefix + numTo000(num);

            let check = false;
            for (let i = 0; i < boxs.length; i++) {
                if (boxs[i].group_id == name) {
                    check = true;
                    break;
                }
            }
            if (check == false) {
                break;
            }
        }

        function numTo000(num) {
            let ret;
            let numstr = num.toString(10);

            if (numstr.length == 1) {
                ret = '00' + numstr;
            } else if (numstr.length == 2) {
                ret = '0' + numstr;
            } else {
                ret = numstr;
            }

            return ret;
        }

        return name;
    },

    //
    // ボックスのタイプと素材のタイプが同じかどうかを返す
    //
    // [IN]
    //   box_type: ボックスのタイプ
    //   sozai_type: 素材のタイプ
    //
    // [OUT]
    //   true:  同じ
    //   false: 違う
    //
    isSameBoxTypeAndSozaiType: (box_type, sozai_type) => {
        let check = false;

        switch (box_type) {
        case 'text':
            switch (sozai_type) {
            case 'text':
                check = true;
                break;
            }
            break;
        
        case 'image':
            switch (sozai_type) {
            case 'image':
                check = true;
                break;
            }
            break;
        
        case 'title':
            switch (sozai_type) {
            case 'text':
                check = true;
                break;
            }
            break;
        }

        return check;
    },
}