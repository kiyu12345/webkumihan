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
    },
};

export default class ToolBoxBoxData extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.box.id,
            type: props.box.type,
            group: props.box.group,
            no: props.box.no,
        };
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.box.id,
            type: nextProps.box.type,
            group: nextProps.box.group,
            no: nextProps.box.no,
        });
    }

    clickUpdateButton() {
        let box = this.props.box;

        if (this.props.box.id === ''
         || this.props.box.type === ''
         || this.state.group === ''
         || this.state.no === '') {
             alert('全ての項目を入力してください');
             return;
         }

        box.id = this.props.box.id;
        box.type = this.props.box.type;
        box.group = this.state.group;
        box.no = this.state.no;

        this.props.onClickUpdateButton({
            box: box,
        });
    }

    clickDeleteButton() {
        if (confirm('ボックスを削除します。よろしいですか？') == false) {
            return;
        }

        this.props.onClickDeleteButton({
            id: this.state.id,
        });
    }

    clickCreateButton() {
        let box = this.props.box;

        if (this.state.id === ''
         || this.state.type === ''
         || this.state.group === ''
         || this.state.no === '') {
            alert('全ての項目を入力してください');
            return;
        }

        // IDが既存の場合は、作成できない
        if (this.props.checkKizonId(this.state.id)) {
            alert('このボックスIDは既に存在します');
            return;
        }

        box.id = this.state.id;
        box.type = this.state.type;
        box.group = this.state.group;
        box.no = this.state.no;

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
                    <span style={{fontWeight: 'bold', color: 'blue'}}>{this.props.box.id}</span>
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
                    ｸﾞﾙｰﾌﾟ名 <input
                                type="text"
                                value={this.state.group}
                                style={{...styles.input, width: '50px'}}
                                onChange={(e) => this.setState({group: e.target.value})}
                            />
                    &nbsp;
                    No.<input
                            type="text"
                            value={this.state.no}
                            style={{...styles.input, width: '20px'}}
                            onChange={(e) => this.setState({no: String.toNumeric(e.target.value)})}
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
                                value={this.state.id}
                                style={{...styles.input, width: '50px'}}
                                onChange={(e) => this.setState({id: e.target.value})}
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
                    ｸﾞﾙｰﾌﾟ名 <input
                                type="text"
                                value={this.state.group}
                                style={{...styles.input, width: '50px'}}
                                onChange={(e) => this.setState({group: e.target.value})}
                            />
                    &nbsp;
                    No.<input
                            type="text"
                            value={this.state.no}
                            style={{...styles.input, width: '20px'}}
                            onChange={(e) => this.setState({no: String.toNumeric(e.target.value)})}
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
        if (this.props.box.id == '') {
            html = this.shinki();
        } else {
            html = this.henshu();
        }

        return (
            html  
        )
    }
}