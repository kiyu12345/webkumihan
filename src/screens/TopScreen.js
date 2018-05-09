import React from 'react';

import ImageBox from '../components/ImageBox.js';

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
    render() {
        return (
            <div style={styles.container}>
                <ImageBox
                    style={{
                        width: '500px',
                        height: '750px',
                    }}
                />
            </div>
        );
    }
}
