import React from 'react';

const styles = {
    container: {
        textAlign: 'left',
        fontSize: '10pt',
    },
    per: {
        textAlign: 'left',
        marginBottom: '10px',
    },
    button: {
        width: '50px',
        height: '20px',
        margin: '0 5px',
    },
};

export default class ToolBoxScale extends React.Component {
    render() {
        return (
            <div
                style={styles.container}
            >
                <div style={styles.per}>{this.props.scale} %</div>
                <button
                    style={styles.button}
                    onClick={() => this.props.onClickMinButton()}
                >
                    縮小
                </button>
                <button
                    style={styles.button}
                    onClick={() => this.props.onClickMaxButton()}
                >
                    拡大
                </button>
                <button
                    style={styles.button}
                    onClick={() => this.props.onClick100PerButton()}
                >
                    100%
                </button>
            </div>
        )
    }
}