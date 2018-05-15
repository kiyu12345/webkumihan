import React from 'react';

import TextBoxMap from './TextBoxMap.js';

import { Define } from '../define.js';
import { Zahyo } from '../libs/zahyo.js';

const styles = {

};

export default class Boxs extends React.Component {
    render() {
        return (
            <g id={this.props.id}>
                {this.props.boxs.map((obj) => {
                    const z = Zahyo.ruToluRectToArea(obj.x1,
                                                     obj.y1,
                                                     obj.x2,
                                                     obj.y2,
                                                     Define.svgimagesize.width,
                                                     Define.svgimagesize.height);
                    
                    switch (obj.type) {
                    case 'text':
                        return (
                            <TextBoxMap
                                id={obj.id}
                                x={z.x}
                                y={z.y}
                                width={z.w}
                                height={z.h}
                                group={obj.group}
                                no={obj.no}
                            />
                        );

                    case 'image':
                        return '';
                    }
                })}
            </g>            
        )
    }
}