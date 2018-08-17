import React from 'react';

import { Define } from '../define.js';

const styles = {

}

export default class Handle extends React.Component {
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
        let [x, y] = this.getHandleCenter(
            props.kind,
            props.x,
            props.y,
            props.w,
            props.h
        );
        this.handleorgpos = {
            x: x,
            y: y,
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
        let [x, y] = this.getHandleCenter(
            nextProps.kind,
            nextProps.x,
            nextProps.y,
            nextProps.w,
            nextProps.h
        );

        if (nextProps.handleRefresh == true) {
            this.boxorgpos = {
                x: nextProps.x,
                y: nextProps.y,
                w: nextProps.w,
                h: nextProps.h,
            };

            this.handleorgpos = {
                x: x,
                y: y,
            };
        }
        
        this.setState({
            x: x,
            y: y,
        });
    }

    getHandleCenter(kind, box_x, box_y, box_w, box_h) {
        let x, y;
        
        switch (kind) {
        case 'leftup':
            x = box_x;
            y = box_y;
            break;
        case 'centerup':
            x = box_x + (box_w / 2);
            y = box_y;
            break;
        case 'rightup':
            x = box_x + box_w;
            y = box_y;
            break;
        case 'leftcenter':
            x = box_x;
            y = box_y + (box_h / 2);
            break;
        case 'rightcenter':
            x = box_x + box_w;
            y = box_y + (box_h / 2);
            break;
        case 'leftdown':
            x = box_x;
            y = box_y + box_h;
            break;
        case 'centerdown':
            x = box_x + (box_w / 2);
            y = box_y + box_h;
            break;
        case 'rightdown':
            x = box_x + box_w;
            y = box_y + box_h;
            break;
        }

        return [x, y];
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
		const moveY = e.pageY * 100 / this.props.scale;

		// 当ハンドルの新たな座標を求める
        let x, y;
        switch (this.props.kind) {
        case 'leftup':
        case 'rightup':
        case 'leftdown':
        case 'rightdown':
            x = this.handleorgpos.x + (moveX - this.mousepos.x);
            y = this.handleorgpos.y + (moveY - this.mousepos.y);
            break;
        case 'centerup':
        case 'centerdown':
            x = this.handleorgpos.x;
            y = this.handleorgpos.y + (moveY - this.mousepos.y);
            break;
        case 'leftcenter':
        case 'rightcenter':
            x = this.handleorgpos.x + (moveX - this.mousepos.x);
            y = this.handleorgpos.y;
            break;
        }

        // ボックスが1グリッド分より小さくならないようにする
        [x, y] = this.checkgrid1block(x, y);

        // グリッドスナップ処理
        [x, y] = this.props.gridsnap(x, y);
        
		// ベースSVGイメージの端にハンドルが行った場合の座標変換
		[x, y] = this.props.handlestop(x, y);

        // エディットボックス更新処理
        let mx, my, mw, mh;
        switch (this.props.kind) {
        case 'leftup':
            mx = x;
            my = y;
            mw = this.boxorgpos.w + (this.boxorgpos.x - x);
            mh = this.boxorgpos.h + (this.boxorgpos.y - y);
            break;
        case 'centerup':
            mx = this.boxorgpos.x;
            my = y;
            mw = this.boxorgpos.w;
            mh = this.boxorgpos.h + (this.boxorgpos.y - y);
            break;
        case 'rightup':
            mx = this.boxorgpos.x;
            my = y;
            mw = x - this.boxorgpos.x;
            mh = this.boxorgpos.h + (this.boxorgpos.y - y);
            break;
        case 'leftcenter':
            mx = x;
            my = this.boxorgpos.y;
            mw = this.boxorgpos.w + (this.boxorgpos.x - x);
            mh = this.boxorgpos.h;
            break;
        case 'rightcenter':
            mx = this.boxorgpos.x;
            my = this.boxorgpos.y;
            mw = x - this.boxorgpos.x;
            mh = this.boxorgpos.h;
            break;
        case 'leftdown':
            mx = x;
            my = this.boxorgpos.y;
            mw = this.boxorgpos.w + (this.boxorgpos.x - x);
            mh = y - this.boxorgpos.y;
            break;
        case 'centerdown':
            mx = this.boxorgpos.x;
            my = this.boxorgpos.y;
            mw = this.boxorgpos.w;
            mh = y - this.boxorgpos.y;
            break;
        case 'rightdown':
            mx = this.boxorgpos.x;
            my = this.boxorgpos.y;
            mw = x - this.boxorgpos.x;
            mh = y - this.boxorgpos.y;
            break;
        }
        this.props.handleMove(
            mx,
            my,
            mw,
            mh,
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
        let x2, y2;

        switch (this.props.kind) {
        case 'leftup':
            x2 = this.boxorgpos.x + this.boxorgpos.w;
            if (x > x2 - Define.grid.width) {
                x = x2 - Define.grid.width;
            }
            y2 = this.boxorgpos.y + this.boxorgpos.h;
            if (y > y2 - Define.grid.height) {
                y = y2 - Define.grid.height;
            }
            break;
        case 'centerup':
            y2 = this.boxorgpos.y + this.boxorgpos.h;
            if (y > y2 - Define.grid.height) {
                y = y2 - Define.grid.height;
            }
            break;
        case 'rightup':
            x2 = this.boxorgpos.x;
            if (x < x2 + Define.grid.width) {
                x = x2 + Define.grid.width;
            }
            y2 = this.boxorgpos.y + this.boxorgpos.h;
            if (y > y2 - Define.grid.height) {
                y = y2 - Define.grid.height;
            }
            break;
        case 'leftcenter':
            x2 = this.boxorgpos.x + this.boxorgpos.w;
            if (x > x2 - Define.grid.width) {
                x = x2 - Define.grid.width;
            }
            break;
        case 'rightcenter':
            x2 = this.boxorgpos.x;
            if (x < x2 + Define.grid.width) {
                x = x2 + Define.grid.width;
            }
            break;
        case 'leftdown':
            x2 = this.boxorgpos.x + this.boxorgpos.w;
            if (x > x2 - Define.grid.width) {
                x = x2 - Define.grid.width;
            }
            y2 = this.boxorgpos.y;
            if (y < y2 + Define.grid.height) {
                y = y2 + Define.grid.height;
            }
            break;
        case 'centerdown':
            y2 = this.boxorgpos.y;
            if (y < y2 + Define.grid.height) {
                y = y2 + Define.grid.height;
            }
            break;
        case 'rightdown':
            x2 = this.boxorgpos.x;
            if (x < x2 + Define.grid.width) {
                x = x2 + Define.grid.width;
            }
            y2 = this.boxorgpos.y;
            if (y < y2 + Define.grid.height) {
                y = y2 + Define.grid.height;
            }
            break;
        }

        return [x, y];
    }

    render() {
        // ハンドルのサイズを求める
        const hw = Define.handle.width  * 100 / this.props.scale;
        const hh = Define.handle.height * 100 / this.props.scale;

        let cursor;
        switch (this.props.kind) {
        case 'leftup':
        case 'rightdown':
            cursor = 'nwse-resize';
            break;
        case 'centerup':
        case 'centerdown':
            cursor = 'ns-resize';
            break;
        case 'rightup':
        case 'leftdown':
            cursor = 'nesw-resize';
            break;
        case 'leftcenter':
        case 'rightcenter':
            cursor = 'ew-resize';
            break;
        }

        return (
            <rect
                x={this.state.x - (hw / 2)}
                y={this.state.y - (hh / 2)}
                width={hw}
                height={hh}
                style={{
                    fill: 'blue',
                    cursor: cursor,
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