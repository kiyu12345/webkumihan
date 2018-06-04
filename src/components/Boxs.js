import React from 'react';

import TextBoxMap from './TextBoxMap.js';
import ImageBoxMap from './ImageBoxMap.js';

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
                        return (
                            <TextBoxMap
                                id={box.id}
                                x={z.x}
                                y={z.y}
                                width={z.w}
                                height={z.h}
                                group={box.group}
                                no={box.no}

                                text={box.text}
                                textgrid={box.textgrid}
                                textResult={box.textResult}
                            />
                        );

                    case 'image':
                        return (
                            <ImageBoxMap
                                id={box.id}
                                x={z.x}
                                y={z.y}
                                width={z.w}
                                height={z.h}
                                group={box.group}
                                no={box.no}
                            />
                        );
                    }
                })}
            </g>            
        )
    }
}