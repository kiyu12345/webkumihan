import React from 'react';

const styles = {
    container: {
        position: 'absolute',
        borderRadius: '5px',
        boxShadow: '0 0 2px gray',
    },
    title: {
        width: 'calc(100% - 2px - 20px)',
        height: '18px',
        border: '1px solid gray',
        padding: '0px 10px',
        fontSize: '12px',
        lineHeight: '18px',
        color: '#333',
        borderRadius: '5px 5px 0 0',
        textAlign: 'left',
        backgroundColor: '#a1bde8',
        userSelect: 'none',

    },
    body: {
        width: 'calc(100% - 2px - 20px)',
        padding: '0px 10px',
        borderRadius: '0 0 5px 5px',
        borderLeft: '1px solid gray',
        borderRight: '1px solid gray',
        borderBottom: '1px solid gray',
        fontSize: '14px',
        textAlign: 'left',
        backgroundColor: '#f3f3f5',
        userSelect: 'none',
    },
};

export default class ToolBox extends React.Component {
    constructor(props) {
        super(props);

        // 当ツールボックスの元（移動前）の左上座標
        this.boxorgpos = {
            x: props.x,
            y: props.y,
        };

		// マウスダウン位置
		this.mousepos = {
			x: 0,
			y: 0,
        };

        this.state = {
            x: this.boxorgpos.x,
            y: this.boxorgpos.y,
        };

        this.mouseMove = this.mouseMove.bind(this);
        this.mouseUp   = this.mouseUp.bind(this);        
    }

    componentWillReceiveProps(nextProps) {
        this.boxorgpos = {
            x: nextProps.x,
            y: nextProps.y,
        };
        this.setState({
            x: nextProps.x,
            y: nextProps.y,
        });
    }

    mouseDown(e) {
        e.stopPropagation();    // このイベントをこのレイヤーで止める。下レイヤーにある要素にイベントを起こさない
        e.preventDefault();     // ブラウザ標準機能のイベントを抑止する

        // マウスムーブとマウスアップのイベントを登録する
        document.addEventListener('mousemove', this.mouseMove, false);
        document.addEventListener('mouseup',   this.mouseUp, false);

        // マウスダウンしたカーソル位置をセットする
        this.mousepos.x = e.pageX;
        this.mousepos.y = e.pageY;
    }

    mouseMove(e) {
        e.stopPropagation();    // このイベントをこのレイヤーで止める。下レイヤーにある要素にイベントを起こさない
        e.preventDefault();     // ブラウザ標準機能のイベントを抑止する
        
        // マウスムーブ後のカーソル位置を得る
        const moveX = e.pageX;
        const moveY = e.pageY;

        // 当ボックスの新たな座標を求める
        let x = this.boxorgpos.x + (moveX - this.mousepos.x);
        let y = this.boxorgpos.y + (moveY - this.mousepos.y);
        
        // ウィンドウの端に当ボックスが行った場合の座標変換
        const [nx, ny] = this.boxmovestop(x, y);

        // 画像の座標を更新して描画し直す
        this.setState({
            x: nx,
            y: ny,
        });
    }

    mouseUp(e) {
        e.stopPropagation();    // このイベントをこのレイヤーで止める。下レイヤーにある要素にイベントを起こさない
        e.preventDefault();     // ブラウザ標準機能のイベントを抑止する
        
        // イベントを削除する
        document.removeEventListener('mousemove', this.mouseMove);
        document.removeEventListener('mouseup',   this.mouseUp);

        // 移動終了処理
        this.props.endMoveBox({
            toolbox_id: this.props.toolbox_id,
            x:  this.state.x,
            y:  this.state.y,
        });
    }
    
    boxmovestop(x, y) {
        const window_w = window.innerWidth;
        const window_h = window.innerHeight;

        if (x + this.props.w >= window_w) {
            x = window_w - this.props.w;
        }
        if (x <= 0) {
            x = 0;
        }

        if (y + 20 >= window_h) {
            y = window_h - 20;
        }
        if (y <= 0) {
            y = 0;
        }
        
        return [x, y];
    }

    help() {
        alert(
            'Lay A : レイアウトＡ（サンプルレイアウト）の呼び出し\n' +
            'Soz A : レイアウトＡ用の素材の呼び出し\n' +
            '\n' +
            'Lay B : レイアウトＢ（本格紙面）の呼び出し\n' +
            'Soz B : レイアウトＢ用の素材の呼び出し\n' +
            'Lnk B : レイアウトＢに、レイアウトＢ用の素材を流す\n' +
            '\n' +
            'Lay C : レイアウトＣ（小学生新聞）の呼び出し\n' +
            'Soz C : レイアウトＣ用の素材の呼び出し\n' +
            'Lnk C : レイアウトＣに、レイアウトＣ用の素材を流す\n' +
            '\n' +
            'E On : 編集モードON\n' +
            'E Off : 編集モードOFF\n\n'+
            'DL : SVGファイルとしてダウンロード（E Off にしておくこと）' 
            );
    }


    render() {
        // プレゼン用ツールボックスの場合、ヘルプボタンを入れる
        let help = '';
        if (this.props.title == 'プレゼン用') {
            help = <span
                        style={{
                            fontSize: '6px',
                            color: 'blue',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                        }}
                        onClick={(e) => this.help()}>ヘルプ</span>;
        }

        return (
            <div
                style={{
                    ...styles.container, 
                    left:   `${this.state.x}px`,
                    top:    `${this.state.y}px`,
                    width:  `${this.props.w}px`,
                    height: `${this.props.h}px`,
                }}
                onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    return false;
                }}
            >
                <div
                    style={styles.title}
                    onMouseDown={(e) => this.mouseDown(e)}
                >
                    {this.props.title}　　{help}
                </div>

                <div style={{
                    ...styles.body,
                    height: `calc(${this.props.h}px - 20px`,
                }}>
                    { this.props.children }
                </div>
            </div>
        )
    }
}
