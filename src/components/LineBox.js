import React from 'react';

import { Define, Line } from '../define.js';

const styles = {
    container: {
        backgroundColor: 'yellow',
    },
}; 

export default class LineBox extends React.Component {
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
                    fill: 'lightcyan',
                    opacity: '0.3',
                }}
            />
        )
    }

    line() {
        let html = [];

        const box_x = this.props.x;
        const box_y = this.props.y;
        const box_w = this.props.width;
        const box_h = this.props.height;
        const linedata = this.props.line;
        let sx, sy, ex, ey;

        if (this.props.line.hoko == 'tate') {   // 縦罫
            sx = box_w / 2;
            sy = 0;
            ex = sx;
            ey = box_h;

            sy = sy + linedata.padding_s;
            ey = ey - linedata.padding_e;
        } else {                                // 横罫
            sx = box_w;
            sy = box_h / 2;
            ex = 0;
            ey = sy;

            sx = sx - linedata.padding_s;
            ex = ex + linedata.padding_e;
        }

        // 線種
        let linestyle = {};
        switch (Line[linedata.kind].type) {
        case 'solid':
            html.push(
                <line
                    x1={sx}
                    y1={sy}
                    x2={ex}
                    y2={ey}
                    style={{
                        stroke: linedata.color,
                        strokeWidth: linedata.width,
                        fill: 'none',
                        ...linestyle,
                    }}
                />
            );
            break;
        case 'dash':
            linestyle = {
                strokeDasharray: Line[linedata.kind].pattern,
            };
            html.push(
                <line
                    x1={sx}
                    y1={sy}
                    x2={ex}
                    y2={ey}
                    style={{
                        stroke: linedata.color,
                        strokeWidth: linedata.width,
                        fill: 'none',
                        ...linestyle,
                    }}
                />
            );
            break;
        case 'double':
            if (this.props.line.hoko == 'tate') {   // 縦罫
                html.push(
                    <line
                        x1={sx - (Line[linedata.kind].space / 2)}
                        y1={sy}
                        x2={ex - (Line[linedata.kind].space / 2)}
                        y2={ey}
                        style={{
                            stroke: linedata.color,
                            strokeWidth: linedata.width,
                            fill: 'none',
                            ...linestyle,
                        }}
                    />
                );
                html.push(
                    <line
                        x1={sx + (Line[linedata.kind].space / 2)}
                        y1={sy}
                        x2={ex + (Line[linedata.kind].space / 2)}
                        y2={ey}
                        style={{
                            stroke: linedata.color,
                            strokeWidth: linedata.width,
                            fill: 'none',
                            ...linestyle,
                        }}
                    />
                );
            } else {                                // 横罫
                html.push(
                    <line
                        x1={sx}
                        y1={sy - (Line[linedata.kind].space / 2)}
                        x2={ex}
                        y2={ey - (Line[linedata.kind].space / 2)}
                        style={{
                            stroke: linedata.color,
                            strokeWidth: linedata.width,
                            fill: 'none',
                            ...linestyle,
                        }}
                    />
                );
                html.push(
                    <line
                        x1={sx}
                        y1={sy + (Line[linedata.kind].space / 2)}
                        x2={ex}
                        y2={ey + (Line[linedata.kind].space / 2)}
                        style={{
                            stroke: linedata.color,
                            strokeWidth: linedata.width,
                            fill: 'none',
                            ...linestyle,
                        }}
                    />
                );
            }
            break;
        }

        return html;
    }


    render() {
        return (
            <g
                id={`box_${this.props.box_id}`}
                transform={`translate(${this.props.x},${this.props.y})`}
                width={this.props.width}
                height={this.props.height}
                style={styles.container}
            >
                {/* ラインボックスの背景 */}
                {this.box()}

                {/* ライン */}
                {this.line()}
            </g>
        );
    }
}