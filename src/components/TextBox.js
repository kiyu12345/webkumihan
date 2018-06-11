import React from 'react';

import { Zahyo } from '../libs/zahyo.js';

import { Font } from '../define.js';

const styles = {
    container: {
        backgroundColor: 'yellow',
    },
}; 

export default class TextBox extends React.Component {
    constructor(props) {
        super(props);
    }

    box() {
        if (this.props.editonoff == 'off') {
            return '';
        }

        return (
            <rect
                x="0"
                y="0"
                width={this.props.width}
                height={this.props.height}
                style={{
                    stroke: 'none',
                    fill: 'lightyellow',
                    opacity: '0.5',
                }}
            />
        )
    }

    textgrid() {
        let ary = [];
        let x, y;

        if (this.props.editonoff == 'off') {
            return '';
        }

        for (let i = 0; i < this.props.textgrid.length; i++) {
            let cj, cg, x, y, size_x, size_y;
            cj = this.props.textgrid[i][0];
            cg = this.props.textgrid[i][1];

            if (this.props.text.kumihoko == 'tate') {
                x = Zahyo.ruToluX(cg, this.props.width);
                y = Zahyo.ruToluY(cj, this.props.height);
                size_x = this.props.text.size_g;
                size_y = this.props.text.size_j;
            } else {
                x = cj;
                y = cg;
                size_x = this.props.text.size_j;
                size_y = this.props.text.size_g;
            }

            ary.push(
                <rect
                    x={x - (size_x / 2)}
                    y={y - (size_y / 2)}
                    width={size_x}
                    height={size_y}
                    style={{
                        stroke: 'lightgray',
                        strokeWidth: '1',
                        fill: 'none',
                    }}
                />
            );
        }

        return ary;
    }

    text() {
        let ary = [];
        let x, y;

        for (let i = 0; i < this.props.textResult.length; i++) {
            let cj, cg, x, y, size_x, size_y;
            cj = this.props.textResult[i].j;
            cg = this.props.textResult[i].g;

            if (this.props.text.kumihoko == 'tate') {
                if (this.props.textResult[i].size_g == 0) {
                    size_x = this.props.text.size_g;
                } else {
                    size_x = this.props.textResult[i].size_g;
                }
                if (this.props.textResult[i].size_j == 0) {
                    size_y = this.props.text.size_j;
                } else {
                    size_y = this.props.textResult[i].size_j;
                }

                x = Zahyo.ruToluX(cg, this.props.width);
                y = Zahyo.ruToluY(cj, this.props.height);
            } else {
                if (this.props.textResult[i].size_j == 0) {
                    size_x = this.props.text.size_j;
                } else {
                    size_x = this.props.textResult[i].size_j;
                }
                if (this.props.textResult[i].size_g == 0) {
                    size_y = this.props.text.size_g;
                } else {
                    size_y = this.props.textResult[i].size_g;
                }

                x = cj;
                y = cg;
            }

            const basesize = (size_x > size_y) ? size_x : size_y;
            let rotate = 0;
            if (this.props.text.kumihoko == 'tate') {
                switch (this.props.textResult[i].moji) {
                case '「':
                case '」':
                case '（':
                case '）':
                case 'ー':
                    rotate = 90;
                }
            }

            ary.push(
                <text
                    // x={x - (size_x / 2)}
                    // y={y + (size_y / 2) - (size_y * 12.5 / 100.0)}
                    x={-1 * (basesize / 2)}
                    y={(basesize / 2) - (basesize * 12.5 / 100.0)}
                    style={{
                        // fontSize: size_x,
                        fontSize: basesize,
                        stroke: 'none',
                        fill: '#333333',
                    }}
                    transform={`translate(${x}, ${y}) scale(${size_x / basesize}, ${size_y / basesize}) rotate(${rotate})`}
                >
                    {this.props.textResult[i].moji}
                </text>
            );
        }

        return ary;
    }


    render() {
        return (
            <g
                id={this.props.id}
                transform={`translate(${this.props.x},${this.props.y})`}
                width={this.props.width}
                height={this.props.height}
                style={styles.container}
            >
                {/* テキストボックスの背景 */}
                {this.box()}

                {/* テキストグリッド */}
                {this.textgrid()}

                {/* テキスト */}
                <g
                    style={{
                        fontFamily: Font.font[this.props.text.font - 1],
                    }}
                >
                    {this.text()}
                </g>
            </g>
        );
    }
}