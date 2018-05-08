import React from 'react';

// import Xxxx from './Xxxx.js';

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
                <span>Hello React And Redux</span>
            </div>
        );
    }
}
