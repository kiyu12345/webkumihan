import React from 'react';

import ViewBoxMap from '../components/ViewBoxMap.js';
// import { Dialog } from 'material-ui';
import ToolBoxMap from '../components/ToolBoxMap.js';
import ToolBoxScaleMap from '../components/ToolBoxScaleMap.js';
import ToolBoxBoxDataMap from '../components/ToolBoxBoxDataMap.js';
import ToolBoxTextDataMap from '../components/ToolBoxTextDataMap.js';
import ToolBoxLineDataMap from '../components/ToolBoxLineDataMap.js';
import ToolBoxSozaiMap from '../components/ToolBoxSozaiMap.js';
import ToolBoxLinkMap from '../components/ToolBoxLinkMap.js';
import ToolBoxPresenMap from '../components/ToolBoxPresenMap.js';

import { Cursor } from '../libs/zahyo.js';

const styles = {
    container: {
        position: 'relative',
        fontSize: '20px',
        //fontWeight: 'bold',
        color: 'black',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
    },

    danddTextBox: {
        position: 'absolute',
        width: '125px',
        height: '125px',
        padding: '5px',
        fontSize: '12px',
        color: 'black',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        // whiteSpace: 'nowrap',
        backgroundColor: 'lightyellow',
        opacity: '0.5',
        cursor: '-moz-grabbing',
        cursor: '-webkit-grabbing',
        cursor: 'pointer',
    },
    danddImageBox: {
        position: 'absolute',
        // display: 'table-cell',   // position:absolute 指定しているボックスに display:table-cell は効かない 
        verticalAlign: 'middle',
        textAlign: 'center',
        width: '130px',
        height: '130px',
        opacity: '0.5',
        // backgroundColor: 'lightblue',
        cursor: '-moz-grabbing',
        cursor: '-webkit-grabbing',
        cursor: 'pointer',
    },
    danddImage: {
        maxWidth: '130px',
        maxHeight: '130px',
    },
};

