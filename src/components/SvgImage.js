import React from 'react';

import Grid from './Grid.js';
import BoxsMap from './BoxsMap.js';
// import LinesMap from './LinesMap.js';
import SelectBoxsMap from './SelectBoxsMap.js';

import { Define, Font } from '../define.js';
import { Zahyo } from '../libs/zahyo.js';

// import { Cursor } from '../libs/zahyo.js';
// import { O_DIRECT } from 'constants';

const styles = {
    container: {
        backgroundColor: '#fff',
        boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.4)',
    },
};

export default class SvgImage extends React.Component {
    rinkakusen() {
        let html = [];

        const rz = Zahyo.ruToluRectToArea(
            Define.rinkakusen.x1,
            Define.rinkakusen.y1,
            Define.rinkakusen.x2,
            Define.rinkakusen.y2,
            Define.svgimagesize.width,
            Define.svgimagesize.height
        );

        html.push(
            <rect
                key={1}
                x={rz.x}
                y={rz.y}
                width={rz.w}
                height={rz.h}
                style={{
                    stroke: '#333',
                    strokeWidth: 0.5,
                    fill: 'none',
                }}
            />
        );

        return html;
    }

    render() {
        let grid = '';
        let selectbox = '';
        if (this.props.editonoff == 'on') {
            grid = <Grid
                        width={this.props.width}
                        height={this.props.height}
                        scale={this.props.scale}
                    />;
            selectbox = <SelectBoxsMap />;
        }

        return (
            <svg
                xmlns="http://www.w3.org/2000/svg" version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={this.props.width * this.props.scale / 100}
                height={this.props.height * this.props.scale / 100}
                viewBox={`0 0 ${this.props.width} ${this.props.height}`}
                style={{
                    ...styles.container,
                }}
            >
                <defs>
                    <style type="text/css">
                        {Font.fontface}
                    </style>
                </defs>

                {/* グリッドの描画 */}
                {grid}

                {/* 輪郭線の描画 */}
                {this.rinkakusen()}

                {/* ボックスの描画 */}
                <BoxsMap />

                {/* 罫線の描画 */}
                {/* <LinesMap /> */}
                
                {/* 選択ボックスの描画 */}
                {selectbox}
            </svg>
        );
    }
}