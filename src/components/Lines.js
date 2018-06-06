import React from 'react';

import { Define } from '../define.js';
import { Zahyo } from '../libs/zahyo.js';

const styles = {

};

export default class Lines extends React.Component {
    render() {
        return (
            <g id={this.props.id}>
                {this.props.lines.map((line) => {
                    switch (line.type) {
                    case 'rect':
                        const rz = Zahyo.ruToluRectToArea(line.x1,
                                                          line.y1,
                                                          line.x2,
                                                          line.y2,
                                                          Define.svgimagesize.width,
                                                          Define.svgimagesize.height);
                        return (
                            <rect
                                x={rz.x}
                                y={rz.y}
                                width={rz.w}
                                height={rz.h}
                                style={{
                                    stroke: line.color,
                                    strokeWidth: line.width,
                                    fill: 'none',
                                }}
                            />
                        );

                    case 'line':
                        const lz = Zahyo.ruToluRect(line.x1,
                                                    line.y1,
                                                    line.x2,
                                                    line.y2,
                                                    Define.svgimagesize.width,
                                                    Define.svgimagesize.height);
                        return (
                            <line
                                x1={lz.x1}
                                y1={lz.y1}
                                x2={lz.x2}
                                y2={lz.y2}
                                style={{
                                    stroke: line.color,
                                    strokeWidth: line.width,
                                    fill: 'none',
                                }}
                            />
                        );
                    }
                })}
            </g>            
        )
    }
}
