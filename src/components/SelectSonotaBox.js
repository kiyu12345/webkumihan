import React from 'react';

import { Zahyo } from '../libs/zahyo.js';

const style = {

};

export default class SelectSonotaBox extends React.Component {
    constructor(props) {
        super(props);
    }

    boxClick(e) {
        e.stopPropagation();    // このイベントをこのレイヤーで止める。下レイヤーにある要素にイベントを起こさない
        e.preventDefault();     // ブラウザ標準機能のイベントを抑止する

        this.props.onClickBox({
            id:    this.props.id,
            group: this.props.group,
            no:    this.props.no,
        });
    }


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
                        fill: 'black',
                        fillOpacity: '0.0',
                        stroke: 'none',
                    }}

                    onClick={(e) => this.boxClick(e)}
                />
            </g> 
        )
    }
}