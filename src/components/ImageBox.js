import React from 'react';

import { Zahyo } from '../libs/zahyo.js';

const styles = {
    container: {
        backgroundColor: 'yellow',
    },
}; 

export default class ImageBox extends React.Component {
    constructor(props) {
        super(props);
    }

    box() {
        if (this.props.editonoff == 'off') {
            return '';
        }
        
        return (
            <rect
                x="0"
                y="0"
                width={this.props.width}
                height={this.props.height}
                style={{
                    stroke: 'none',
                    fill: 'lightcyan',
                    opacity: '0.5',
                }}
            />
        )
    }

    image() {
        return (
            <image
                x="0"
                y="0"
                width={this.props.width}
                height={this.props.height}
                xlinkHref={this.props.image.url}
                preserveAspectRatio={'xMidYMid meet'}
            />
        )
    }


    render() {
        return (
            <g
                id={this.props.box_id}
                transform={`translate(${this.props.x},${this.props.y})`}
                width={this.props.width}
                height={this.props.height}
                style={styles.container}
            >
                {/* イメージボックスの背景 */}
                {this.box()}

                {/* イメージ */}
                {this.image()}
            </g>
        );
    }
}