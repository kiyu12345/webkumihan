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
            group_id: '',
            sozai_id: '',
        };
    }
   
    componentWillReceiveProps(nextProps) {
        this.setState({
            group_id: '',
            sozai_id: '',
        });
    }

    clickBoxList(group_id) {
        let gid;

        if (this.state.group_id == group_id) {
            gid = '';
        } else {
            gid = group_id;
        }

        this.setState({
            group_id: gid,
        });
    }

    clickSozaiList(sozai_id) {
        let sid;

        if (this.state.sozai_id == sozai_id) {
            sid = '';
        } else {
            sid = sozai_id;
        }

        this.setState({
            sozai_id: sid,
        });
    }

    clickCreateButton() {
        if (this.state.group_id == ''
         || this.state.sozai_id == '') {
             return;
        }

        // 種別（テキスト or 画像）が合っていなければ、リンクできない
        const box_type = this.props.getTypeBoxGroup(this.state.group_id);
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
            group_id: this.state.group_id,
            sozai_id: this.state.sozai_id,
        });
    }

    clickDeleteButton(group_id) {
        if (confirm('削除します。よろしいですか？') == false) {
            return;
        }

        this.props.onClickDeleteButton({
            group_id: group_id,
        });
    }

    // グループ名がリンクリストに含まれているかどうかを返す
    isIncludeLinkListGroup(group_id) {
        for (let i = 0; i < this.props.links.length; i++) {
            if (this.props.links[i].group_id == group_id) {
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

        // ボックスのグループIDのリスト（配列）を得る
        const group_ary = Box.getGroupAry(this.props.boxs);

        for (let i = 0; i < group_ary.length; i++) {
            // リンクリストに追加されているものは無視
            if (this.isIncludeLinkListGroup(group_ary[i]) == true) {
                continue;
            }

            // ボックスリストとして追加する
            list.push({
                group_id: group_ary[i],
            });
        }

        for (let i = 0; i < list.length; i++) {
            let bgcolor;
            if (this.state.group_id == list[i].group_id) {
                bgcolor = 'red';
            } else {
                const type = this.props.getTypeBoxGroup(list[i].group_id);
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
                    onClick={(e) => this.clickBoxList(list[i].group_id)}
                >
                    {list[i].group_id}
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
            if (this.isIncludeLinkListSozaiId(this.props.sozai[i].sozai_id) == true) {
                continue;
            }

            // 素材リストとして追加する
            list.push({
                sozai_id: this.props.sozai[i].sozai_id,
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
                        onClick={(e) => this.clickDeleteButton(this.props.links[i].group_id)}
                    >✕</span>
                    &nbsp;
                    {this.props.links[i].group_id}<br/>
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
