import React from 'react';

import Grid from './Grid.js';
import BoxsMap from './BoxsMap.js';
import LinesMap from './LinesMap.js';
import SelectBoxsMap from './SelectBoxsMap.js';

const styles = {
    container: {
        backgroundColor: '#fff',
    },
};

export default class SvgImage extends React.Component {
    render() {
        let grid = '';
        let selectbox = '';
        if (this.props.editonoff == 'on') {
            grid = <Grid
                        width={this.props.width}
                        height={this.props.height}
                        scale={this.props.scale}
                    />;
            selectbox = <SelectBoxsMap />;
        }

        return (
            <svg
                width={this.props.width * this.props.scale / 100}
                height={this.props.height * this.props.scale / 100}
                viewBox={`0 0 ${this.props.width} ${this.props.height}`}
                style={styles.container}
            >

                {/* グリッドの描画 */}
                {grid}

                {/* ボックスの描画 */}
                <BoxsMap />

                {/* 罫線の描画 */}
                <LinesMap />
                
                {/* 選択ボックスの描画 */}
                {selectbox}
            </svg>
        );
    }
}