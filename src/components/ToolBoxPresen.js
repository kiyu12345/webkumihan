import React from 'react';

const styles = {
    container: {
        textAlign: 'left',
    },
    button: {
        marginTop: '2px',
        width: '38px',
        height: '14px',
        textAlign: 'center',
        fontSize: '12px',
        lineHeight: '14px',
        border: '1px solid #333',
        borderRadius: '2px',
        backgroundColor: 'lightblue',
        userSelect: 'none',
        cursor: 'pointer',
    },
};

export default class ToolBoxPresen extends React.Component {
    render() {
        return (
            <div
                style={styles.container}
            >
                <div
                    style={{
                        ...styles.button,
                        float: 'left',
                    }}
                    onClick={() => this.props.onCallLayoutA({pattern: 'A'})}
                >
                    lay A
                </div>
            </div>
        )
    }
}