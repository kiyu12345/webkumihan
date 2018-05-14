import React from 'react';

import { Define } from '../define.js';
import { Zahyo }  from '../libs/zahyo.js';

const style = {

};

export default class SelectEditBox extends React.Component {
    constructor(props) {
        super(props);

        // 当ボックスの元（移動前）の左上座標
        this.boxorgpos = {
            x: props.x1,
            y: props.y1,
        };

		// マウスダウン位置
		this.mousepos = {
			x: 0,
			y: 0,
        };
        
        // 編集ボックスの左上座標と幅高さをセット
        const z = Zahyo.changeRect1(props.x1,
                                    props.y1,
                                    props.x2,
                                    props.y2);

        this.state = {
            x: z.x,
            y: z.y,
            w: z.w,
            h: z.h,
        };

        this.mouseMove = this.mouseMove.bind(this);
        this.mouseUp   = this.mouseUp.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.boxorgpos = {
            x: nextProps.x1,
            y: nextProps.y1,
        };        
    }

    mouseDown(e) {
        e.stopPropagation();    // このイベントをこのレイヤーで止める。下レイヤーにある要素にイベントを起こさない
        e.preventDefault();     // ブラウザ標準機能のイベントを抑止する

        // マウスムーブとマウスアップのイベントを登録する
        document.addEventListener('mousemove', this.mouseMove, false);
        document.addEventListener('mouseup',   this.mouseUp, false);

        // マウスダウンしたカーソル位置をセットする
		this.mousepos.x = e.pageX * 100 / this.props.scale;
		this.mousepos.y = e.pageY * 100 / this.props.scale;
    }

    mouseMove(e) {
        e.stopPropagation();    // このイベントをこのレイヤーで止める。下レイヤーにある要素にイベントを起こさない
        e.preventDefault();     // ブラウザ標準機能のイベントを抑止する
        
        // マウスムーブ後のカーソル位置を得る
		const moveX = e.pageX * 100 / this.props.scale;
		const moveY = e.pageY * 100 / this.props.scale;

		// 当ボックスの新たな座標を求める
		let x = this.boxorgpos.x + (moveX - this.mousepos.x);
		let y = this.boxorgpos.y + (moveY - this.mousepos.y);
        
		// ベースSVGイメージの端に当ボックスが行った場合の座標変換
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

    //
	// ボックスがベースSVGイメージの外に出ないようにする
	//
	boxmovestop(x, y) {
        // ボックスの幅と高さを得る
        const w = this.state.w;
        const h = this.state.h;

		if (x <= 0) {
			x = 0;
		} else if (x + w >= Define.svgimagesize.width) {
			x = Define.svgimagesize.width - w;
        }
        
		if (y <= 0) {
			y = 0;
		} else if (y + h >= Define.svgimagesize.height) {
			y = Define.svgimagesize.height - h;
		}

		return [x, y];
	}


    render() {
        return (
            <g>
                <rect
                    x={this.state.x}
                    y={this.state.y}
                    width={this.state.w}
                    height={this.state.h}
                    style={{
                        fill: 'blue',
                        fillOpacity: '0.3',
                        // fill: 'none',
                        stroke: 'blue',
                        strokeWidth: 2 * 100 / this.props.scale,
                    }}

                    onClick={(e) => {
                        e.stopPropagation();    // このイベントをこのレイヤーで止める。下レイヤーにある要素にイベントを起こさない
                        e.preventDefault();     // ブラウザ標準機能のイベントを抑止する
                    }}
                    onMouseDown={(e) => this.mouseDown(e)}
                />
            </g> 
        )
    }
}
