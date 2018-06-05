import React from 'react';

import { String } from '../libs/string.js';
import { Box } from '../libs/box.js';

const styles = {
    container: {
        textAlign: 'left',
        paddingTop: '5px',
    },
    line: {
        height: '20px',
        fontSize: '12px',
        lineHeight: '20px',
    },
    button: {
        width: '40px',
        height: '14px',
        fontSize: '12px',
        textAlign: 'center',
        lineHeight: '14px',
        border: '1px solid gray',
        backgroundColor: 'lightgreen',
        borderRadius: '2px',
    },
    boxlistbox: {
        width: '100%',
        height: '115px',
        // paddingTop: '5px',
        overflowY: 'scroll',
        outline: '1px solid #a8a8a8',
        backgroundColor: 'white',
    },
    sozailistbox: {
        width: '100%',
        height: '115px',
        overflowY: 'scroll',
        // marginTop: '5px',
        outline: '1px solid #a8a8a8',
        backgroundColor: 'white',
    },
    linklistbox: {
        width: '100%',
        height: '115px',
        overflowY: 'scroll',
        // marginTop: '5px',
        outline: '1px solid #a8a8a8',
        backgroundColor: 'white',
    },
    list: {
        width: '100%',
        height: '20px',
        lineHeight: '20px',
        borderBottom: '1px solid gray',
    },
    linklist: {
        width: '100%',
        height: '40px',
        lineHeight: '20px',
        borderBottom: '1px solid gray',
        backgroundColor: 'lightgreen',
    },
};

const Color = {
    text: 'lightyellow',
    image: 'lightcyan',
    select: 'red',
};

