import React from 'react';

import { Zahyo } from '../libs/zahyo.js';
import { Define } from '../define.js';

const styles = {

};

const col_1 = '#f9f9f9';
const col_2 = '#efeff9';
const col_3 = '#f9efef';

export default class Grid extends React.Component {

    yokokei() {
        let html = [];

        for (let y = 0; y <= this.props.height; y += Define.grid.height) {
            let lw = 1 * 100 / this.props.scale;
            let col = col_1;
            if (y % (Define.grid.height * 5) == 0) {
                lw = 2 * 100 / this.props.scale;
                col = col_2;
            }
            if (y % (Define.grid.height * 10) == 0) {
                lw = 3 * 100/ this.props.scale;
                col = col_3;
            }

            html.push(
                <line
                    key={y}
                    x1={0}
                    y1={Zahyo.luToruY(y, this.props.height)}
                    x2={this.props.width}
                    y2={Zahyo.luToruY(y, this.props.height)}
                    strokeWidth={lw}
                    stroke={col}
                />
            );
        }

        return html;
    }

    tatekei() {
        let html = [];

        for (let x = 0; x < this.props.width; x += Define.grid.width) {
            let lw = 1 * 100 / this.props.scale;
            let col = col_1;
            if (x % (Define.grid.width * 5) == 0) {
                lw = 2 * 100 / this.props.scale;
                col = col_2;
            }
            if (x % (Define.grid.width * 10) == 0) {
                lw = 3 * 100 / this.props.scale;
                col = col_3;
            }

            html.push(
                <line
                    key={x}
                    x1={Zahyo.luToruX(x, this.props.width)}
                    y1={0}
                    x2={Zahyo.luToruX(x, this.props.width)}
                    y2={this.props.height}
                    strokeWidth={lw}
                    stroke={col}
                />
            );
        }

        return html;
    }

    render() {
        return (
            <g>
                {this.yokokei()}
                {this.tatekei()}
            </g>
        );
    }
}