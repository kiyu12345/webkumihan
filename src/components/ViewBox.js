import React from 'react';

import SvgImageMap from './SvgImageMap.js';

import { Define } from '../define.js';
import ContextMenuMap from './ContextMenuMap.js';

const styles = {
    container: {
        overflow: 'scroll',
        backgroundColor: '#ddd',
        // border: '2px solid red',
        width: '100%',
        height: '100vh',
    },
}

export default class ViewBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contenxtmenuOpenClose: 'close',
            contextmenuX: 0,
            contextmenuY: 0,
        };
    }

    componentDidMount() {
		// // 当コンポーネントの幅と高さをセットする
		// const viewbox = document.getElementById('viewbox');
		// viewbox.addEventListener('resize', (e) => {
		// 	this.viewbox.w = e.srcElement.clientWidth;
		// 	this.viewbox.h = e.srcElement.clientHeight;
		// });

		// // ウィンドウがリサイズした場合のイベント処理
		// window.onresize = () => {
		// 	// viewboxにresizeイベントを発行する
		// 	let event = new CustomEvent("resize");
		// 	viewbox.dispatchEvent(event);	// イベントトリガー
		// }

		// // 初回に１度だけ、viewboxにresizeイベントを発行する
		// let event = new CustomEvent("resize");
		// viewbox.dispatchEvent(event);	// イベントトリガー
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            contextmenuOpenClose: nextProps.contextmenu.openclose,
            contextmenuX: nextProps.contextmenu.x,
            contextmenuY: nextProps.contextmenu.y,
        });
    }

    contextMenu() {
        let contextmenu = '';

        if (this.state.contextmenuOpenClose == 'open') {
            contextmenu = (
                <ContextMenuMap
                    x={this.state.contextmenuX}
                    y={this.state.contextmenuY}
                />
            );
        }

        return contextmenu;
    }

  
    render() {
        return (
            <div
                id="viewbox"
                style={{
                    ...styles.container,
                    ...this.props.style,
                }}
                onContextMenu={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    
                    // エディットモードがONの場合のみ、コンテキストメニューを出す
                    if (this.props.editonoff == 'on') {
                        this.props.onContextMenu({
                            x: e.pageX,
                            y: e.pageY,
                        });
                    }
                }}
            >
                <SvgImageMap
                    width={Define.svgimagesize.width}
                    height={Define.svgimagesize.height}
                />

                {this.contextMenu()}
            </div>
        );
    }
}
