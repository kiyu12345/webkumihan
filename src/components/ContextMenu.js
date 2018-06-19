import React from 'react';
import { StyleSheet, css } from 'aphrodite';

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
    onitem: {
        padding: '5px',
        ':hover': {
            backgroundColor: '#ddd',
            cursor: 'pointer',
        },
    },
    offitem: {
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
        this.clickCreateTextBoxOnGroup = this.clickCreateTextBoxOnGroup.bind(this);
        this.clickCreateTextBox = this.clickCreateTextBox.bind(this);
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

        // 新規作成 テキストボックス（グループ化する） の click
        elem = document.getElementById('createTextBoxOnGroup');
        if (elem) {
            elem.addEventListener('mousedown', this.clickCreateTextBoxOnGroup, false);
        }

        // 新規作成 テキストボックス の click
        elem = document.getElementById('createTextBox');
        if (elem) {
            elem.addEventListener('mousedown', this.clickCreateTextBox, false);
        }
    }
    
    removeEvent() {
        let elem;

        // 新規作成 テキストボックス の click
        elem = document.getElementById('createTextBox');
        if (elem) {
            elem.removeEventListener('mousedown', this.clickCreateTextBox);
        }

        // 新規作成 テキストボックス（グループ化する） の click
        elem = document.getElementById('createTextBoxOnGroup');
        if (elem) {
            elem.removeEventListener('mousedown', this.clickCreateTextBoxOnGroup);
        }

        // コンテキストメニューのベース部分の mousedown and click
        elem = document.getElementById('contextmenu');
        elem.removeEventListener('mousedown', this.clickBase);
        elem.removeEventListener('click',     this.clickBase);

        // document の mousedown and click
        elem = document;
        elem.removeEventListener('mousedown', this.clickDocument);
        elem.removeEventListener('click',     this.clickDocument);
    }

    // document のイベント処理
    clickDocument(e) {
console.log('clickDocument');
        e.stopPropagation();
        e.preventDefault();

        // コンテキストメニューを閉じる
        this.props.closeContextMenu();

        return false;
    }

    // コンテキストメニューのベース部分のイベント処理
    clickBase(e) {
console.log('clickBase');
        e.stopPropagation();
        e.preventDefault();
        return false;
    }

    // 新規作成 テキストボックス（グループ化する）のイベント処理
    clickCreateTextBoxOnGroup(e) {
console.log('clickCreateTextBoxOnGroup');
        e.stopPropagation();
        e.preventDefault();

        // テキストボックスの新規作成（グループ化する）
        this.props.createTextBoxOnGroup({
            box_id:   this.props.focusbox.box_id,
            group_id: this.props.focusbox.group_id,
        });

        // コンテキストメニューを閉じる
        this.props.closeContextMenu();

        return false;
    }

    // 新規作成 テキストボックス のイベント処理
    clickCreateTextBox(e) {
console.log('clickCreateTextBox');
        e.stopPropagation();
        e.preventDefault();

        // テキストボックスの新規作成
        this.props.createTextBox();

        // コンテキストメニューを閉じる
        this.props.closeContextMenu();

        return false;
    }

    items() {
        let item = [];

        // 新規作成 テキストボックス（新規 or グループ化する）
        if (this.props.focusbox.box_id != '') {
            switch (this.props.focusbox.type) {
            case 'text':    // テキストボックス
                item.push(
                    <div
                        id="createTextBoxOnGroup"
                        className={css(styles.onitem)}
                    >
                        新規作成 テキストボックス（グループ化する）
                    </div>
                ); 
                break;
            default:
                item.push(
                    <div
                        className={css(styles.offitem)}
                    >
                        新規作成 テキストボックス（グループ化する）
                    </div>
                ); 
                break;
            }
        } else {
            item.push(
                <div
                    id="createTextBox"
                    className={css(styles.onitem)}
                    onClick={(e) => {
                        console.log('ok');
                    }}
                >
                    新規作成 テキストボックス
                </div>
            );
        }

        // 新規作成 見出しボックス（新規 or グループ化する）
        if (this.props.focusbox.box_id != '') {
            switch (this.props.focusbox.type) {
            case 'title':    // 見出しボックス
                item.push(
                    <div
                        className={css(styles.onitem)}
                        onClick={(e) => {
                            this.props.clickNewTitleBoxAddGroup({
                                box_id:   this.props.focusbox.box_id,
                                group_id: this.props.focusbox.group_id,
                            });
                        }}
                    >
                        新規作成 見出しボックス（グループ化する）
                    </div>
                ); 
                break;
            default:
                item.push(
                    <div
                        className={css(styles.offitem)}
                        onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                        }}
                    >
                        新規作成 見出しボックス（グループ化する）
                    </div>
                ); 
                break;
            }
        } else {
            item.push(
                <div
                    className={css(styles.onitem)}
                    onClick={(e) => {
                        this.props.clickNewTitleBox();
                    }}
                >
                    新規作成 見出しボックス
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
