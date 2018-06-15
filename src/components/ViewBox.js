import React from 'react';

import SvgImageMap from './SvgImageMap.js';

import { Define } from '../define.js';

const styles = {
    container: {
        overflow: 'scroll',
        backgroundColor: '#ddd',
        // border: '2px solid red',
        width: '100%',
        height: '100vh',
    }
}

export default class ViewBox extends React.Component {
    constructor(props) {
        super(props);
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

  
    render() {
        return (
            <div
                id="viewbox"
                style={{
                    ...styles.container,
                    ...this.props.style,
                }}
            >
                <SvgImageMap
                    width={Define.svgimagesize.width}
                    height={Define.svgimagesize.height}
                />
            </div>
        );
    }
}
