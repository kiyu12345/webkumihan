import React from 'react';

const styles = {

};

const col_1 = '#f9f9f9';
const col_2 = '#efeff9';
const col_3 = '#f9efef';

export default class Grid extends React.Component {

    yokokei() {
        let html = [];

        for (let i = 0; i <= this.props.height; i += 10) {
            let lw = 1 * 100 / this.props.scale;
            let col = col_1;
            if (i % 50 == 0) {
                lw = 2 * 100 / this.props.scale;
                col = col_2;
            }
            if (i % 100 == 0) {
                lw = 3 * 100/ this.props.scale;
                col = col_3;
            }

            html.push(
                <line
                    x1={0}
                    y1={i}
                    x2={this.props.width}
                    y2={i}
                    strokeWidth={lw}
                    stroke={col}
                />
            );
        }

        return html;
    }

    tatekei() {
        let html = [];

        let j = 0;
        for (let i = this.props.width; i > 0; i -= 10) {
            let lw = 1 * 100 / this.props.scale;
            let col = col_1;
            if (j % 50 == 0) {
                lw = 2 * 100 / this.props.scale;
                col = col_2;
            }
            if (j % 100 == 0) {
                lw = 3 * 100 / this.props.scale;
                col = col_3;
            }

            html.push(
                <line
                    x1={i}
                    y1={0}
                    x2={i}
                    y2={this.props.height}
                    strokeWidth={lw}
                    stroke={col}
                />
            );

            j += 10;
        }

        return html;
    }

    render() {
        return (
            <g>
                   {this.yokokei()}
                   {this.tatekei()}
            </g>
        );
    }
}