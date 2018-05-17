import React from 'react';

import { Define } from '../define.js';

const styles = {

}

export default class HandleL extends React.Component {
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
            x: props.x,
            y: props.y + (props.h / 2),
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
        if (nextProps.handleRefresh == true) {
            this.boxorgpos = {
                x: nextProps.x,
                y: nextProps.y,
                w: nextProps.w,
                h: nextProps.h,
            };

            this.handleorgpos = {
                x: nextProps.x,
                y: nextProps.y + (nextProps.h / 2),
            };
        }
        
        this.setState({
            x: nextProps.x,
            y: nextProps.y + (nextProps.h / 2),
        });
    }

    mouseDown(e) {
        e.stopPropagation();    // このイベントをこのレイヤーで止める。下レイヤーにある要素にイベントを起こさない
        e.preventDefault();     // ブラウザ標準機能のイベントを抑止する

        // マウスムーブとマウスアップのイベントを登録する
        document.addEventListener('mousemove', this.mouseMove, false);
        document.addEventListener('mouseup',   this.mouseUp, false);

        // クリックのマウスイベント
        document.addEventListener('click', this.click, false);

        // マウスダウンしたカーソル位置をセットする
		this.mousepos.x = e.pageX * 100 / this.props.scale;
        this.mousepos.y = e.pageY * 100 / this.props.scale;
        
        // ハンドルマウスダウン処理
        this.props.handleMouseDown();
    }

    mouseMove(e) {
        e.stopPropagation();    // このイベントをこのレイヤーで止める。下レイヤーにある要素にイベントを起こさない
        e.preventDefault();     // ブラウザ標準機能のイベントを抑止する
        
        // マウスムーブ後のカーソル位置を得る
		const moveX = e.pageX * 100 / this.props.scale;
		// const moveY = e.pageY * 100 / this.props.scale;

		// 当ハンドルの新たな座標を求める
        let x = this.handleorgpos.x + (moveX - this.mousepos.x);
        // let x = this.handleorgpos.x;
        // let y = this.handleorgpos.y + (moveY - this.mousepos.y);
        let y = this.handleorgpos.y;

        // ボックスが1グリッド分より小さくならないようにする
        [x, y] = this.checkgrid1block(x, y);

        // グリッドスナップ処理
        [x, y] = this.props.gridsnap(x, y);
        
		// ベースSVGイメージの端にハンドルが行った場合の座標変換
		[x, y] = this.props.handlestop(x, y);

        // エディットボックス更新処理
        this.props.handleMove(
            x,
            this.boxorgpos.y,
            this.boxorgpos.x - x + this.boxorgpos.w,
            this.boxorgpos.h,
        );
    }

    mouseUp(e) {
        e.stopPropagation();    // このイベントをこのレイヤーで止める。下レイヤーにある要素にイベントを起こさない
        e.preventDefault();     // ブラウザ標準機能のイベントを抑止する
        
        // イベントを削除する
        document.removeEventListener('mousemove', this.mouseMove);
        document.removeEventListener('mouseup',   this.mouseUp);

        // documentへのclickイベントをキャンセルする
        var captureClick = (e) => {
            e.stopPropagation();
            document.removeEventListener('click', captureClick, true);
        }
        document.addEventListener('click', captureClick, true);

        // ハンドルMouseUp処理
        this.props.handleMouseUp();

        return false;
    }

    checkgrid1block(x, y) {
        const x2 = this.boxorgpos.x + this.boxorgpos.w;

        if (x > x2 - Define.grid.width) {
            x = x2 - Define.grid.width;
        }

        return [x, y];
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
                    // return false;
                }}
                onMouseDown={(e) => this.mouseDown(e)}
            />
        )
    }
}