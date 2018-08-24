import React from 'react';

import TextBoxMap from './TextBoxMap.js';
import ImageBoxMap from './ImageBoxMap.js';
import LineBoxMap from './LineBoxMap.js';

import { Define } from '../define.js';
import { Zahyo } from '../libs/zahyo.js';

const styles = {

};

export default class Boxs extends React.Component {
    render() {
        return (
            <g id={this.props.id}>
                {this.props.boxs.map((box) => {
                    const z = Zahyo.ruToluRectToArea(box.x1,
                                                     box.y1,
                                                     box.x2,
                                                     box.y2,
                                                     Define.svgimagesize.width,
                                                     Define.svgimagesize.height);
                    
                    switch (box.type) {
                    case 'text':
                        let afure = '';
                        let x, y;
                        if (box.text.afure > 0) {
                            if (box.text.kumihoko == 'tate') {
                                x = z.x;
                                y = z.y + z.h;
                            } else {
                                x = z.x + z.w - 15;
                                y = z.y + z.h;
                            }

                            afure = <text
                                        x={x}
                                        y={y}
                                        style={{
                                            fontSize: 11,
                                            stroke: 'none',
                                            fill: 'red',
                                            opacity: '0.8',
                                        }}
                                    >
                                        {box.text.afure}
                                    </text>;
                        }

                        if (this.props.editonoff == 'off') {
                            afure = '';
                        }

                        return (
                            <g key={box.box_id}>
                                <TextBoxMap
                                    box_id={box.box_id}
                                    group_id={box.group_id}
                                    group_no={box.group_no}
                                    x={z.x}
                                    y={z.y}
                                    width={z.w}
                                    height={z.h}

                                    text={box.text}
                                />
                                {afure}
                            </g>
                        );

                    case 'image':
                        return (
                            <ImageBoxMap
                                key={box.box_id}
                                box_id={box.box_id}
                                group_id={box.group_id}
                                group_no={box.group_no}
                                x={z.x}
                                y={z.y}
                                width={z.w}
                                height={z.h}

                                image={box.image}
                            />
                        );

                    case 'line':
                        return (
                            <LineBoxMap
                                key={box.box_id}
                                box_id={box.box_id}
                                group_id={box.group_id}
                                group_no={box.group_no}
                                x={z.x}
                                y={z.y}
                                width={z.w}
                                height={z.h}

                                line={box.line}
                            />
                        );
                    }
                })}
            </g>            
        )
    }
}