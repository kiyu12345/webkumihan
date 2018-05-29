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
        backgroundColor: 'lightpink',
    },
};

const Color = {
    text: 'lightyellow',
    image: 'pink',
    select: 'red',
};

export default class ToolBoxList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            box_id: '',
            sozai_id: '',
        };
    }
   
    componentWillReceiveProps(nextProps) {
        this.setState({
            box_id: '',
            sozai_id: '',
        });
    }

    clickBoxList(box_id) {
        let id;

        if (this.state.box_id == box_id) {
            id = '';
        } else {
            id = box_id;
        }

        this.setState({
            box_id: id,
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
        if (this.state.box_id == ''
         || this.state.sozai_id == '') {
             return;
         }

        this.props.onClickCreateButton({
            box_id: this.state.box_id,
            sozai_id: this.state.sozai_id,
        });
    }

    clickDeleteButton(box_id) {
        if (confirm('削除します。よろしいですか？') == false) {
            return;
        }

        this.props.onClickDeleteButton({
            box_id: box_id,
        });
    }

    // ボックスIDがリンクリストに含まれているかどうかを返す
    isIncludeLinkListBoxId(box_id) {
        for (let i = 0; i < this.props.links.length; i++) {
            if (this.props.links[i].box_id == box_id) {
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

    boxlist() {
        let list = [];
        let html = [];

        for (let i = 0; i < this.props.boxs.length; i++) {
            // ボックスのグループNoが先頭以外は無視
            const no_ary = Box.getGroupNoAry(this.props.boxs, this.props.boxs[i].group);
            if (no_ary[0] != this.props.boxs[i].no) {
                continue;
            }

            // リンクリストに追加されているものは無視
            if (this.isIncludeLinkListBoxId(this.props.boxs[i].id) == true) {
                continue;
            }

            // ボックスリストとして追加する
            list.push({
                box_id: this.props.boxs[i].id,
            });
        }

        for (let i = 0; i < list.length; i++) {
            let bgcolor;
            if (this.state.box_id == list[i].box_id) {
                bgcolor = 'red';
            } else {
                bgcolor = 'lightyellow';
            }

            html.push(
                <div
                    style={{
                        ...styles.list,
                        backgroundColor: bgcolor,
                    }}
                    onClick={(e) => this.clickBoxList(list[i].box_id)}
                >
                    {list[i].box_id}
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
                bgcolor = 'lightyellow';
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
                        onClick={(e) => this.clickDeleteButton(this.props.links[i].box_id)}
                    >✕</span>
                    &nbsp;
                    {this.props.links[i].box_id}<br/>
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
                    ボックスリスト
                </div>
                <div
                    style={{
                        ...styles.boxlistbox,
                    }}
                >
                    {this.boxlist()}
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
