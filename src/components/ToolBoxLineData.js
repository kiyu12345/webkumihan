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

export default class ToolBoxLineData extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hoko:      props.box.line.hoko,
            padding_s: props.box.line.padding_s,
            padding_e: props.box.line.padding_e,
            width:     props.box.line.width,
            kind:      props.box.line.kind,
            color:     props.box.line.color,
        };
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            hoko:      nextProps.box.line.hoko,
            padding_s: nextProps.box.line.padding_s,
            padding_e: nextProps.box.line.padding_e,
            width:     nextProps.box.line.width,
            kind:      nextProps.box.line.kind,
            color:     nextProps.box.line.color,
        });
    }

    clickUpdateButton() {
        let box = this.props.box;

        if (this.state.hoko === ''
         || this.state.padding_s === ''
         || this.state.padding_e === ''
         || this.state.width === ''
         || this.state.kind === ''
         || this.state.color === '') {
             alert('全ての項目を入力してください');
             return;
        }

        if (this.state.hoko != 'tate' && this.state.hoko != 'yoko') {
            alert('「方向」は、tate または yoko と入力してください');
            return;
        }

        if (this.state.kind < 1 || this.state.kind > 5) {
            alert('「種別」は、1 ～ 5 で入力してください');
            return;
        }

        this.props.onClickUpdateButton({
            box_id: this.props.box.box_id,
            line: {
                hoko:      this.state.hoko,
                padding_s: this.state.padding_s,
                padding_e: this.state.padding_e,
                width:     this.state.width,
                kind:      this.state.kind,
                color:     this.state.color,
            },
        });
    }


    render() {
        return (
            <div
                style={styles.container}
            >
                <div
                    style={{
                        ...styles.line
                    }}
                >
                    方向 <input
                                type="text"
                                value={this.state.hoko}
                                style={{...styles.input, width: '50px'}}
                                onChange={(e) => this.setState({hoko: e.target.value})}
                    />
                </div>
                <div
                    style={{
                        ...styles.line
                    }}
                >
                    ﾊﾟﾃﾞｨﾝｸﾞ(開始) <input
                        type="text"
                        value={this.state.padding_s}
                        style={{...styles.input, width: '50px'}}
                        onChange={(e) => this.setState({padding_s: String.toNumeric(e.target.value)})} 
                    />
                </div>
                <div
                    style={{
                        ...styles.line
                    }}
                >
                    ﾊﾟﾃﾞｨﾝｸﾞ(終了) <input
                        type="text"
                        value={this.state.padding_e}
                        style={{...styles.input, width: '50px'}}
                        onChange={(e) => this.setState({padding_e: String.toNumeric(e.target.value)})} 
                    />
                </div>
                <div
                    style={{
                        ...styles.line
                    }}
                >
                    線幅 <input
                            type="text"
                            value={this.state.width}
                            style={{...styles.input, width: '50px'}}
                            onChange={(e) => this.setState({width: String.toFloat(e.target.value)})}
                    />
                </div>
                <div
                    style={{
                        ...styles.line
                    }}
                >
                    種類 <input
                            type="text"
                            value={this.state.kind}
                            style={{...styles.input, width: '50px'}}
                            onChange={(e) => this.setState({kind: String.toNumeric(e.target.value)})}
                    />
                </div>
                <div
                    style={{
                        ...styles.line
                    }}
                >
                    カラー <input
                                type="text"
                                value={this.state.color}
                                style={{...styles.input, width: '50px'}}
                                onChange={(e) => this.setState({color: e.target.value})}
                    />
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
        )
    }
}