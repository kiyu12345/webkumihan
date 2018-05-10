import React from 'react';

import ViewBox from '../components/ViewBox.js';

const styles = {
    container: {
        padding: '20px',
        fontSize: '20px',
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: 'skyblue',
        textAlign: 'center',
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
                <ViewBox
                    style={{
                        width: '500px',
                        height: '750px',
                    }}
                />
            </div>
        );
    }
}
