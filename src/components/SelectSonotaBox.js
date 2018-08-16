import React from 'react';

import { Zahyo } from '../libs/zahyo.js';
import { Define } from '../define.js';

const styles = {

};

export default class SelectSonotaBox extends React.Component {
    constructor(props) {
        super(props);

        this.boxClick = this.boxClick.bind(this);
    }

    componentDidMount() {
        document.getElementById(`selectbox_${this.props.box_id}`).addEventListener('click', this.boxClick, false);
    }

    boxClick(e) {
        e.stopPropagation();    // このイベントをこのレイヤーで止める。下レイヤーにある要素にイベントを起こさない
        e.preventDefault();     // ブラウザ標準機能のイベントを抑止する

        // ツールボックスのフォーカスをアウトにする
        this.props.onToolBoxFocusChange({focus: 'out'});

        this.props.onClickBox({
            box_id:   this.props.box_id,
            group_id: this.props.group_id,
            group_no: this.props.group_no,
            type:     this.props.type,
        });

        return false;
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
                    id={`selectbox_${this.props.box_id}`}
                    x={z.x}
                    y={z.y}
                    width={z.w}
                    height={z.h}
                    style={{
                        fill: 'black',
                        fillOpacity: '0.0',
                        //fill: 'none',
                        //stroke: 'blue',
                        //strokeWidth: 2,
                        stroke: 'none',
                    }}

                    // onMouseUp={(e) => this.boxClick(e)}
                />
            </g> 
        )
    }
}
