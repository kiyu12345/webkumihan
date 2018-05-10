import React from 'react';

import TextBoxMap from './TextBoxMap.js';

import { Zahyo } from '../libs/zahyo.js';

const styles = {

};

export default class Boxs extends React.Component {
    render() {
        return (
            <g id={this.props.id}>
                {this.props.box.map((obj) => {
                    const z = Zahyo.changeRect1(obj.x1, obj.y1, obj.x2, obj.y2);
                    
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