import React from 'react';

const styles = {
    container: {
        backgroundColor: 'yellow',
    },
}; 

export default class TextBox extends React.Component {
    constructor(props) {
        super(props);
    }

    box() {
        return (
            <rect
                x="0"
                y="0"
                width={this.props.width}
                height={this.props.height}
                style={{
                    stroke: 'none',
                    fill: 'lightyellow',
                }}
            />
        )
    }

    render() {
        return (
            <g
                id={this.props.id}
                transform={`translate(${this.props.x},${this.props.y})`}
                width={this.props.width}
                height={this.props.height}
                style={styles.container}
            >
                {this.box()}
                <text x="0" y="20" fill="#000">あ</text>
            </g>
        );
    }
}