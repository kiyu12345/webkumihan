import React from 'react';

import HouganshiSvgImage from './HouganshiSvgImage.js';

const styles = {
    container: {
        overflow: 'hidden',
        border: '2px solid red',
    }
}

export default class ImageBox extends React.Component {
    render() {
        return (
            <div
                style={{
                    ...styles.container,
                    ...this.props.style,
                }}
            >
                <HouganshiSvgImage
                    width="500"
                    height="750"
                />
            </div>
        );
    }
}
