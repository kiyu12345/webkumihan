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

    button2: {
        marginTop: '2px',
        width: '38px',
        height: '14px',
        textAlign: 'center',
        fontSize: '12px',
        lineHeight: '14px',
        border: '1px solid #333',
        borderRadius: '2px',
        backgroundColor: 'lightgreen',
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
                    onClick={() => this.props.onCallLayout({pattern: 'A'})}
                >
                    lay A
                </div>
                <div
                    style={{
                        ...styles.button,
                        float: 'left',
                        marginLeft: '5px',
                    }}
                    onClick={() => this.props.onCallLayout({pattern: 'B'})}
                >
                    lay B
                </div>

                <div
                    style={{
                        ...styles.button,
                        float: 'right',
                        marginRight: '0px',
                    }}
                    onClick={() => this.props.onEditOnClick()}
                >
                    E On
                </div>
                <div style={{clear: 'both'}}></div>


                <div
                    style={{
                        ...styles.button2,
                        float: 'left',
                    }}
                    onClick={() => this.props.onCallSozai({pattern: 'A'})}
                >
                    Soz A
                </div>
                <div
                    style={{
                        ...styles.button2,
                        float: 'left',
                        marginLeft: '5px',
                    }}
                    onClick={() => this.props.onCallSozai({pattern: 'B'})}
                >
                    Soz B
                </div>

                <div
                    style={{
                        ...styles.button,
                        float: 'right',
                        marginRight: '0px',
                    }}
                    onClick={() => this.props.onEditOffClick()}
                >
                    E Off
                </div>
                <div style={{clear: 'both'}}></div>

                <div
                    style={{
                        ...styles.button2,
                        float: 'left',
                        marginLeft: '45px',
                        backgroundColor: 'lightyellow',
                    }}
                    onClick={() => this.props.onCallLink({pattern: 'B'})}
                >
                    Lik B
                </div>
                <div style={{clear: 'both'}}></div>
            </div>
        )
    }
}