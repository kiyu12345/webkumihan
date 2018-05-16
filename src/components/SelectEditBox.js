import React from 'react';

import HandleUMap from './HandleUMap.js';
import HandleLMap from './HandleLMap.js';

import { Define } from '../define.js';
import { Zahyo }  from '../libs/zahyo.js';

const style = {

};

export default class SelectEditBox extends React.Component {
    constructor(props) {
        super(props);

        // 当ボックスの元（移動前）の左上座標
        const k = Zahyo.ruToluRect(props.x1,
                                   props.y1,
                                   props.x2,
                                   props.y2,
                                   Define.svgimagesize.width,
                                   Define.svgimagesize.height);
        this.boxorgpos = {
            x: k.x1,
            y: k.y1,
        };

		// マウスダウン位置
		this.mousepos = {
			x: 0,
			y: 0,
        };
        
        // 編集ボックスの左上座標と幅高さをセット
        const z = Zahyo.ruToluRectToArea(props.x1,
                                         props.y1,
                                         props.x2,
                                         props.y2,
                                         Define.svgimagesize.width,
                                         Define.svgimagesize.height);
        this.state = {
            x: z.x,
            y: z.y,
            w: z.w,
            h: z.h,
            handle_refresh: true,
        };

        this.mouseMove = this.mouseMove.bind(this);
        this.mouseUp   = this.mouseUp.bind(this);
        this.baseClick = this.baseClick.bind(this);

        // ベースクリックのイベントを登録する
        this.addBaseClickEvent();
    }

    componentWillReceiveProps(nextProps) {
        const k = Zahyo.ruToluRect(nextProps.x1,
                                   nextProps.y1,
                                   nextProps.x2,
                                   nextProps.y2,
                                   Define.svgimagesize.width,
                                   Define.svgimagesize.height);

        this.boxorgpos = {
            x: k.x1,
            y: k.y1,
        };
    }

    componentWillUnmount() {
        this.removeBaseClickEvent();
    }

    // ベースクリックのイベント登録処理
    addBaseClickEvent() {
        document.addEventListener('mouseup', this.baseClick, false);
    }
    // ベースクリックのイベント削除処理
    removeBaseClickEvent() {
        document.removeEventListener('mouseup', this.baseClick);
    }

    baseClick(e) {
        // e.stopPropagation();    // このイベントをこのレイヤーで止める。下レイヤーにある要素にイベントを起こさない
        e.preventDefault();     // ブラウザ標準機能のイベントを抑止する

        // ベースクリックのイベントを削除する
        this.removeBaseClickEvent();

        this.props.onClickBase();
    }

    mouseDown(e) {
        e.stopPropagation();    // このイベントをこのレイヤーで止める。下レイヤーにある要素にイベントを起こさない
        e.preventDefault();     // ブラウザ標準機能のイベントを抑止する

        // ベースクリックのイベントを削除する
        this.removeBaseClickEvent();

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

        // グリッドスナップ処理
        [x, y] = this.gridsnap(x, y);
        
		// ベースSVGイメージの端に当ボックスが行った場合の座標変換
		[x, y] = this.boxmovestop(x, y, this.state.w, this.state.h);

        // 画像の座標を更新して描画し直す
        this.setState({
            x: x,
            y: y,
            handle_refresh: true,
        });
    }

    mouseUp(e) {
        e.stopPropagation();    // このイベントをこのレイヤーで止める。下レイヤーにある要素にイベントを起こさない
        e.preventDefault();     // ブラウザ標準機能のイベントを抑止する
        
        // イベントを削除する
        document.removeEventListener('mousemove', this.mouseMove);
        document.removeEventListener('mouseup',   this.mouseUp);

        // ベースクリックのイベントを登録する
        this.addBaseClickEvent();

        // 移動終了処理（右上基点の座標を渡す）
        const z = Zahyo.luToruAreaToRect(this.state.x,
                                         this.state.y,
                                         this.state.w,
                                         this.state.h,
                                         Define.svgimagesize.width,
                                         Define.svgimagesize.height);
        this.props.endMoveBox({
            id: this.props.boxid,
            x1: z.x1,
            y1: z.y1,
            x2: z.x2,
            y2: z.y2,
        });
    }

