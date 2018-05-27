import { __esModule } from "react-redux/lib/components/connectAdvanced";

//
// ボックス関連
//

export const Box = {
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
    // ボックスIDから、そのボックスグループの先頭NoのボックスIDを返す
    //
    // [IN]
    //   boxs: ボックス情報
    //   id: ボックスID
    //
    // [OUT]
    //   id: ボックスID
    //
    getFirstBoxId: (boxs, id) => {
        let [group, no] = Box.getGroupAndNo(boxs, id);
        let ary = Box.getGroupNoAry(boxs, group);

        ary.sort((a, b) => a - b);

        let ret_id = Box.getBoxId(boxs, group, ary[0]);

        return ret_id;
    },

    //
    // 指定グループの指定番目になるボックスのIDを返す
    //
    // [IN]
    //   boxs: ボックス情報
    //   group: グループ名
    //   n: 何番目か 0〜
    //
    // [OUT]
    //   id: ボックスID
    //   -1: ボックスがない
    //
    getGroupBoxId: (boxs, group, n) => {
        let ary = Box.getGroupNoAry(boxs, group);
        
        if (n + 1 > ary.length) {
            return -1;
        }

        return Box.getBoxId(boxs, group, ary[n]);
    },
}