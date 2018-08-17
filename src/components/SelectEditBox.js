import React from 'react';

import HandleMap from './HandleMap.js';

import { Define } from '../define.js';
import { Zahyo, Grid }  from '../libs/zahyo.js';

const styles = {

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
            group_id: props.group_id,
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

        this.keyDown = this.keyDown.bind(this);
        this.keyUp   = this.keyUp.bind(this);

        // キー入力のイベントを登録する
        this.addKeyPressEvent();

        // シフトキーが押されているかどうか
        this.shiftKey = false;
    }

    componentWillReceiveProps(nextProps) {
        const area = Zahyo.ruToluRectToArea(nextProps.x1,
                                            nextProps.y1,
                                            nextProps.x2,
                                            nextProps.y2,
                                            Define.svgimagesize.width,
                                            Define.svgimagesize.height);

        this.boxorgpos = {
            x: area.x,
            y: area.y,
        };

        this.setState({
            group_id: nextProps.group_id,
            x: area.x,
            y: area.y,
            w: area.w,
            h: area.h,
            handle_refresh: true,
        });
    }

    componentWillUnmount() {
        this.removeBaseClickEvent();
        this.removeKeyPressEvent();
    }

    // キー入力のイベント登録処理
    addKeyPressEvent() {
        document.addEventListener('keydown', this.keyDown, false);
        document.addEventListener('keyup', this.keyUp, false);
    }
    // キー入力のイベント削除処理
    removeKeyPressEvent() {
        document.removeEventListener('keydown', this.keyDown);
        document.removeEventListener('keyup', this.keyUp);
    }
    // キーダウン処理
    keyDown(e) {
        // ツールボックスにフォーカスがある場合、何もしない
        if (this.props.toolboxfocus == 'in') {
            return;
        }

        // 「Shift」キーが押された場合
        if (e.shiftKey == true) {
            this.shiftKey = true;
        } else {
            this.shiftKey = false;
        }

        // 「Delete」または「BackSpace」キーが押された場合
        if (e.keyCode == 46 || e.keyCode == 8) {
            this.props.sozaiRemove({
                group_id: this.state.group_id,
            });
            return;
        }

        // 「←↑→↓」が押された場合
        let x, y;
        if (this.shiftKey == true) {
            switch (e.keyCode) {
            case 37: // ←
                x = this.state.x;
                x -= 1;
                if (x < 0) {
                    x = 0;
                }
                this.setState({
                    x: x,
                });
                this.endMoveBox();
                return false;
            case 38: // ↑
                y = this.state.y;
                y -= 1;
                if (y < 0) {
                    y = 0;
                }
                this.setState({
                    y: y,
                });
                this.endMoveBox();
                return false;
            case 39: // →
                x = this.state.x;
                x += 1;
                if (x > Define.svgimagesize.width - this.state.w) {
                    x = Define.svgimagesize.width - this.state.w;
                }
                this.setState({
                    x: x,
                });
                this.endMoveBox();
                return false;
            case 40: // ↓
                y = this.state.y;
                y += 1;
                if (y > Define.svgimagesize.height - this.state.h) {
                    y = Define.svgimagesize.height - this.state.h;
                }
                this.setState({
                    y: y,
                });
                this.endMoveBox();
                return false;
            }
        }
    }
    // キーアップ処理
    keyUp(e) {
        // Shiftキーがアップされた場合
        if (e.shiftKey == false) {
            this.shiftKey = false;
        }
    }

    // ベースクリックのイベント登録処理
    addBaseClickEvent() {
        document.getElementById('viewbox').addEventListener('click', this.baseClick, false);
    }
    // ベースクリックのイベント削除処理
    removeBaseClickEvent() {
        document.getElementById('viewbox').removeEventListener('click', this.baseClick);
    }

    baseClick(e) {
        e.stopPropagation();    // このイベントをこのレイヤーで止める。下レイヤーにある要素にイベントを起こさない
        e.preventDefault();     // ブラウザ標準機能のイベントを抑止する

        // ベースクリックのイベントを削除する
        this.removeBaseClickEvent();

        this.props.onClickBase();

        return false;
    }

    mouseDown(e) {
        e.stopPropagation();    // このイベントをこのレイヤーで止める。下レイヤーにある要素にイベントを起こさない
        e.preventDefault();     // ブラウザ標準機能のイベントを抑止する

        // ベースクリックのイベントを削除する
        this.removeBaseClickEvent();

        // ツールボックスにフォーカスが当たっていた場合
        // ツールボックスのフォーカスをOFFにして抜ける
        if (this.props.toolboxfocus == 'in') {
            this.props.onToolBoxFocusChange({focus: 'out'});
            return;
        }

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

        // documentへのclickイベントをキャンセルする
        var captureClick = (e) => {
            e.stopPropagation();
            document.removeEventListener('click', captureClick, true);
        }
        document.addEventListener('click', captureClick, true);

        // ベースクリックのイベントを登録する
        this.addBaseClickEvent();

        // 移動終了処理
        this.endMoveBox();
    }

    endMoveBox() {
        // 移動終了処理（右上基点の座標を渡す）
        const z = Zahyo.luToruAreaToRect(this.state.x,
                                         this.state.y,
                                         this.state.w,
                                         this.state.h,
                                         Define.svgimagesize.width,
                                         Define.svgimagesize.height);
        this.props.endMoveBox({
            box_id: this.props.box_id,
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
        // Shiftキーが押されていたら、スナップしない
        if (this.shiftKey == true) {
            return [x, y];
        }

        // 右上基点の座標に変換する
        let ru_x = Zahyo.luToruX(x, Define.svgimagesize.width);
        let ru_y = Zahyo.luToruY(y, Define.svgimagesize.height);

        [ru_x, ru_y] = Grid.snap(
            ru_x, ru_y,
            Define.svgimagesize.width,
            Define.svgimagesize.height,
            Define.grid.width,
            Define.grid.height
        );

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
    
    // ハンドルがベースSVGイメージの外に出ないようにする
    handlestop(x, y) {
        // 右上基点の座標に変換する
        let rx = Zahyo.luToruX(x, Define.svgimagesize.width);
        let ry = Zahyo.luToruY(y, Define.svgimagesize.height);

        // SVGイメージの一番左側のグリッドの座標を得る
        let sho, grid_lx, grid_dy;
        sho = Math.floor(Define.svgimagesize.width / Define.grid.width);
        grid_lx = Define.grid.width * sho;
        // SVGイメージの一番下側のグリッドの座標を得る
        sho = Math.floor(Define.svgimagesize.height / Define.grid.height);
        grid_dy = Define.grid.height * sho;

		if (rx <= 0) {
			rx = 0;
		} else if (rx >= grid_lx) {
			rx = grid_lx;
        }
        
		if (ry <= 0) {
			ry = 0;
		} else if (ry >= grid_dy) {
			ry = grid_dy;
		}

        // 左上基点の座標に変換する
        x = Zahyo.ruToluX(rx, Define.svgimagesize.width);
        y = Zahyo.ruToluY(ry, Define.svgimagesize.height);

        return [x, y];
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

        this.props.endChangeSizeBox({
            box_id: this.props.box_id,
            x1: z.x1,
            y1: z.y1,
            x2: z.x2,
            y2: z.y2,
        });        
    }

    group_no() {
        let html = [];

        if (this.props.type == 'text'
         || this.props.type == 'title') {
            html.push(
                <text
                    x={this.state.x + 5}
                    y={this.state.y + 20}
                    style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        stroke: 'none',
                        fill: 'white',
                        fillOpacity: '0.7',
                    }}
                >
                    {this.props.group_no}
                </text>
            );
         }

         return html;
    }

    realtimebox() {
        let box = '';

        // 角丸四角形
        let x = this.state.x - (10 * 100 / this.props.scale);
        let y = this.state.y - (30 * 100 / this.props.scale);
        let rx = 10 * 100 / this.props.scale;
        let ry = 10 * 100 / this.props.scale;
        let width  = 180 * 100 / this.props.scale;
        let height = 20  * 100 / this.props.scale;

        // 三角形
        let p1x = this.state.x + (5 * 100 / this.props.scale);
        let p1y = this.state.y - (10 * 100 / this.props.scale);
        let p2x = this.state.x + (15 * 100 / this.props.scale);
        let p2y = p1y;
        let p3x = this.state.x + (10 * 100 / this.props.scale);
        let p3y = this.state.y;
        let points = `${p1x},${p1y} ${p2x},${p2y} ${p3x},${p3y}`;

        // テキスト
        let area = Zahyo.luToruArea(this.state.x,
                                    this.state.y,
                                    this.state.w,
                                    this.state.h,
                                    Define.svgimagesize.width,
                                    Define.svgimagesize.height);
        let text = `x:${area.x} y:${area.y} w:${area.w} h:${area.h}`;
        let t_size = 12 * 100 / this.props.scale;
        let t_ichi_x = this.state.x + (0 * 100 / this.props.scale);
        let t_ichi_y = this.state.y - (15 * 100 / this.props.scale);

        box = (
            <g>
                <rect
                    x={x}
                    y={y}
                    rx={rx}
                    ry={ry}
                    width={width}
                    height={height}
                    style={{
                        fill: 'green',
                        fillOpacity: '0.5',
                        stroke: 'none',
                    }}
                />
                <polygon
                    points={points}
                    style={{
                        fill: 'green',
                        fillOpacity: '0.5',
                        stroke: 'none',
                    }}
                />
                <text
                    x={t_ichi_x}
                    y={t_ichi_y}
                    style={{
                        fontSize: t_size,
                        fontWeight: 'bold',
                        fill: 'white',
                        stroke: 'none',
                    }}
                >
                    {text}
                </text>
            </g>
        );

        return box;
    }

    handles() {
        let jsx = [];
        let kind = ['leftup',     'centerup',    'rightup',
                    'leftcenter',                'rightcenter',
                    'leftdown',   'centerdown',  'rightdown'];

        for (let i = 0; i < kind.length; i++) {
            jsx.push(
                <HandleMap
                    kind={kind[i]}

                    x={this.state.x}
                    y={this.state.y}
                    w={this.state.w}
                    h={this.state.h}

                    handleRefresh={this.state.handle_refresh}

                    gridsnap={(x, y) => this.gridsnap(x, y)}
                    handlestop={(x, y, w, h) => this.handlestop(x, y, w, h)}
                    handleMouseDown={() => this.handleMouseDown()}
                    handleMove={(x, y, w, h) => this.handleMove(x, y, w, h)}
                    handleMouseUp={() => this.handleMouseUp()}
                />
            )
        }

        return jsx;
    }


    render() {
        return (
            <g>
                <rect
                    id={`selectbox_${this.props.box_id}`}
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
                        cursor: 'move',
                    }}

                    onClick={(e) => {
                        e.stopPropagation();    // このイベントをこのレイヤーで止める。下レイヤーにある要素にイベントを起こさない
                        e.preventDefault();     // ブラウザ標準機能のイベントを抑止する
                    }}
                    onMouseDown={(e) => this.mouseDown(e)}
                />

                {/* グループNo */}
                {this.group_no()}

                {/* ハンドル */}
                { this.handles() }

                {/* 編集ボックスの位置とサイズ情報 */}
                { this.realtimebox() }
            </g> 
        )
    }
}