    //
    // グリッドスナップ処理
    //
    gridsnap(x, y) {
        // 右上基点の座標に変換する
        let ru_x = Zahyo.luToruX(x, Define.svgimagesize.width);
        let ru_y = Zahyo.luToruY(y, Define.svgimagesize.height);

        // X座標をグリッド幅で割って、余りが0の場合は、X座標決定
        let amari, sho, minX, maxX;
        amari = ru_x % Define.grid.width;
        if (amari == 0) {
            // X座標は決定
        } else {
            // グリッドの小さい方のX座標を求める
            sho = Math.floor(ru_x / Define.grid.width);
            minX = sho * Define.grid.width;
            // グリッドの大きい方のX座標を求める
            maxX = (sho + 1) * Define.grid.width;

            // 余りが、グリッドの半分より大きければ大きい方、小さければ小さい方
            if (amari >= (Define.grid.width / 2)) {
                ru_x = maxX;
            } else {
                ru_x = minX;
            }
        }

        // Y座標をグリッド高さで割って、余りが0の場合は、Y座標決定
        let minY, maxY;
        amari = ru_y % Define.grid.height;
        if (amari == 0) {
            // Y座標は決定
        } else {
            // グリッドの小さい方のY座標を求める
            sho = Math.floor(ru_y / Define.grid.height);
            minY = sho * Define.grid.height;
            // グリッドの大きい方のX座標を求める
            maxY = (sho + 1) * Define.grid.height;

            // 余りが、グリッドの半分より大きければ大きい方、小さければ小さい方
            if (amari >= (Define.grid.height / 2)) {
                ru_y = maxY;
            } else {
                ru_y = minY;
            }
        }

        // 左上基点の座標に変換する
        x = Zahyo.ruToluX(ru_x, Define.svgimagesize.width);
        y = Zahyo.ruToluY(ru_y, Define.svgimagesize.height);

        return [x, y];
    }

    //
	// ボックスがベースSVGイメージの外に出ないようにする
	//
	boxmovestop(x, y, w, h) {
        // 右上基点のarea座標に変換する
        const area = Zahyo.luToruArea(x, y, w, h, Define.svgimagesize.width, Define.svgimagesize.height);

        // SVGイメージの一番左側のグリッドの座標を得る
        let sho, grid_lx, grid_dy;
        sho = Math.floor(Define.svgimagesize.width / Define.grid.width);
        grid_lx = Define.grid.width * sho;
        // SVGイメージの一番下側のグリッドの座標を得る
        sho = Math.floor(Define.svgimagesize.height / Define.grid.height);
        grid_dy = Define.grid.height * sho;

		if (area.x <= 0) {
			area.x = 0;
		} else if (area.x + w >= grid_lx) {
			area.x = grid_lx - area.w;
        }
        
		if (area.y <= 0) {
			area.y = 0;
		} else if (area.y + h >= grid_dy) {
			area.y = grid_dy - area.h;
		}

        // 左上基点の座標に変換する
        const z = Zahyo.ruToluArea(area.x, area.y, area.w, area.h, Define.svgimagesize.width, Define.svgimagesize.height);

        return [z.x, z.y];
    }
    
    // ハンドルのマウスダウン時の処理
    handleMouseDown() {
        // ベースクリックイベントを削除する
        this.removeBaseClickEvent();
    }

    // ハンドルのMove時の更新処理
    handleMove(x, y, w, h) {
        this.setState({
            x: x,
            y: y,
            w: w,
            h: h,
            handle_refresh: false,
        });
    }

    // ハンドルのマウスアップ時の更新処理
    handleMouseUp() {
        // ベースクリックイベントを登録する
        this.addBaseClickEvent();

        // 移動終了処理（右上基点の座標を渡す）
        const z = Zahyo.luToruAreaToRect(this.state.x,
            this.state.y,
            this.state.w,
            this.state.h,
            Define.svgimagesize.width,
            Define.svgimagesize.height);

        this.setState({
            handle_refresh: true,
        });

        this.props.endMoveBox({
            id: this.props.boxid,
            x1: z.x1,
            y1: z.y1,
            x2: z.x2,
            y2: z.y2,
        });        
    }

    render() {
        return (
            <g>
                <rect
                    id={`${this.props.boxid}_selectbox`}
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

                <HandleUMap
                    x={this.state.x}
                    y={this.state.y}
                    w={this.state.w}
                    h={this.state.h}

                    handleRefresh={this.state.handle_refresh}

                    gridsnap={(x, y) => this.gridsnap(x, y)}
                    boxmovestop={(x, y, w, h) => this.boxmovestop(x, y, w, h)}
                    handleMouseDown={() => this.handleMouseDown()}
                    handleMove={(x, y, w, h) => this.handleMove(x, y, w, h)}
                    handleMouseUp={() => this.handleMouseUp()}
                />
                {/* <HandleLMap
                    x={this.state.x}
                    y={this.state.y}
                    w={this.state.w}
                    h={this.state.h}

                    handleRefresh={this.state.handle_refresh}

                    gridsnap={(x, y) => this.gridsnap(x, y)}
                    boxmovestop={(x, y, w, h) => this.boxmovestop(x, y, w, h)}
                    handleMouseDown={() => this.handleMouseDown()}
                    handleMove={(x, y, w, h) => this.handleMove(x, y, w, h)}
                    handleMouseUp={() => this.handleMouseUp()}
                /> */}
            </g> 
        )
    }
}
