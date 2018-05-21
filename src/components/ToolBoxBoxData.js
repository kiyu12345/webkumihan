import React from 'react';

const styles = {
    container: {
        textAlign: 'left',
    },
    line: {
        height: '20px',
        fontSize: '12px',
        lineHeight: '20px',
    },
    button: {
        width: '40px',
        height: '14px',
        fontSize: '12px',
        textAlign: 'center',
        lineHeight: '14px',
        border: '1px solid gray',
        backgroundColor: 'lightgreen',
        borderRadius: '2px',
    },
    input: {
        height: '14px',
    },
};

export default class ToolBoxBoxData extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            group: props.box.group,
            no: props.box.no,
        };
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            group: nextProps.box.group,
            no: nextProps.box.no,
        });
    }

    clickUpdateButton() {
        let box = this.props.box;

        box.id = this.props.box.id;
        box.group = this.state.group;
        box.no = this.state.no;

        this.props.onClickUpdateButton({
            box: box,
        });
    }


    render() {
        return (
            <div
                style={styles.container}
            >
                <div
                    style={{
                        ...styles.line
                    }}
                >
                    ボックスID: <span style={{fontWeight: 'bold', color: 'blue'}}>{this.props.box.id}</span>
                </div>
                <div
                    style={{
                        ...styles.line
                    }}
                >
                    ｸﾞﾙｰﾌﾟ名 <input
                                type="text"
                                value={this.state.group}
                                style={{...styles.input, width: '50px'}}
                                onChange={(e) => this.setState({group: e.target.value})}
                            />
                    &nbsp;
                    No.<input
                            type="text"
                            value={this.state.no}
                            style={{...styles.input, width: '20px'}}
                            onChange={(e) => this.setState({no: parseInt(e.target.value)})}
                        />
                </div>
                <div
                    style={{
                        ...styles.line,
                    }}
                >
                    x:{this.props.box.x} y:{this.props.box.y} w:{this.props.box.w} h:{this.props.box.h}
                </div>
                <div
                    style={{
                        ...styles.line,
                    }}
                >
                    <div
                        style={{
                            ...styles.button,
                            float: 'right',
                        }}
                        onClick={() => this.clickUpdateButton()}
                    >
                        更新
                    </div>
                </div>
            </div>
        )
    }
}