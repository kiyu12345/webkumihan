import React from 'react';

import ViewBox from '../components/ViewBox.js';
// import { Dialog } from 'material-ui';
import ToolBoxMap from '../components/ToolBoxMap.js';
import ToolBoxScaleMap from '../components/ToolBoxScaleMap.js';

const styles = {
    container: {
        position: 'relative',
        fontSize: '20px',
        fontWeight: 'bold',
        color: 'black',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
    },
};

export default class TopScreen extends React.Component {
    onBaseClick(e) {
        e.stopPropagation();
        this.props.onBaseClick();
    }

    toolBoxs() {
        let toolboxs = [];

        for (let i = 0; i < this.props.toolboxs.length; i++) {
            switch (this.props.toolboxs[i].type) {
            case 'scale':   // 拡大縮小ツールボックス
                toolboxs.push(
                    <ToolBoxMap
                        id={this.props.toolboxs[i].id}
                        x={this.props.toolboxs[i].x}
                        y={this.props.toolboxs[i].y}
                        w={this.props.toolboxs[i].w}
                        h={this.props.toolboxs[i].h}
                        title="拡大縮小"
                    >
                        <ToolBoxScaleMap />
                    </ToolBoxMap>
                );
                break;
            }
        }

        return toolboxs;
    }

    render() {
        return (
            <div
                style={styles.container}
                onClick={(e) => this.onBaseClick(e)}
            >
                {/* SVGイメージボックス */}
                <ViewBox />

                {/* ツールボックス */}
                { this.toolBoxs() }
            </div>
        );
    }
}
