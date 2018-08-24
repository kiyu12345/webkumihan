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
    select: {
        height: '18px',
        fontSize: '9px',
    },
    listbox: {
        width: '100%',
        height: '200px',
        // paddingTop: '5px',
        overflowY: 'scroll',
        outline: '1px solid #a8a8a8',
        backgroundColor: 'white',
    },
    textbox: {
        width: '174px',
        height: '175px',
        marginTop: '5px',
        fontWeight: 'normal',
    },
    imagebox: {
        display: 'table-cell',
        width: '174px',
        height: '175px',
        marginTop: '5px',
        backgroundColor: 'gray',
        verticalAlign: 'middle',
        textAlign: 'center',
    },
    img: {
        maxWidth: '174px',
        maxHeight: '175px',
    },
    sozailist: {
        width: '100%',
        height: '20px',
        lineHeight: '20px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        borderBottom: '1px solid gray',
        cursor: 'pointer',
    },
};

const Color = {
    text: 'lightyellow',
    image: 'lightpink',
    select: 'red',
};

export default class ToolBoxSozai extends React.Component {
    constructor(props) {
        super(props);

        this.button = '';

        let sozai = '';
        for (let i = 0; i < props.sozai.length; i++) {
            if (props.sozai[i].select == 'on') {
                sozai = props.sozai[i];
                break;
            }
        }
        if (sozai == '') {
            sozai = {
                sozai_id: '',
                sozai_type: 'text',
                text: '',
                //imageUrl: '',
                imageBase64: '',
            }
        }

        this.state = {
            sozai_id: sozai.sozai_id,
            input_id: '',
            type: sozai.type,
            text: sozai.text,
            //imageUrl: sozai.imageUrl,
            imageBase64: sozai.imageUrl,
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
                sozai_id: '',
                input_id: '',
                type: 'text',
                text: '',
                //imageUrl: '',
                imageBase64: '',
            });
        } else {
            this.setState({
                sozai_id: sozai.sozai_id,
                type: sozai.type,
                text: sozai.text,
                //imageUrl: sozai.imageUrl,
                imageBase64: sozai.imageUrl,
            });
        }
    }

    clickList(sozai) {
console.log('sozai click');
        this.props.onClickSozaiList({sozai_id: sozai.sozai_id});
    }

    clickUpdateButton() {
        let sozai = {
            sozai_id: this.state.sozai_id,
            type: this.state.type,
            text: this.state.text,
            //imageUrl: this.state.imageUrl,
            imageUrl: this.state.imageBase64,
        };

        this.props.onClickUpdateButton({
            sozai: sozai,
        });

        this.button = 'update';
    }

    clickDeleteButton(sozai_id) {
        if (confirm('削除します。よろしいですか？') == false) {
            return;
        }

        this.props.onClickDeleteButton({
            sozai_id: sozai_id,
        });
    }

    clickCreateButton() {
        if (this.state.input_id == ''
         || this.state.type == '') {
             alert('素材IDおよびタイプを入力してください');
             return;
        }

        if (this.props.checkSozaiExist(this.state.input_id)) {
            alert('この素材IDは既に存在しています');
            return;
        }

        if (this.state.type != 'text' && this.state.type != 'image') {
            alert('「タイプ」を選択してください');
            return;
        }

        // let imageUrl = '';
        // if (this.state.type == 'image') {
        //     imageUrl = this.state.text;
        // }

        this.props.onClickCreateButton({
            sozai_id: this.state.input_id,
            type: this.state.type,
            text: this.state.text,
            //imageUrl: imageUrl,
            imageUrl: this.state.imageBase64,
        });

        this.setState({
            input_id: '',
        });
    }

    imageUpload(){
        let f = document.createElement('input');
        f.addEventListener('change', (e) => {
            let file = e.target.files[0];
            if (!file || !file.type.match(/^image\/(jpeg|png|gif)/)){
                alert('画像以外は非対応です。');
                return;
            }

            let reader = new FileReader();
            reader.onload = () => {
                let imageBase64 = reader.result;
            
                this.setState({
                    imageBase64: imageBase64,
                });
            };

            reader.readAsDataURL(file);
        });

        f.type = 'file';
        f.click();
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
                        key={rec.sozai_id}
                        style={{
                            ...styles.sozailist,
                            backgroundColor: color,
                        }}
                        onClick={(e) => {
                            this.clickList(rec);
                        }}
                        onMouseDown={(e) => {
                            e.stopPropagation();
                            e.preventDefault();

                            // 素材のドラッグアンドドロップ処理
                            this.props.sozaiMouseDown({
                                x: e.pageX,
                                y: e.pageY,
                                type: 'sozai',
                                value: rec,
                            });

                            return false;
                        }}
                    >
                        <span
                            style={{
                                width: '9px',
                                height: '9px',
                                backgroundColor: 'lightgray',
                            }}
                            onClick={(e) => this.clickDeleteButton(rec.sozai_id)}
                        >✕</span> {rec.sozai_id}
                    </div>
                );
            })
        )
    }

    idtype() {
        let html;
        if (this.state.sozai_id == '') {
            html = [
                <div
                    key={1}
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
                                value={this.state.input_id}
                                onChange={(e) => this.setState({input_id: e.target.value})}
                            />
                </div>,
                <div
                    key={2}
                    style={{
                        ...styles.line,
                    }}
                >
{ /*** }
                    タイプ：<input
                                type="text"
                                style={{
                                    ...styles.input,
                                    width: '80px',
                                }}
                                value={this.state.type}
                                onChange={(e) => this.setState({type: e.target.value})}
                            />
{ ***/ }
                    タイプ：<select
                                style={{
                                    ...styles.select,
                                    width: '80px',
                                }}
                                onChange={(e) => {
                                    this.setState({type: e.target.value});
                                    if (e.target.value == 'image') {
                                        this.imageUpload();
                                    }
                                }}
                            >
                            <option value="text">テキスト</option>
                            <option value="image">画像URL</option>
                            </select>
                </div>
            ];
        } else {
            let type = '';
            switch (this.state.type) {
            case 'text':
                type = 'テキスト';
                break;
            case 'image':
                type = '画像';
                break;
            }

            html = [
                <div
                    key={1}
                    style={{
                        ...styles.line,
                    }}
                >
                    素材ID：{this.state.sozai_id}
                </div>,
                <div
                    key={2}
                    style={{
                        ...styles.line,
                    }}
                >
                    タイプ：{type}
                </div>
            ];
        }

        return html;
    }

    newupdatebutton() {
        let html;
        if (this.state.sozai_id == '') {
            html = [
                <div
                    key={1}
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
            if (this.state.type == 'text') {
                html = [
                    <div
                        key={1}
                        style={{
                            ...styles.button,
                            float: 'right',
                        }}
                        onClick={(e) => this.clickUpdateButton()}
                    >
                        更新
                    </div>
                ];
            } else {
                // 画像は「更新」ボタンはなし
            }
        }

        return html;
    }

    sozaiarea() {
        let html;
        // if (this.state.sozai_id == '') {
        //     html = [
        //         <textarea
        //             key={1}
        //             id="toolboxsozaitextarea"
        //             value={this.state.text}
        //             style={{
        //                 ...styles.textbox,
        //             }}
        //             onChange={(e) => this.setState({text: e.target.value})}
        //         />
        //     ];
        // } else {
            if (this.state.type == 'text') {
                html = [
                    <textarea
                        key={1}
                        id="toolboxsozaitextarea"
                        value={this.state.text}
                        style={{
                            ...styles.textbox,
                        }}
                        onChange={(e) => this.setState({text: e.target.value})}
                    />
                ];
            } else {
                html = [
                    <div
                        key={1}
                        id="toolboxsozaiimagearea"
                        style={{
                            ...styles.imagebox,
                        }}
                    >
                        <img
                            src={this.state.imageBase64}
                            style={{
                                ...styles.img,
                            }}
                        />
                    </div>
                ];
            }
        // }

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

                {this.sozaiarea()}
                
                {this.newupdatebutton()}
            </div>
        )
    }
}
