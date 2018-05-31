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

export default class ToolBoxTextData extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            padding_js: props.box.text.padding_js,
            padding_je: props.box.text.padding_je,
            padding_gs: props.box.text.padding_gs,
            padding_ge: props.box.text.padding_ge,
            kumihoko: props.box.text.kumihoko,
            size_j: props.box.text.size_j,
            size_g: props.box.text.size_g,
            gyokan: props.box.text.gyokan,
        };
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            padding_js: nextProps.box.text.padding_js,
            padding_je: nextProps.box.text.padding_je,
            padding_gs: nextProps.box.text.padding_gs,
            padding_ge: nextProps.box.text.padding_ge,
            kumihoko: nextProps.box.text.kumihoko,
            size_j: nextProps.box.text.size_j,
            size_g: nextProps.box.text.size_g,
            gyokan: nextProps.box.text.gyokan,
        });
    }

    clickUpdateButton() {
        let box = this.props.box;

        if (this.state.padding_js === ''
         || this.state.padding_je === ''
         || this.state.padding_gs === ''
         || this.state.padding_ge === ''
         || this.state.kumihoko === ''
         || this.state.size_j === ''
         || this.state.size_g === ''
         || this.state.gyokan === '') {
             alert('全ての項目を入力してください');
             return;
        }

        if (this.state.kumihoko != 'tate' && this.state.kumihoko != 'yoko') {
            alert('「組方向」は、tate または yoko と入力してください');
            return;
        }

        box.id = this.props.box.id;
        box.text.padding_js = this.state.padding_js;
        box.text.padding_je = this.state.padding_je;
        box.text.padding_gs = this.state.padding_gs;
        box.text.padding_ge = this.state.padding_ge;
        box.text.kumihoko = this.state.kumihoko;
        box.text.size_j = this.state.size_j;
        box.text.size_g = this.state.size_g;
        box.text.gyokan = this.state.gyokan;

        this.props.onClickUpdateButton({
            box: box,
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
                    ﾊﾟﾃﾞｨﾝｸﾞ(字詰)
                    S<input
                        type="text"
                        value={this.state.padding_js}
                        style={{...styles.input, width: '25px'}}
                        onChange={(e) => this.setState({padding_js: String.toNumeric(e.target.value)})} 
                        />
                    &nbsp;
                    E<input
                        type="text"
                        value={this.state.padding_je}
                        style={{...styles.input, width: '25px'}}
                        onChange={(e) => this.setState({padding_je: String.toNumeric(e.target.value)})}
                    />
                </div>
                <div
                    style={{
                        ...styles.line
                    }}
                >
                    ﾊﾟﾃﾞｨﾝｸﾞ(行送)
                    S<input
                        type="text"
                        value={this.state.padding_gs}
                        style={{...styles.input, width: '25px'}}
                        onChange={(e) => this.setState({padding_gs: String.toNumeric(e.target.value)})} 
                        />
                    &nbsp;
                    E<input
                        type="text"
                        value={this.state.padding_ge}
                        style={{...styles.input, width: '25px'}}
                        onChange={(e) => this.setState({padding_ge: String.toNumeric(e.target.value)})}
                    />
                </div>
                <div
                    style={{
                        ...styles.line
                    }}
                >
                    組方向 <input
                                type="text"
                                value={this.state.kumihoko}
                                style={{...styles.input, width: '50px'}}
                                onChange={(e) => this.setState({kumihoko: e.target.value})}
                    />
                    &nbsp;
                    行間 <input
                                type="text"
                                value={this.state.gyokan}
                                style={{...styles.input, width: '30px'}}
                                onChange={(e) => this.setState({gyokan: String.toNumeric(e.target.value)})}
                    />
                </div>
                <div
                    style={{
                        ...styles.line
                    }}
                >
                    文字サイズ（字詰）<input
                                        type="text"
                                        value={this.state.size_j}
                                        style={{...styles.input, width: '30px'}}
                                        onChange={(e) => this.setState({size_j: String.toNumeric(e.target.value)})}
                    />
                </div>
                <div
                    style={{
                        ...styles.line
                    }}
                >
                    文字サイズ（行送）<input
                                type="text"
                                value={this.state.size_g}
                                style={{...styles.input, width: '30px'}}
                                onChange={(e) => this.setState({size_g: String.toNumeric(e.target.value)})}
                    />
                </div>
                <div
                    style={{
                        ...styles.line
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