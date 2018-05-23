import React from 'react';

import ViewBox from '../components/ViewBox.js';
// import { Dialog } from 'material-ui';
import ToolBoxMap from '../components/ToolBoxMap.js';
import ToolBoxScaleMap from '../components/ToolBoxScaleMap.js';
import ToolBoxBoxDataMap from '../components/ToolBoxBoxDataMap.js';
import ToolBoxTextDataMap from '../components/ToolBoxTextDataMap.js';
import ToolBoxSozaiMap from '../components/ToolBoxSozaiMap.js';
import ToolBoxLinkMap from '../components/ToolBoxLinkMap.js';

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
    toolBoxs() {
        let toolboxs = [];

        for (let i = 0; i < this.props.toolboxs.length; i++) {
            switch (this.props.toolboxs[i].type) {
            case 'scale':   // 拡大縮小ツールボックス
                if (this.props.toolboxs[i].view == 'false') {
                    break;
                }
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

            case 'boxdata':   // ボックス情報ツールボックス
                if (this.props.toolboxs[i].view == 'false') {
                    break;
                }
                toolboxs.push(
                    <ToolBoxMap
                        id={this.props.toolboxs[i].id}
                        x={this.props.toolboxs[i].x}
                        y={this.props.toolboxs[i].y}
                        w={this.props.toolboxs[i].w}
                        h={this.props.toolboxs[i].h}
                        title="ボックス情報"
                    >
                        <ToolBoxBoxDataMap />
                    </ToolBoxMap>
                );
                break;

            case 'textdata':   // テキスト情報ツールボックス
                if (this.props.toolboxs[i].view == 'false') {
                    break;
                }
                toolboxs.push(
                    <ToolBoxMap
                        id={this.props.toolboxs[i].id}
                        x={this.props.toolboxs[i].x}
                        y={this.props.toolboxs[i].y}
                        w={this.props.toolboxs[i].w}
                        h={this.props.toolboxs[i].h}
                        title="ﾎﾞｯｸｽﾃｷｽﾄ情報"
                    >
                        <ToolBoxTextDataMap />
                    </ToolBoxMap>
                );
                break;

            case 'sozai':    // 素材リストツールボックス
                if (this.props.toolboxs[i].view == 'false') {
                    break;
                }
                toolboxs.push(
                    <ToolBoxMap
                        id={this.props.toolboxs[i].id}
                        x={this.props.toolboxs[i].x}
                        y={this.props.toolboxs[i].y}
                        w={this.props.toolboxs[i].w}
                        h={this.props.toolboxs[i].h}
                        title="素材リスト"
                    >
                        <ToolBoxSozaiMap />
                    </ToolBoxMap>
                );
                break;

            case 'link':    // リンクリストツールボックス
                if (this.props.toolboxs[i].view == 'false') {
                    break;
                }
                toolboxs.push(
                    <ToolBoxMap
                        id={this.props.toolboxs[i].id}
                        x={this.props.toolboxs[i].x}
                        y={this.props.toolboxs[i].y}
                        w={this.props.toolboxs[i].w}
                        h={this.props.toolboxs[i].h}
                        title="リンクリスト"
                    >
                        <ToolBoxLinkMap />
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
            >
                {/* SVGイメージボックス */}
                <ViewBox />

                {/* ツールボックス */}
                { this.toolBoxs() }
            </div>
        );
    }
}
