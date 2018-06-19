import React from 'react';

import { String } from '../libs/string.js';

const styles = {
    container: {
        textAlign: 'left',
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
    input: {
        height: '9px',
        fontSize: '9px',
    },
};

export default class ToolBoxBoxData extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            box_id:   props.box.box_id,
            group_id: props.box.group_id,
            group_no: props.box.group_no,
            type:     props.box.type,
        };
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            box_id:   nextProps.box.box_id,
            group_id: nextProps.box.group_id,
            group_no: nextProps.box.group_no,
            type:     nextProps.box.type,
        });
    }

    clickUpdateButton() {
        let box = this.props.box;

        if (this.props.box.box_id === ''
         || this.state.group_id === ''
         || this.state.group_no === ''
         || this.props.box.type === '') {
             alert('全ての項目を入力してください');
             return;
        }

        box.box_id   = this.props.box.box_id;
        box.group_id = this.state.group_id;
        box.group_no = this.state.group_no;
        box.type     = this.props.box.type;

        this.props.onClickUpdateButton({
            box: box,
        });
    }

    clickDeleteButton() {
        if (confirm('ボックスを削除します。よろしいですか？') == false) {
            return;
        }

        this.props.onClickDeleteButton({
            box_id: this.state.box_id,
        });
    }

    clickCreateButton() {
        let box = this.props.box;

        if (this.state.box_id === ''
         || this.state.group_id === ''
         || this.state.group_no === ''
         || this.state.type === '') {
            alert('全ての項目を入力してください');
            return;
        }

        // IDが既存の場合は、作成できない
        if (this.props.checkKizonId(this.state.id)) {
            alert('このボックスIDは既に存在します');
            return;
        }

        // タイプチェック
        if (this.state.type != 'text' && this.state.type != 'image') {
            alert('「タイプ」は text または image と入力してください');
            return;
        }

        // グループ名とNoのチェック
        if (this.props.isSameGroupAndNo(this.state.group_id, this.state.group_no) == true) {
            alert('同じグループ名とグループNoのボックスが存在します');
            return;
        }

        // 指定のグループ名でボックスを作れるかをチェック
        // （既存のグループ名と同じグループのボックスを作成する場合、タイプが text でなければならない）
        if (this.state.type != 'text') {
            if (this.props.isSameGroup(this.state.group_id) == true) {
                alert('同じグループ名のボックスがあります。ボックスを作成できません。')
                return;
            }
        }

        box.box_id   = this.state.box_id;
        box.group_id = this.state.group_id;
        box.group_no = this.state.group_no;
        box.type     = this.state.type;

        this.props.onClickCreateButton({
            box: box,
        });
    }

    henshu() {
        return (
            <div
                style={styles.container}
            >
                <div
                    style={{
                        ...styles.line
                    }}
                >
                    ボックスID:
                    <span
                        style={{
                            width: '9px',
                            height: '9px',
                            backgroundColor: 'lightgray',
                        }}
                        onClick={(e) => this.clickDeleteButton()}
                    >✕</span>
                    &nbsp;
                    <span style={{fontWeight: 'bold', color: 'blue'}}>{this.props.box.box_id}</span>
                </div>
                <div
                    style={{
                        ...styles.line
                    }}
                >
                    タイプ： <span style={{color: 'green'}}>{this.props.box.type}</span>
                </div>
                <div
                    style={{
                        ...styles.line
                    }}
                >
                    ｸﾞﾙｰﾌﾟID <input
                                type="text"
                                value={this.state.group_id}
                                style={{...styles.input, width: '100px'}}
                                onChange={(e) => this.setState({group_id: e.target.value})}
                            />
                </div>
                <div
                    style={{
                        ...styles.line
                    }}
                >
                    No.<input
                            type="text"
                            value={this.state.group_no}
                            style={{...styles.input, width: '20px'}}
                            onChange={(e) => this.setState({group_no: String.toNumeric(e.target.value)})}
                        />
                </div>
                <div
                    style={{
                        ...styles.line,
                    }}
                >
                    x:{this.props.box.x} y:{this.props.box.y} w:{this.props.box.w} h:{this.props.box.h}
                </div>
                <div
                    style={{
                        ...styles.line,
                    }}
                >
                    <div
                        style={{
                            ...styles.button,
                            float: 'right',
                        }}
                        onClick={() => this.clickUpdateButton()}
                    >
                        更新
                    </div>
                </div>
            </div>
        );
    }

    shinki() {
        return (
            <div
                style={styles.container}
            >
                <div
                    style={{
                        ...styles.line
                    }}
                >
                    ボックスID: <input
                                type="text"
                                value={this.state.box_id}
                                style={{...styles.input, width: '50px'}}
                                onChange={(e) => this.setState({box_id: e.target.value})}
                            />
                </div>
                <div
                    style={{
                        ...styles.line
                    }}
                >
                    タイプ： <input
                                type="text"
                                value={this.state.type}
                                style={{...styles.input, width: '50px'}}
                                onChange={(e) => this.setState({type: e.target.value})}
                            />
                </div>
                <div
                    style={{
                        ...styles.line
                    }}
                >
                    ｸﾞﾙｰﾌﾟID <input
                                type="text"
                                value={this.state.group_id}
                                style={{...styles.input, width: '100px'}}
                                onChange={(e) => this.setState({group_id: e.target.value})}
                            />
                </div>
                <div
                    style={{
                        ...styles.line
                    }}
                >
                    No.<input
                            type="text"
                            value={this.state.group_no}
                            style={{...styles.input, width: '20px'}}
                            onChange={(e) => this.setState({group_no: String.toNumeric(e.target.value)})}
                        />
                </div>
                <div
                    style={{
                        ...styles.line,
                    }}
                />
                <div
                    style={{
                        ...styles.line,
                    }}
                >
                    <div
                        style={{
                            ...styles.button,
                            width: '60px',
                            float: 'right',
                        }}
                        onClick={() => this.clickCreateButton()}
                    >
                        新規作成
                    </div>
                </div>
            </div>
        );
    }

    render() {
        let html;
        if (this.props.box.box_id == '') {
            html = this.shinki();
        } else {
            html = this.henshu();
        }

        return (
            html  
        )
    }
}