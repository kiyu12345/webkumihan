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
        this.clickNewBoxLineTate = this.clickNewBoxLineTate.bind(this);
        this.clickNewBoxLineYoko = this.clickNewBoxLineYoko.bind(this);
        this.clickCopyBoxOnGroup = this.clickCopyBoxOnGroup.bind(this);
        this.clickCopyBox = this.clickCopyBox.bind(this);
        this.clickSozaiUnlink = this.clickSozaiUnlink.bind(this);
        this.clickBoxRemove = this.clickBoxRemove.bind(this);
        this.clickBoxToFront = this.clickBoxToFront.bind(this);
        this.clickBoxToBack = this.clickBoxToBack.bind(this);
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

        // 新規作成（ライン[縦]ボックス）の mousedown
        elem = document.getElementById('cm_newboxlinetate');
        if (elem) {
            elem.addEventListener('mousedown', this.clickNewBoxLineTate, false);
        }

        // 新規作成（ライン[横]ボックス）の mousedown
        elem = document.getElementById('cm_newboxlineyoko');
        if (elem) {
            elem.addEventListener('mousedown', this.clickNewBoxLineYoko, false);
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
        elem = document.getElementById('cm_boxtofront');
        if (elem) {
            elem.addEventListener('mousedown', this.clickBoxToFront, false);
        }

        // 最背面へ の mousedown
        elem = document.getElementById('cm_boxtoback');
        if (elem) {
            elem.addEventListener('mousedown', this.clickBoxToBack, false);
        }
    }
    
    removeEvent() {
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

        // 新規作成（ライン[縦]ボックス）の mousedown
        elem = document.getElementById('cm_newboxlinetate');
        if (elem) {
            elem.removeEventListener('mousedown', this.clickNewBoxLineTate, false);
        }

        // 新規作成（ライン[横]ボックス）の mousedown
        elem = document.getElementById('cm_newboxlineyoko');
        if (elem) {
            elem.removeEventListener('mousedown', this.clickNewBoxLineYoko, false);
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
        elem = document.getElementById('cm_boxtofront');
        if (elem) {
            elem.removeEventListener('mousedown', this.clickBoxToFront);
        }

        // 最背面へ の mousedown
        elem = document.getElementById('cm_boxtoback');
        if (elem) {
            elem.removeEventListener('mousedown', this.clickBoxToBack);
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

    // 新規作成（ライン[縦]ボックス）のイベント処理
    clickNewBoxLineTate(e) {
        e.stopPropagation();
        e.preventDefault();

        // コンテキストメニューの左上座標を紙面座標に変換する
        const [cur_x, cur_y] = this.changeCursorToArea(this.props.x, this.props.y);

        // 新規作成（画像ボックス）
        this.props.newBoxLine({
            cur_x: cur_x,
            cur_y: cur_y,
            hoko: 'tate',
        });

        // コンテキストメニューを閉じる
        // this.props.closeContextMenu();
        Event.triggerEvent(document, 'click');

        return false;
    }

    // 新規作成（ライン[横]ボックス）のイベント処理
    clickNewBoxLineYoko(e) {
        e.stopPropagation();
        e.preventDefault();

        // コンテキストメニューの左上座標を紙面座標に変換する
        const [cur_x, cur_y] = this.changeCursorToArea(this.props.x, this.props.y);

        // 新規作成（画像ボックス）
        this.props.newBoxLine({
            cur_x: cur_x,
            cur_y: cur_y,
            hoko: 'yoko',
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
            break;
        case 'line':    // ラインボックス
            this.props.copyBoxLine({
                cur_x: cur_x,
                cur_y: cur_y,
                box_id: this.props.focusbox.box_id,
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

    // 最前面へ
    clickBoxToFront(e) {
        e.stopPropagation();
        e.preventDefault();

        // ボックスを最前面に移動する
        this.props.boxToFront({
            box_id: this.props.focusbox.box_id,
        });

        // コンテキストメニューを閉じる
        // this.props.closeContextMenu();
        Event.triggerEvent(document, 'click');

        return false;
    }

    // 再背面へ
    clickBoxToBack(e) {
        e.stopPropagation();
        e.preventDefault();

        // ボックスを最前面に移動する
        this.props.boxToBack({
            box_id: this.props.focusbox.box_id,
        });

        // コンテキストメニューを閉じる
        // this.props.closeContextMenu();
        Event.triggerEvent(document, 'click');

        return false;
    }
    
    items() {
        let item = [];

        // 新規ボックス
        if (this.props.focusbox.box_id == '') {     // ボックスが選択されていない場合
            // 新規ボックス（テキスト）
            item.push(
                <div
                    key={'cm_newboxtext'}
                    id="cm_newboxtext"
                    className={css(styles.item)}
                >
                    新規作成（テキストボックス）
                </div>
            );
            // 新規ボックス（画像）
            item.push(
                <div
                    key={'cm_newboximage'}
                    id="cm_newboximage"
                    className={css(styles.item)}
                >
                    新規作成（画像ボックス）
                </div>
            );
            // 新規ボックス（ライン縦）
            item.push(
                <div
                    key={'cm_newboxlinetate'}
                    id="cm_newboxlinetate"
                    className={css(styles.item)}
                >
                    新規作成（ライン[縦]ボックス）
                </div>
            );
            // 新規ボックス（ライン横）
            item.push(
                <div
                    key={'cm_newboxlineyoko'}
                    id="cm_newboxlineyoko"
                    className={css(styles.item)}
                >
                    新規作成（ライン[横]ボックス）
                </div>
            );
        } else {                                    // ボックスが選択されていない場合
            // ボックスを複製（グループ化する）
            if (this.props.focusbox.type == 'text'
             || this.props.focusbox.type == 'title') {
                item.push(
                    <div
                        key={'cm_copyboxongroup'}
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
                    key={'cm_copybox'}
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
            item.push(<hr key={'hr_1'}/>);

            // 素材をはずす
            if (this.props.focusbox.type != 'line') {
                item.push(
                    <div
                        key={'cm_sozaiunlink'}
                        id="cm_sozaiunlink"
                        className={css(styles.item)}
                    >
                        素材をはずす
                    </div>
                );
            }
            // ボックスを削除
            item.push(
                <div
                    key={'cm_boxremove'}
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
            item.push(<hr key={'hr_2'}/>);

            // 最前面へ
            item.push(
                <div
                    key={'cm_boxtofront'}
                    id="cm_boxtofront"
                    className={css(styles.item)}
                >
                    最前面へ
                </div>
            );
            // 再背面へ
            item.push(
                <div
                    key={'cm_boxtoback'}
                    id="cm_boxtoback"
                    className={css(styles.item)}
                >
                    最背面へ
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
