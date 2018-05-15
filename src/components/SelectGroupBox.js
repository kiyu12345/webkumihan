import React from 'react';

import { Zahyo } from '../libs/zahyo.js';
import { Define } from '../define.js';

const style = {

};

export default class SelectGroupBox extends React.Component {
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
        const z = Zahyo.ruToluRectToArea(this.props.x1,
                                         this.props.y1,
                                         this.props.x2,
                                         this.props.y2,
                                         Define.svgimagesize.width,
                                         Define.svgimagesize.height);

        return (
            <g>
                <rect
                    x={z.x}
                    y={z.y}
                    width={z.w}
                    height={z.h}
                    style={{
                        fill: 'blue',
                        fillOpacity: '0.3',
                        //fill: 'none',
                        //stroke: 'blue',
                        //strokeWidth: 2,
                        stroke: 'none',
                    }}

                    onClick={(e) => this.boxClick(e)}
                />
            </g> 
        )
    }
}
