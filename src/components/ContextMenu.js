import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { Define } from '../define.js';
import { Zahyo, Cursor } from '../libs/zahyo.js';
import { Event } from '../libs/event.js';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '300px',
        padding: '10px',
        backgroundColor: '#fefefe',
        border: '1px solid lightgray',
        boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.4)',
        color: '#555',
        fontSize: '12px',
    },
    item: {
        padding: '5px',
        ':hover': {
            backgroundColor: '#ddd',
            cursor: 'pointer',
        },
    },
    grayout: {
        padding: '5px',
        color: 'lightgray',
        cursor: 'default',
    },
});

export default class ContextMenu extends React.Component {
    constructor(props) {
        super(props);

        this.clickDocument = this.clickDocument.bind(this);
        this.clickBase     = this.clickBase.bind(this);
        this.clickNewBoxText = this.clickNewBoxText.bind(this);
        this.clickNewBoxImage = this.clickNewBoxImage.bind(this);
        this.clickCopyBoxOnGroup = this.clickCopyBoxOnGroup.bind(this);
        this.clickCopyBox = this.clickCopyBox.bind(this);
        this.clickSozaiUnlink = this.clickSozaiUnlink.bind(this);
        this.clickBoxRemove = this.clickBoxRemove.bind(this);
    }

    componentDidMount() {
        this.addEvent();
    }

    componentWillUnmount() {
        this.removeEvent();
    }

    addEvent() {
        let elem;

        // document の mousedown and click
        elem = document;
        elem.addEventListener('click',     this.clickDocument, false);
        elem.addEventListener('mousedown', this.clickDocument, false);

        // コンテキストメニューのベース部分の mousedown and click
        elem = document.getElementById('contextmenu');
        elem.addEventListener('click',     this.clickBase, false);
        elem.addEventListener('mousedown', this.clickBase, false);

        // 新規作成（テキストボックス）の mousedown
        elem = document.getElementById('cm_newboxtext');
        if (elem) {
            elem.addEventListener('mousedown', this.clickNewBoxText, false);
        }

        // 新規作成（画像ボックス）の mousedown
        elem = document.getElementById('cm_newboximage');
        if (elem) {
            elem.addEventListener('mousedown', this.clickNewBoxImage, false);
        }

        // ボックスを複製（グループ化する）の mousedown
        elem = document.getElementById('cm_copyboxongroup');
        if (elem) {
            elem.addEventListener('mousedown', this.clickCopyBoxOnGroup, false);
        }

        // ボックスを複製 の mousedown
        elem = document.getElementById('cm_copybox');
        if (elem) {
            elem.addEventListener('mousedown', this.clickCopyBox, false);
        }

        // 素材をはずす
        elem = document.getElementById('cm_sozaiunlink');
        if (elem) {
            elem.addEventListener('mousedown', this.clickSozaiUnlink, false);
        }

        // ボックスを削除
        elem = document.getElementById('cm_boxremove');
        if (elem) {
            elem.addEventListener('mousedown', this.clickBoxRemove, false);
        }

        // 最前面へ の mousedown
        elem = document.getElementById('cm_tofront');
        if (elem) {
            elem.addEventListener('mousedown', this.clickToFront, false);
        }

        // 最背面へ の mousedown
        elem = document.getElementById('cm_toback');
        if (elem) {
            elem.addEventListener('mousedown', this.clickToBack, false);
        }
    }
    
