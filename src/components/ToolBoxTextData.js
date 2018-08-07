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
    select: {
        height: '18px',
        fontSize: '9px',
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
            font: props.box.text.font,
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
            font: nextProps.box.text.font,
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
         || this.state.gyokan === ''
         || this.state.font === '') {
             alert('全ての項目を入力してください');
             return;
        }

        if (this.state.kumihoko != 'tate' && this.state.kumihoko != 'yoko') {
            alert('「組方向」は、tate または yoko と入力してください');
            return;
        }

        if (this.state.font < 1 || this.state.font > 3) {
            alert('「フォントNo」は、1 ～ 3 で入力してください');
            return;
        }

        this.props.onClickUpdateButton({
            box_id:   this.props.box.box_id,
            group_id: this.props.box.group_id,
            text: {
                padding_js: this.state.padding_js,
                padding_je: this.state.padding_je,
                padding_gs: this.state.padding_gs,
                padding_ge: this.state.padding_ge,
                kumihoko:   this.state.kumihoko,
                size_j:     this.state.size_j,
                size_g:     this.state.size_g,
                gyokan:     this.state.gyokan,
                font:       this.state.font,
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
                { /* }
                    組方向 <input
                                type="text"
                                value={this.state.kumihoko}
                                style={{...styles.input, width: '50px'}}
                                onChange={(e) => this.setState({kumihoko: e.target.value})}
                    />
                { */ }
                    組方向 <select
                                style={{
                                    ...styles.select,
                                    width: '50px',
                                }}
                                onChange={(e) => this.setState({kumihoko: e.target.value})}
                           >
                           <option value="tate" selected={(this.state.kumihoko == 'tate') ? true : false}>たて</option>
                           <option value="yoko" selected={(this.state.kumihoko == 'yoko') ? true : false}>よこ</option>
                           </select>
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
                { /* }
                    文字サイズ（字詰）<input
                                        type="text"
                                        value={this.state.size_j}
                                        style={{...styles.input, width: '30px'}}
                                        onChange={(e) => this.setState({size_j: String.toNumeric(e.target.value)})}
                    />
                { */ }
                    文字サイズ（字詰）<select
                                        style={{
                                            ...styles.select,
                                            width: '60px',
                                        }}
                                        onChange={(e) => this.setState({size_j: parseInt(e.target.value)})}
                                    >
                                    <option value="6" selected={(this.state.size_j == 6) ? true : false}>6 pt</option>
                                    <option value="7" selected={(this.state.size_j == 7) ? true : false}>7 pt</option>
                                    <option value="8" selected={(this.state.size_j == 8) ? true : false}>8 pt</option>
                                    <option value="9" selected={(this.state.size_j == 9) ? true : false}>9 pt</option>
                                    <option value="10" selected={(this.state.size_j == 10) ? true : false}>10 pt</option>
                                    <option value="11" selected={(this.state.size_j == 11) ? true : false}>11 pt</option>
                                    <option value="12" selected={(this.state.size_j == 12) ? true : false}>12 pt</option>
                                    <option value="13" selected={(this.state.size_j == 13) ? true : false}>13 pt</option>
                                    <option value="14" selected={(this.state.size_j == 14) ? true : false}>14 pt</option>
                                    <option value="15" selected={(this.state.size_j == 15) ? true : false}>15 pt</option>
                                    <option value="16" selected={(this.state.size_j == 16) ? true : false}>16 pt</option>
                                    <option value="17" selected={(this.state.size_j == 17) ? true : false}>17 pt</option>
                                    <option value="18" selected={(this.state.size_j == 18) ? true : false}>18 pt</option>
                                    <option value="19" selected={(this.state.size_j == 19) ? true : false}>19 pt</option>
                                    <option value="20" selected={(this.state.size_j == 20) ? true : false}>20 pt</option>
                                    <option value="21" selected={(this.state.size_j == 21) ? true : false}>21 pt</option>
                                    <option value="22" selected={(this.state.size_j == 22) ? true : false}>22 pt</option>
                                    <option value="23" selected={(this.state.size_j == 23) ? true : false}>23 pt</option>
                                    <option value="24" selected={(this.state.size_j == 24) ? true : false}>24 pt</option>
                                    <option value="25" selected={(this.state.size_j == 25) ? true : false}>25 pt</option>
                                    <option value="26" selected={(this.state.size_j == 26) ? true : false}>26 pt</option>
                                    <option value="27" selected={(this.state.size_j == 27) ? true : false}>27 pt</option>
                                    <option value="28" selected={(this.state.size_j == 28) ? true : false}>28 pt</option>
                                    <option value="29" selected={(this.state.size_j == 29) ? true : false}>29 pt</option>
                                    <option value="30" selected={(this.state.size_j == 30) ? true : false}>30 pt</option>
                                    <option value="31" selected={(this.state.size_j == 31) ? true : false}>31 pt</option>
                                    <option value="32" selected={(this.state.size_j == 32) ? true : false}>32 pt</option>
                                    <option value="33" selected={(this.state.size_j == 33) ? true : false}>33 pt</option>
                                    <option value="34" selected={(this.state.size_j == 34) ? true : false}>34 pt</option>
                                    <option value="35" selected={(this.state.size_j == 35) ? true : false}>35 pt</option>
                                    <option value="36" selected={(this.state.size_j == 36) ? true : false}>36 pt</option>
                                    <option value="37" selected={(this.state.size_j == 37) ? true : false}>37 pt</option>
                                    <option value="38" selected={(this.state.size_j == 38) ? true : false}>38 pt</option>
                                    <option value="39" selected={(this.state.size_j == 39) ? true : false}>39 pt</option>
                                    <option value="40" selected={(this.state.size_j == 40) ? true : false}>40 pt</option>
                                    <option value="41" selected={(this.state.size_j == 41) ? true : false}>41 pt</option>
                                    <option value="42" selected={(this.state.size_j == 42) ? true : false}>42 pt</option>
                                    <option value="43" selected={(this.state.size_j == 43) ? true : false}>43 pt</option>
                                    <option value="44" selected={(this.state.size_j == 44) ? true : false}>44 pt</option>
                                    <option value="45" selected={(this.state.size_j == 45) ? true : false}>45 pt</option>
                                    <option value="46" selected={(this.state.size_j == 46) ? true : false}>46 pt</option>
                                    <option value="47" selected={(this.state.size_j == 47) ? true : false}>47 pt</option>
                                    <option value="48" selected={(this.state.size_j == 48) ? true : false}>48 pt</option>
                                    <option value="49" selected={(this.state.size_j == 49) ? true : false}>49 pt</option>
                                    <option value="50" selected={(this.state.size_j == 50) ? true : false}>50 pt</option>
                                    </select>
                </div>
                <div
                    style={{
                        ...styles.line
                    }}
                >
                { /* }
                    文字サイズ（行送）<input
                                type="text"
                                value={this.state.size_g}
                                style={{...styles.input, width: '30px'}}
                                onChange={(e) => this.setState({size_g: String.toNumeric(e.target.value)})}
                    />
                { */ }
                    文字サイズ（行送）<select
                                        style={{
                                            ...styles.select,
                                            width: '60px',
                                        }}
                                        onChange={(e) => this.setState({size_g: parseInt(e.target.value)})}
                                    >
                                    <option value="6" selected={(this.state.size_g == 6) ? true : false}>6 pt</option>
                                    <option value="7" selected={(this.state.size_g == 7) ? true : false}>7 pt</option>
                                    <option value="8" selected={(this.state.size_g == 8) ? true : false}>8 pt</option>
                                    <option value="9" selected={(this.state.size_g == 9) ? true : false}>9 pt</option>
                                    <option value="10" selected={(this.state.size_g == 10) ? true : false}>10 pt</option>
                                    <option value="11" selected={(this.state.size_g == 11) ? true : false}>11 pt</option>
                                    <option value="12" selected={(this.state.size_g == 12) ? true : false}>12 pt</option>
                                    <option value="13" selected={(this.state.size_g == 13) ? true : false}>13 pt</option>
                                    <option value="14" selected={(this.state.size_g == 14) ? true : false}>14 pt</option>
                                    <option value="15" selected={(this.state.size_g == 15) ? true : false}>15 pt</option>
                                    <option value="16" selected={(this.state.size_g == 16) ? true : false}>16 pt</option>
                                    <option value="17" selected={(this.state.size_g == 17) ? true : false}>17 pt</option>
                                    <option value="18" selected={(this.state.size_g == 18) ? true : false}>18 pt</option>
                                    <option value="19" selected={(this.state.size_g == 19) ? true : false}>19 pt</option>
                                    <option value="20" selected={(this.state.size_g == 20) ? true : false}>20 pt</option>
                                    <option value="21" selected={(this.state.size_g == 21) ? true : false}>21 pt</option>
                                    <option value="22" selected={(this.state.size_g == 22) ? true : false}>22 pt</option>
                                    <option value="23" selected={(this.state.size_g == 23) ? true : false}>23 pt</option>
                                    <option value="24" selected={(this.state.size_g == 24) ? true : false}>24 pt</option>
                                    <option value="25" selected={(this.state.size_g == 25) ? true : false}>25 pt</option>
                                    <option value="26" selected={(this.state.size_g == 26) ? true : false}>26 pt</option>
                                    <option value="27" selected={(this.state.size_g == 27) ? true : false}>27 pt</option>
                                    <option value="28" selected={(this.state.size_g == 28) ? true : false}>28 pt</option>
                                    <option value="29" selected={(this.state.size_g == 29) ? true : false}>29 pt</option>
                                    <option value="30" selected={(this.state.size_g == 30) ? true : false}>30 pt</option>
                                    <option value="31" selected={(this.state.size_g == 31) ? true : false}>31 pt</option>
                                    <option value="32" selected={(this.state.size_g == 32) ? true : false}>32 pt</option>
                                    <option value="33" selected={(this.state.size_g == 33) ? true : false}>33 pt</option>
                                    <option value="34" selected={(this.state.size_g == 34) ? true : false}>34 pt</option>
                                    <option value="35" selected={(this.state.size_g == 35) ? true : false}>35 pt</option>
                                    <option value="36" selected={(this.state.size_g == 36) ? true : false}>36 pt</option>
                                    <option value="37" selected={(this.state.size_g == 37) ? true : false}>37 pt</option>
                                    <option value="38" selected={(this.state.size_g == 38) ? true : false}>38 pt</option>
                                    <option value="39" selected={(this.state.size_g == 39) ? true : false}>39 pt</option>
                                    <option value="40" selected={(this.state.size_g == 40) ? true : false}>40 pt</option>
                                    <option value="41" selected={(this.state.size_g == 41) ? true : false}>41 pt</option>
                                    <option value="42" selected={(this.state.size_g == 42) ? true : false}>42 pt</option>
                                    <option value="43" selected={(this.state.size_g == 43) ? true : false}>43 pt</option>
                                    <option value="44" selected={(this.state.size_g == 44) ? true : false}>44 pt</option>
                                    <option value="45" selected={(this.state.size_g == 45) ? true : false}>45 pt</option>
                                    <option value="46" selected={(this.state.size_g == 46) ? true : false}>46 pt</option>
                                    <option value="47" selected={(this.state.size_g == 47) ? true : false}>47 pt</option>
                                    <option value="48" selected={(this.state.size_g == 48) ? true : false}>48 pt</option>
                                    <option value="49" selected={(this.state.size_g == 49) ? true : false}>49 pt</option>
                                    <option value="50" selected={(this.state.size_g == 50) ? true : false}>50 pt</option>
                                    </select>
                </div>
                <div
                    style={{
                        ...styles.line
                    }}
                >
                { /* }
                    フォントNo.<input
                                type="text"
                                value={this.state.font}
                                style={{...styles.input, width: '30px'}}
                                onChange={(e) => this.setState({font: String.toNumeric(e.target.value)})}
                    />
                { */ }
                    フォント <select
                                style={{
                                    ...styles.select,
                                    width: '100px',
                                }}
                                onChange={(e) => this.setState({font: e.target.value})}
                            >
                            <option value="1" selected={(this.state.font == 1) ? true : false}>明朝（細）</option>
                            <option value="2" selected={(this.state.font == 2) ? true : false}>明朝（太）</option>
                            <option value="3" selected={(this.state.font == 3) ? true : false}>ゴシック</option>
                            </select>
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