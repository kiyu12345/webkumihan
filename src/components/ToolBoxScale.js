import React from 'react';

const styles = {
    container: {
        textAlign: 'left',
    },
    per: {
        width: '40px',
        fontSize: '12px',
        textAlign: 'left',
        lineHeight: '20px',
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
        backgroundColor: 'lightgreen',
        userSelect: 'none',
    },
};

export default class ToolBoxScale extends React.Component {
    render() {
        return (
            <div
                style={styles.container}
            >
                <div style={{
                    ...styles.per,
                    float: 'left',
                }}>
                    {this.props.scale} %
                </div>
                <div
                    style={{
                        ...styles.button,
                        float: 'right',
                    }}
                    onClick={() => this.props.onClick100PerButton()}
                >
                    100%
                </div>
                <div
                    style={{
                        ...styles.button,
                        float: 'right',
                        marginRight: '5px',
                    }}
                    onClick={() => this.props.onClickMaxButton()}
                >
                    拡大
                </div>
                <div
                    style={{
                        ...styles.button,
                        float: 'right',
                        marginRight: '5px',
                    }}
                    onClick={() => this.props.onClickMinButton()}
                >
                    縮小
                </div>
            </div>
        )
    }
}