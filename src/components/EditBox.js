import React from 'react';

import Zahyo from '../libs/zahyo.js';

const style = {

};

export default class EditBox extends React.Component {
    render() {
        const z = Zahyo.changeRect1(this.props.x1,
                                    this.props.y1,
                                    this.props.x2,
                                    this.props.y2);

        return (
            <g>
                <rect
                    x={z.x}
                    y={z.y}
                    width={z.w}
                    height={z.h}
                    style={{
                        stroke: 'red',
                        strokeWidth: 2,
                    }}
                />
            </g> 
        )
    }
}