import React from 'react';

const styles = {
    container: {
        position: 'absolute',
        border: '1px solid gray',
        borderRadius: '5px',
        backgroundColor: 'lightgray',
        boxShadow: '0 0 2px gray',
    },
    title: {
        width: 'calc(100% - 20px)',
        height: '20px',
        padding: '5px 10px',
        fontSize: '10pt',
        color: '#333',
        borderRadius: '5px 5px 0 0',
        textAlign: 'left',
        backgroundColor: '#a1bde8',
    },
    body: {
        padding: '5px',
        borderRAdius: '0 0 5px 5px',
        borderTop: '1px solid gray',
        fontSize: '10pt',
        textAlign: 'left',
    }
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
            id: this.props.id,
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

        if (y + this.props.h >= window_h) {
            y = window_h - this.props.h;
        }
        if (y <= 0) {
            y = 0;
        }
        
        return [x, y];
    }


    render() {
        return (
            <div
                style={{
                    ...styles.container, 
                    left:   `${this.state.x}px`,
                    top:    `${this.state.y}px`,
                    width:  `${this.props.w}px`,
                    height: `${this.props.h}px`,
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    style={styles.title}
                    onMouseDown={(e) => this.mouseDown(e)}
                >
                    {this.props.title}
                </div>

                <div style={styles.body}>
                    { this.props.children }
                </div>
            </div>
        )
    }
}