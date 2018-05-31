import React from 'react';

import { String } from '../libs/string.js';

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
    input: {
        height: '9px',
    },
    listbox: {
        width: '100%',
        height: '115px',
        // paddingTop: '5px',
        overflowY: 'scroll',
        outline: '1px solid #a8a8a8',
        backgroundColor: 'white',
    },
    textbox: {
        width: '174px',
        height: '175px',
        marginTop: '5px',
    },
    sozailist: {
        width: '100%',
        height: '20px',
        lineHeight: '20px',
        borderBottom: '1px solid gray',
    },
};

const Color = {
    text: 'lightyellow',
    image: 'pink',
    select: 'red',
};

export default class ToolBoxSozai extends React.Component {
    constructor(props) {
        super(props);

        this.button = '';

        this.state = {
            id: '',
            inputid: '',
            type: '',
            text: '',
            image: '',
        };
    }
   
    componentWillReceiveProps(nextProps) {
        let sozai = '';
        for (let i = 0; i < nextProps.sozai.length; i++) {
            if (nextProps.sozai[i].select == 'on') {
                sozai = nextProps.sozai[i];
                break;
            }
        }

        if (sozai == '') {
            this.setState({
                id: '',
                inputid: '',
                type: '',
                text: '',
                image: '',
            });
        } else {
            this.setState({
                id: sozai.id,
                type: sozai.type,
                text: sozai.text,
                image: sozai.image,
            });
        }
    }

    clickList(sozai) {
        this.props.onClickSozaiList({id: sozai.id});
    }

    clickUpdateButton() {
        let sozai = {
            id: this.state.id,
            type: this.state.type,
            text: this.state.text,
            image: this.state.image,
        };

        this.props.onClickUpdateButton({
            sozai: sozai,
        });

        this.button = 'update';
    }

    clickDeleteButton(id) {
        if (confirm('削除します。よろしいですか？') == false) {
            return;
        }

        this.props.onClickDeleteButton({
            id: id,
        });
    }

    clickCreateButton() {
        if (this.state.inputid == ''
         || this.state.type == '') {
             alert('素材IDおよびタイプを入力してください');
             return;
        }

        if (this.props.checkSozaiExist(this.state.inputid)) {
            alert('この素材IDは既に存在しています');
            return;
        }

        if (this.state.type != 'text') {
            alert('「タイプ」は text と入力してください');
            return;
        }

        this.props.onClickCreateButton({
            id: this.state.inputid,
            type: this.state.type,
            text: this.state.text,
            image: this.state.image,
        });

        this.setState({
            inputid: '',
        });
    }

    sozailist() {
        return (
            this.props.sozai.map((rec) => {
                let color;
                switch (rec.type) {
                case 'text':
                    color = Color.text;
                    break;
                case 'image':
                    color = Color.image;
                    break;
                }

                if (rec.select == 'on') {
                    color = Color.select;
                }

                return (
                    <div
                        style={{
                            ...styles.sozailist,
                            backgroundColor: color,
                        }}
                        onClick={(e) => {
                            this.clickList(rec);
                        }}
                    >
                        <span
                            style={{
                                width: '9px',
                                height: '9px',
                                backgroundColor: 'lightgray',
                            }}
                            onClick={(e) => this.clickDeleteButton(rec.id)}
                        >✕</span> {rec.id}
                    </div>
                );
            })
        )
    }

    idtype() {
        let html;
        if (this.state.id == '') {
            html = [
                <div
                    style={{
                        ...styles.line,
                    }}
                >
                    素材ID：<input
                                type="text"
                                style={{
                                    ...styles.input,
                                    width: '80px',
                                }}
                                value={this.state.inputid}
                                onChange={(e) => this.setState({inputid: e.target.value})}
                            />
                </div>,
                <div
                    style={{
                        ...styles.line,
                    }}
                >
                    タイプ：<input
                                type="text"
                                style={{
                                    ...styles.input,
                                    width: '80px',
                                }}
                                value={this.state.type}
                                onChange={(e) => this.setState({type: e.target.value})}
                            />
                </div>
            ];
        } else {
            html = [
                <div
                    style={{
                        ...styles.line,
                    }}
                >
                    素材ID：{this.state.id}
                </div>,
                <div
                    style={{
                        ...styles.line,
                    }}
                >
                    タイプ：{this.state.type}
                </div>
            ];
        }

        return html;
    }

    newupdatebutton() {
        let html;
        if (this.state.id == '') {
            html = [
                <div
                    style={{
                        ...styles.button,
                        width: '60px',
                        float: 'right',
                    }}
                    onClick={(e) => this.clickCreateButton()}
                >
                    新規作成
                </div>
            ];
        } else {
            html = [
                <div
                    style={{
                        ...styles.button,
                        float: 'right',
                    }}
                    onClick={(e) => this.clickUpdateButton()}
                >
                    更新
                </div>
            ];
        }

        return html;
    }


    render() {
        return (
            <div
                id="toolboxsozai"
                style={styles.container}
            >
                <div style={{height: '5px'}}/>
                
                <div
                    style={{
                        ...styles.listbox,
                        marginBottom: '5px',
                    }}
                >
                    {this.sozailist()}
                </div>

                {this.idtype()}
                
                <textarea
                    id="toolboxsozaitextarea"
                    value={this.state.text}
                    style={{
                        ...styles.textbox,
                    }}
                    onChange={(e) => this.setState({text: e.target.value})}
                />

                {this.newupdatebutton()}
            </div>
        )
    }
}
