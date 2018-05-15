import React from 'react';

import { Define } from '../define.js';

const styles = {

}

export default class HandleU extends React.Component {
    constructor(props) {
        super(props);
        
        // 移動前のエディットボックスarea情報
        this.boxorgpos = {
            x: props.x,
            y: props.y,
            w: props.w,
            h: props.h,
        };

        // ハンドルの元（移動前）の中心座標
        this.handleorgpos = {
            x: props.x + (props.w / 2),
            y: props.y,
        };

		// マウスダウン位置
		this.mousepos = {
			x: 0,
			y: 0,
        };
        
        // ハンドルの中心座標をセット
        this.state = {
            x: this.handleorgpos.x,
            y: this.handleorgpos.y,
        };

        this.mouseMove = this.mouseMove.bind(this);
        this.mouseUp   = this.mouseUp.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // this.boxorgpos = {
        //     x: nextProps.x,
        //     y: nextProps.y,
        //     w: nextProps.w,
        //     h: nextProps.h,
        // };

        // this.handleorgpos = {
        //     x: nextProps.x + (nextProps.w / 2),
        //     y: nextProps.y,
        // };
        
        // this.setState({
        //     x: this.handleorgpos.x,
        //     y: this.handleorgpos.y,
        // });
        this.setState({
            x: nextProps.x + (nextProps.w / 2),
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
		this.mousepos.x = e.pageX * 100 / this.props.scale;
		this.mousepos.y = e.pageY * 100 / this.props.scale;
    }

    mouseMove(e) {
        e.stopPropagation();    // このイベントをこのレイヤーで止める。下レイヤーにある要素にイベントを起こさない
        e.preventDefault();     // ブラウザ標準機能のイベントを抑止する
        
        // マウスムーブ後のカーソル位置を得る
		// const moveX = e.pageX * 100 / this.props.scale;
		const moveY = e.pageY * 100 / this.props.scale;

		// 当ハンドルの新たな座標を求める
        // let x = this.handleorgpos.x + (moveX - this.mousepos.x);
        let x = this.handleorgpos.x;
        let y = this.handleorgpos.y + (moveY - this.mousepos.y);

        // グリッドスナップ処理
        [x, y] = this.props.gridsnap(x, y);
        
		// ベースSVGイメージの端に当ボックスが行った場合の座標変換
		[x, y] = this.props.boxmovestop(x, y, this.props.w, this.props.h);

        // 画像の座標を更新して描画し直す
        // this.setState({
        //     x: x,
        //     y: y,
        // });

        // エディットボックス更新処理
        this.props.handleMove(
            this.boxorgpos.x,
            y,
            this.boxorgpos.w,
            this.boxorgpos.y - y + this.boxorgpos.h,
        );
    }

    mouseUp(e) {
        e.stopPropagation();    // このイベントをこのレイヤーで止める。下レイヤーにある要素にイベントを起こさない
        e.preventDefault();     // ブラウザ標準機能のイベントを抑止する
        
        // イベントを削除する
        document.removeEventListener('mousemove', this.mouseMove);
        document.removeEventListener('mouseup',   this.mouseUp);

        // 移動終了処理（右上基点の座標を渡す）
        // const z = Zahyo.luToruAreaToRect(this.state.x,
        //                                  this.state.y,
        //                                  this.state.w,
        //                                  this.state.h,
        //                                  Define.svgimagesize.width,
        //                                  Define.svgimagesize.height);
        // this.props.endMoveBox({
        //     id: this.props.id,
        //     x1: z.x1,
        //     y1: z.y1,
        //     x2: z.x2,
        //     y2: z.y2,
        // });

        this.props.handleMouseUp();
    }

    render() {
        // ハンドルのサイズを求める
        const hw = Define.handle.width  * 100 / this.props.scale;
        const hh = Define.handle.height * 100 / this.props.scale;

        return (
            <rect
                x={this.state.x - (hw / 2)}
                y={this.state.y - (hh / 2)}
                width={hw}
                height={hh}
                style={{
                    fill: 'blue',
                }}

                onClick={(e) => {
                    e.stopPropagation();    // このイベントをこのレイヤーで止める。下レイヤーにある要素にイベントを起こさない
                    e.preventDefault();     // ブラウザ標準機能のイベントを抑止する
                }}
                onMouseDown={(e) => this.mouseDown(e)}
            />
        )
    }
}