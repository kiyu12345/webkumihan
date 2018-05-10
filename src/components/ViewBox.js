import React from 'react';

import SvgImage from './SvgImage.js';

const styles = {
    container: {
        overflow: 'hidden',
        border: '2px solid red',
    }
}

export default class ViewBox extends React.Component {
    render() {
        return (
            <div
                style={{
                    ...styles.container,
                    ...this.props.style,
                }}
            >
                <SvgImage
                    width="500"
                    height="750"
                />
            </div>
        );
    }
}