    removeEvent() {
console.log('***** remove Event *****');
        let elem;

        // document の mousedown and click
        elem = document;
        elem.removeEventListener('click',     this.clickDocument);
        elem.removeEventListener('mousedown', this.clickDocument);

        // コンテキストメニューのベース部分の mousedown and click
        elem = document.getElementById('contextmenu');
        elem.removeEventListener('click',     this.clickBase);
        elem.removeEventListener('mousedown', this.clickBase);

        // 新規作成（テキストボックス）の mousedown
        elem = document.getElementById('cm_newboxtext');
        if (elem) {
            elem.removeEventListener('mousedown', this.clickNewBoxText);
        }

        // 新規作成（画像ボックス）の mousedown
        elem = document.getElementById('cm_newboximage');
        if (elem) {
            elem.removeEventListener('mousedown', this.clickNewBoxImage);
        }

        // ボックスを複製（グループ化する）の mousedown
        elem = document.getElementById('cm_copyboxongroup');
        if (elem) {
            elem.removeEventListener('mousedown', this.clickCopyBoxOnGroup);
        }

        // ボックスを複製 の mousedown
        elem = document.getElementById('cm_copybox');
        if (elem) {
            elem.removeEventListener('mousedown', this.clickCopyBox);
        }

        // 素材をはずす
        elem = document.getElementById('cm_sozaiunlink');
        if (elem) {
            elem.removeEventListener('mousedown', this.clickSozaiUnlink);
        }

        // ボックスを削除
        elem = document.getElementById('cm_boxremove');
        if (elem) {
            elem.removeEventListener('mousedown', this.clickBoxRemove);
        }

        // 最前面へ の mousedown
        elem = document.getElementById('cm_tofront');
        if (elem) {
            elem.removeEventListener('mousedown', this.clickToFront);
        }

        // 最背面へ の mousedown
        elem = document.getElementById('cm_toback');
        if (elem) {
            elem.removeEventListener('mousedown', this.clickToBack);
        }
    }

    // document のイベント処理
    clickDocument(e) {
        e.stopPropagation();
        e.preventDefault();

        // コンテキストメニューを閉じる
        this.props.closeContextMenu();

        return false;
    }

    // コンテキストメニューのベース部分のイベント処理
    clickBase(e) {
        e.stopPropagation();
        e.preventDefault();
        return false;
    }

    // 新規作成（テキストボックス）のイベント処理
    clickNewBoxText(e) {
        e.stopPropagation();
        e.preventDefault();

        // コンテキストメニューの左上座標を紙面座標に変換する
        const [cur_x, cur_y] = this.changeCursorToArea(this.props.x, this.props.y);

        // 新規作成（テキストボックス）
        this.props.newBoxText({
            cur_x: cur_x,
            cur_y: cur_y,
        });

        // コンテキストメニューを閉じる
        // this.props.closeContextMenu();
        Event.triggerEvent(document, 'click');

        return false;
    }

    // 新規作成（画像ボックス）のイベント処理
    clickNewBoxImage(e) {
        e.stopPropagation();
        e.preventDefault();

        // コンテキストメニューの左上座標を紙面座標に変換する
        const [cur_x, cur_y] = this.changeCursorToArea(this.props.x, this.props.y);

        // 新規作成（画像ボックス）
        this.props.newBoxImage({
            cur_x: cur_x,
            cur_y: cur_y,
        });

        // コンテキストメニューを閉じる
        // this.props.closeContextMenu();
        Event.triggerEvent(document, 'click');

        return false;
    }

    // ボックスの複製（グループ化する）のイベント処理
    clickCopyBoxOnGroup(e) {
        e.stopPropagation();
        e.preventDefault();

        // コンテキストメニューの左上座標を紙面座標に変換する
        const [cur_x, cur_y] = this.changeCursorToArea(this.props.x, this.props.y);

        // 複製元のボックスにより処理を分ける
        switch (this.props.focusbox.type) {
        case 'text':    // テキストボックス
            this.props.copyBoxTextOnGroup({
                cur_x: cur_x,
                cur_y: cur_y,
                box_id:   this.props.focusbox.box_id,
                group_id: this.props.focusbox.group_id,
            });
            break;
        case 'title':   // 見出しボックス
            break;
        }

        // コンテキストメニューを閉じる
        // this.props.closeContextMenu();
        Event.triggerEvent(document, 'click');

        return false;
    }

    // ボックスの複製 のイベント処理
    clickCopyBox(e) {
        e.stopPropagation();
        e.preventDefault();

        // コンテキストメニューの左上座標を紙面座標に変換する
        const [cur_x, cur_y] = this.changeCursorToArea(this.props.x, this.props.y);

        // 複製元のボックスにより処理を分ける
        switch (this.props.focusbox.type) {
        case 'text':    // テキストボックス
            this.props.copyBoxText({
                cur_x: cur_x,
                cur_y: cur_y,
                box_id: this.props.focusbox.box_id,
            });
            break;
        case 'image':   // 画像ボックス
            this.props.copyBoxImage({
                cur_x: cur_x,
                cur_y: cur_y,
                box_id: this.props.focusbox.box_id,
            });
        case 'title':   // 見出しボックス
            break;
        }

        // コンテキストメニューを閉じる
        // this.props.closeContextMenu();
        Event.triggerEvent(document, 'click');

        return false;
    }

