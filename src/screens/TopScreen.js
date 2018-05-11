import React from 'react';

import ViewBox from '../components/ViewBox.js';

const styles = {
    container: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: 'skyblue',
        textAlign: 'center',
        width: 'calc(100% - 40px)',
        height: 'calc(100vh - 40px)',
        padding: '20px',
    },
};

export default class TopScreen extends React.Component {
    onBaseClick(e) {
        e.stopPropagation();
        this.props.onBaseClick();
    }

    render() {
        return (
            <div
                style={styles.container}
                onClick={(e) => this.onBaseClick(e)}
            >
                <ViewBox />
            </div>
        );
    }
}