export default class TopScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            view: 'false',
            x: 0,
            y: 0,
            type: '',
            value: '',
        };

        this.danddMouseMove = this.danddMouseMove.bind(this);
        this.danddMouseUp   = this.danddMouseUp.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // ドラッグアンドドロップ処理
        if (nextProps.dandd.view == 'true') {
            // イベントの登録
            document.addEventListener('mousemove', this.danddMouseMove, false);
            document.addEventListener('mouseup',   this.danddMouseUp, false);

            this.setState({
                // view: 'true',
                x: nextProps.dandd.x,
                y: nextProps.dandd.y,
                type: nextProps.dandd.type,
                value: nextProps.dandd.value,
            });
        }
    }

    danddMouseMove(e) {
        e.stopPropagation();    // このイベントをこのレイヤーで止める。下レイヤーにある要素にイベントを起こさない
        e.preventDefault();     // ブラウザ標準機能のイベントを抑止する

        // カーソルのページ相対座標を得る
        const [x, y] = Cursor.curPageKiten(e);

        this.setState({
            view: 'true',
            x: x,
            y: y,
        });
    }

    danddMouseUp(e) {
        e.stopPropagation();    // このイベントをこのレイヤーで止める。下レイヤーにある要素にイベントを起こさない
        e.preventDefault();     // ブラウザ標準機能のイベントを抑止する

        // イベントを削除する
        document.removeEventListener('mousemove', this.danddMouseMove);
        document.removeEventListener('mouseup',   this.danddMouseUp);

        this.setState({
            view: 'false',
        });

        // ドロップした座標（SVGイメージ上の座標）を得る
        const [x, y] = Cursor.curElemScaleScrollKiten(
            this.state.x,
            this.state.y,
            document.getElementById('viewbox'),
            this.props.scale / 100
        );

        // ドラッグアンドドロップのドロップ処理
        this.props.danddMouseUp({
            type: this.state.type,
            value: this.state.value,
            x: x,
            y: y,
        });
    }

    toolBoxs() {
        let toolboxs = [];

        for (let i = 0; i < this.props.toolboxs.length; i++) {
            switch (this.props.toolboxs[i].type) {
            case 'scale':   // 拡大縮小ツールボックス
                toolboxs.push(
                    <ToolBoxMap
                        key={this.props.toolboxs[i].toolbox_id}
                        toolbox_id={this.props.toolboxs[i].toolbox_id}
                        x={this.props.toolboxs[i].x}
                        y={this.props.toolboxs[i].y}
                        w={this.props.toolboxs[i].w}
                        h={this.props.toolboxs[i].h}
                        title="拡大縮小"
                    >
                        <ToolBoxScaleMap />
                    </ToolBoxMap>
                );
                break;

            case 'boxdata':   // ボックス情報ツールボックス
                if (this.props.editonoff == 'on') {
                } else {
                    break;
                }

                toolboxs.push(
                    <ToolBoxMap
                        key={this.props.toolboxs[i].toolbox_id}
                        toolbox_id={this.props.toolboxs[i].toolbox_id}
                        x={this.props.toolboxs[i].x}
                        y={this.props.toolboxs[i].y}
                        w={this.props.toolboxs[i].w}
                        h={this.props.toolboxs[i].h}
                        title="ボックス情報"
                    >
                        <ToolBoxBoxDataMap />
                    </ToolBoxMap>
                );
                break;

            case 'textdata':   // テキスト情報ツールボックス
                if (this.props.editonoff == 'on'
                 && this.props.focusbox.type == 'text') {
                } else {
                    break;
                }

                toolboxs.push(
                    <ToolBoxMap
                        key={this.props.toolboxs[i].toolbox_id}
                        toolbox_id={this.props.toolboxs[i].toolbox_id}
                        x={this.props.toolboxs[i].x}
                        y={this.props.toolboxs[i].y}
                        w={this.props.toolboxs[i].w}
                        h={this.props.toolboxs[i].h}
                        title="テキスト情報"
                    >
                        <ToolBoxTextDataMap />
                    </ToolBoxMap>
                );
                break;

            case 'linedata':   // ライン情報ツールボックス
                if (this.props.editonoff == 'on'
                 && this.props.focusbox.type == 'line') {
                } else {
                    break;
                }

                toolboxs.push(
                    <ToolBoxMap
                        key={this.props.toolboxs[i].toolbox_id}
                        toolbox_id={this.props.toolboxs[i].toolbox_id}
                        x={this.props.toolboxs[i].x}
                        y={this.props.toolboxs[i].y}
                        w={this.props.toolboxs[i].w}
                        h={this.props.toolboxs[i].h}
                        title="ライン情報"
                    >
                        <ToolBoxLineDataMap />
                    </ToolBoxMap>
                );
                break;

            case 'sozai':    // 素材リストツールボックス
                if (this.props.editonoff == 'on') {
                } else {
                    break;
                }

                toolboxs.push(
                    <ToolBoxMap
                        key={this.props.toolboxs[i].toolbox_id}
                        toolbox_id={this.props.toolboxs[i].toolbox_id}
                        x={this.props.toolboxs[i].x}
                        y={this.props.toolboxs[i].y}
                        w={this.props.toolboxs[i].w}
                        h={this.props.toolboxs[i].h}
                        title="素材リスト"
                    >
                        <ToolBoxSozaiMap />
                    </ToolBoxMap>
                );
                break;

            case 'link':    // リンクリストツールボックス
                if (true) {
                    break;
                }

                toolboxs.push(
                    <ToolBoxMap
                        key={this.props.toolboxs[i].toolbox_id}
                        toolbox_id={this.props.toolboxs[i].toolbox_id}
                        x={this.props.toolboxs[i].x}
                        y={this.props.toolboxs[i].y}
                        w={this.props.toolboxs[i].w}
                        h={this.props.toolboxs[i].h}
                        title="リンクリスト"
                    >
                        <ToolBoxLinkMap />
                    </ToolBoxMap>
                );
                break;

            case 'presen':    // プレゼン用ツールボックス
                if (true) {
                } else {
                    break;
                }

                toolboxs.push(
                    <ToolBoxMap
                        key={this.props.toolboxs[i].toolbox_id}
                        toolbox_id={this.props.toolboxs[i].toolbox_id}
                        x={this.props.toolboxs[i].x}
                        y={this.props.toolboxs[i].y}
                        w={this.props.toolboxs[i].w}
                        h={this.props.toolboxs[i].h}
                        title="プレゼン用"
                    >
                        <ToolBoxPresenMap />
                    </ToolBoxMap>
                );
                break;

            }
        }

        return toolboxs;
    }

    dandd() {
        let dropobj = [];
        let objstyle = {};
        let children = '';

        if (this.state.view == 'false') {
            return dropobj;
        }

        switch (this.state.type) {
        case 'sozai': // 素材
            switch (this.state.value.type) {
            case 'text': // テキスト
                let text = this.state.value.text;
                if (text.length > 95) {
                    text = text.slice(0, 94) + '...';
                }
                objstyle = styles.danddTextBox;
                children = text;

                break;

            case 'image': // 画像
                objstyle = styles.danddImageBox;
                children = <img
                                src={this.state.value.imageUrl}
                                style={styles.danddImage}
                            />;

                break;
            }

            break;
        }

        dropobj.push(
            <div
                key={1}
                style={{
                    ...objstyle,
                    left: this.state.x - (130 / 2) + 'px',
                    //top:  this.state.y - (130 / 2) + 'px',
                    top:  this.state.y - 15 + 'px',
                }}
            >
                {children}
            </div>
        );

        return dropobj;
    }


    render() {
        return (
            <div
                style={styles.container}
            >
                {/* SVGイメージボックス */}
                <ViewBoxMap />

                {/* ツールボックス */}
                { this.toolBoxs() }

                {/* ドラッグアンドドロップ */}
                { this.dandd() }

            </div>
        );
    }
}
