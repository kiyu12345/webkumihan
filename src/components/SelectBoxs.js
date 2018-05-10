import React from 'react';

import EditBoxMap from './EditBoxMap.js'; 

const styles = {

};

export default class SelectBoxs extends React.Component {
    constructor(props) {
        super(props);
    }

    selectBox() {
        for (let i = 0; i < this.props.boxs.length; i++) {
            if (this.props.focusbox.id == this.props.boxs[i].id) {
                return (
                    <EditBoxMap
                        id={this.props.box[i].id}
                        x1={this.props.box[i].x1}
                        y1={this.props.box[i].y1}
                        x2={this.props.box[i].x2}
                        y2={this.props.box[i].y2}
                    />
                );
            }
        }

        return '';
    }

    render() {
        return (
            <g id={'SelectBox_' + this.props.focusbox.id}>
                {this.selectBox()}
            </g>            
        )
    }
}