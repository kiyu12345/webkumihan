import React from 'react';

const styles = {

};

export default class Grid extends React.Component {

    yokokei() {
        let html = [];

        for (let i = 0; i <= this.props.height; i += 10) {
            let lw = 1;
            if (i % 50 == 0) {
                lw = 2;
            }
            if (i % 100 == 0) {
                lw = 3;
            }

            html.push(
                <line
                    x1={0}
                    y1={i}
                    x2={this.props.width}
                    y2={i}
                    strokeWidth={lw}
                />
            );
        }

        return html;
    }

    tatekei() {
        let html = [];

        for (let i = 0; i <= this.props.width; i += 10) {
            let lw = 1;
            if (i % 50 == 0) {
                lw = 2;
            }
            if (i % 100 == 0) {
                lw = 3;
            }

            html.push(
                <line
                    x1={i}
                    y1={0}
                    x2={i}
                    y2={this.props.height}
                    strokeWidth={lw}
                />
            );
        }

        return html;
    }

    render() {
        return (
            <g stroke="#f9f9f9">
                   {this.yokokei()}
                   {this.tatekei()}
            </g>
        );
    }
}