    // ウィンドウ座標（カーソル座標）を紙面エリア（SVGイメージ）右上基点座標に変換する
    changeCursorToArea(cx, cy) {
        const [x, y] = Cursor.curElemScaleScrollKiten(
            cx, cy,
            document.getElementById('viewbox'),
            this.props.scale / 100
        );
        const cur_x = Zahyo.luToruX(x, Define.svgimagesize.width);
        const cur_y = Zahyo.luToruY(y, Define.svgimagesize.height);

        return [cur_x, cur_y];
    }

    // 素材をはずす
    clickSozaiUnlink(e) {
        e.stopPropagation();
        e.preventDefault();

        // 素材をはずす
        this.props.sozaiUnlink({
            group_id: this.props.focusbox.group_id,
        });

        // コンテキストメニューを閉じる
        // this.props.closeContextMenu();
        Event.triggerEvent(document, 'click');

        return false;
    }

    // ボックスを削除
    clickBoxRemove(e) {
        e.stopPropagation();
        e.preventDefault();

        // コンテキストメニューを閉じる
        // this.props.closeContextMenu();
        Event.triggerEvent(document, 'click');

        // 削除してよいかを確認
        if (confirm('ボックスを削除します。よろしいですか？') == false) {
            return;
        }

        // ボックスを削除
        this.props.boxRemove({
            box_id: this.props.focusbox.box_id,
        });

        return false;
    }
    
    items() {
        let item = [];

        // 新規ボックス
        if (this.props.focusbox.box_id == '') {     // ボックスが選択されていない場合
            // 新規ボックス（テキスト）
            item.push(
                <div
                    id="cm_newboxtext"
                    className={css(styles.item)}
                >
                    新規作成（テキストボックス）
                </div>
            );
            // 新規ボックス（画像）
            item.push(
                <div
                    id="cm_newboximage"
                    className={css(styles.item)}
                >
                    新規作成（画像ボックス）
                </div>
            );
        } else {                                    // ボックスが選択されていない場合
            // ボックスを複製（グループ化する）
            if (this.props.focusbox.type == 'text'
             || this.props.focusbox.type == 'title') {
                item.push(
                    <div
                        id="cm_copyboxongroup"
                        className={css(styles.item)}
                    >
                        ボックスを複製（グループ化する）
                    </div>
                );
            }
            // ボックスを複製
            item.push(
                <div
                    id="cm_copybox"
                    className={css(styles.item)}
                >
                    ボックスを複製
                </div>
            );
        }

        // 素材を外す、ボックスを削除
        if (this.props.focusbox.box_id == '') {     // ボックスが選択されていない場合
        } else {                                    // ボックスが選択されている場合
            // <hr>
            item.push(<hr/>);

            // 素材をはずす
            item.push(
                <div
                    id="cm_sozaiunlink"
                    className={css(styles.item)}
                >
                    素材をはずす
                </div>
            );
            // ボックスを削除
            item.push(
                <div
                    id="cm_boxremove"
                    className={css(styles.item)}
                >
                    ボックスを削除
                </div>
            );
        }
        
        // 最前面へ 最背面へ
        if (this.props.focusbox.box_id == '') {     // ボックスが選択されていない場合
        } else {                                    // ボックスが選択されている場合
            // <hr>
            item.push(<hr/>);

            // 最前面へ
            item.push(
                <div
                    id="cm_tofront"
                    className={css(styles.grayout)}
                >
                    最前面へ
                </div>
            );
            // 再背面へ
            item.push(
                <div
                    id="cm_toback"
                    className={css(styles.grayout)}
                >
                    再背面へ
                </div>
            );
        }

        return item;
    }


    render() {
        return (
            <div
                id="contextmenu"
                className={css(styles.container)}
                style={{
                    left: this.props.x,
                    top:  this.props.y,
                }}
            >
                {this.items()}
            </div>
        );
    }
}
