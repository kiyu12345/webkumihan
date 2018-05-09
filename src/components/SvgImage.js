import React from 'react';

const styles = {
    container: {
        backgroundColor: 'lightgray',
    },
};

export default class SvgImage extends React.Component {
    render() {
        return (
            <svg
                width={this.props.width}
                height={this.props.height}
                viewBox={`0 0 ${this.props.width} ${this.props.height}`}
                style={styles.container}
            >
                <rect x="250" y="0" width="250" height="250" fill="yellow" />
            </svg>
        );
    }
}