export default class ToolBoxList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            group: '',
            sozai_id: '',
        };
    }
   
    componentWillReceiveProps(nextProps) {
        this.setState({
            group: '',
            sozai_id: '',
        });
    }

    clickBoxList(group) {
        let id;

        if (this.state.group == group) {
            id = '';
        } else {
            id = group;
        }

        this.setState({
            group: id,
        });
    }

    clickSozaiList(sozai_id) {
        let id;

        if (this.state.sozai_id == sozai_id) {
            id = '';
        } else {
            id = sozai_id;
        }

        this.setState({
            sozai_id: id,
        });
    }

    clickCreateButton() {
        if (this.state.group == ''
         || this.state.sozai_id == '') {
             return;
        }

        // 種別（テキスト or 画像）が合っていなければ、リンクできない
        const box_type = this.props.getTypeBoxGroup(this.state.group);
        const sozai_type = this.props.getTypeSozai(this.state.sozai_id);
        let check = 'ng';
        if (box_type == 'text') {
            if (sozai_type == 'text') {
                check = 'ok';
            }
        } else if (box_type == 'image') {
            if (sozai_type == 'image') {
                check = 'ok';
            }
        }
        if (check == 'ng') {
            alert('ボックスのタイプと素材のタイプが異なります。リンクできません');
            return;
        }

        this.props.onClickCreateButton({
            group: this.state.group,
            sozai_id: this.state.sozai_id,
        });
    }

    clickDeleteButton(group) {
        if (confirm('削除します。よろしいですか？') == false) {
            return;
        }

        this.props.onClickDeleteButton({
            group: group,
        });
    }

    // グループ名がリンクリストに含まれているかどうかを返す
    isIncludeLinkListGroup(group) {
        for (let i = 0; i < this.props.links.length; i++) {
            if (this.props.links[i].group == group) {
                return true;
            }
        }

        return false;
    }

    // 素材Iｄがリンクリストに含まれているかどうかを返す
    isIncludeLinkListSozaiId(sozai_id) {
        for (let i = 0; i < this.props.links.length; i++) {
            if (this.props.links[i].sozai_id == sozai_id) {
                return true;
            }
        }

        return false;        
    }

    grouplist() {
        let list = [];
        let html = [];

        // ボックスのグループ名のリスト（配列）を得る
        const group_ary = Box.getGroupAry(this.props.boxs);

        for (let i = 0; i < group_ary.length; i++) {
            // リンクリストに追加されているものは無視
            if (this.isIncludeLinkListGroup(group_ary[i]) == true) {
                continue;
            }

            // ボックスリストとして追加する
            list.push({
                group: group_ary[i],
            });
        }

        for (let i = 0; i < list.length; i++) {
            let bgcolor;
            if (this.state.group == list[i].group) {
                bgcolor = 'red';
            } else {
                const type = this.props.getTypeBoxGroup(list[i].group);
                if (type == 'text') {
                    bgcolor = Color.text;
                } else if (type == 'image') {
                    bgcolor = Color.image;
                }
            }

            html.push(
                <div
                    style={{
                        ...styles.list,
                        backgroundColor: bgcolor,
                    }}
                    onClick={(e) => this.clickBoxList(list[i].group)}
                >
                    {list[i].group}
                </div>
            );
        }

        return html;
    }

    sozailist() {
        let list = [];
        let html = [];

        for (let i = 0; i < this.props.sozai.length; i++) {
            // リンクリストに追加されているものは無視
            if (this.isIncludeLinkListSozaiId(this.props.sozai[i].id) == true) {
                continue;
            }

            // 素材リストとして追加する
            list.push({
                sozai_id: this.props.sozai[i].id,
            });
        }

        for (let i = 0; i < list.length; i++) {
            let bgcolor;
            if (this.state.sozai_id == list[i].sozai_id) {
                bgcolor = 'red';
            } else {
                const type = this.props.getTypeSozai(list[i].sozai_id);
                if (type == 'text') {
                    bgcolor = Color.text;
                } else if (type == 'image') {
                    bgcolor = Color.image;
                }
            }

            html.push(
                <div
                    style={{
                        ...styles.list,
                        backgroundColor: bgcolor,
                    }}
                    onClick={(e) => this.clickSozaiList(list[i].sozai_id)}
                >
                    {list[i].sozai_id}
                </div>
            );
        }

        return html;
    }

    linklist() {
        let html = [];

        for (let i = 0; i < this.props.links.length; i++) {
            html.push(
                <div
                    style={{
                        ...styles.linklist,
                    }}
                >
                    <span
                        style={{
                            width: '9px',
                            height: '9px',
                            backgroundColor: 'lightgray',
                        }}
                        onClick={(e) => this.clickDeleteButton(this.props.links[i].group)}
                    >✕</span>
                    &nbsp;
                    {this.props.links[i].group}<br/>
                    <span style={{width: '9px', height: '9px'}}>　</span>
                    &nbsp;
                    {this.props.links[i].sozai_id}
                </div>
            );
        }

        return html;
    }


    render() {
        return (
            <div
                style={styles.container}
            >
                <div
                    style={{
                        ...styles.line,
                        color: 'blue',
                    }}
                >
                    グループリスト
                </div>
                <div
                    style={{
                        ...styles.boxlistbox,
                    }}
                >
                    {this.grouplist()}
                </div>

                <div
                    style={{
                        ...styles.line,
                        color: 'blue',
                    }}
                >
                    素材リスト
                </div>
                <div
                    style={{
                        ...styles.sozailistbox,
                    }}
                >
                    {this.sozailist()}
                </div>

                <div
                    style={{
                        ...styles.button,
                        width: '60px',
                        float: 'right',
                        marginTop: '5px',
                    }}
                    onClick={(e) => this.clickCreateButton()}
                >
                    リンク
                </div>
                <div style={{clear: 'both'}}/>

                <div
                    style={{
                        ...styles.line,
                        color: 'green',
                    }}
                >
                    リンクリスト
                </div>
                <div
                    style={{
                        ...styles.linklistbox,
                    }}
                >
                    {this.linklist()}
                </div>
            </div>
        )
    }
}
