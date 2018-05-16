import React from 'react';

import SelectEditBoxMap   from './SelectEditBoxMap.js';
import SelectGroupBoxMap  from './SelectGroupBoxMap.js';
import SelectSonotaBoxMap from './SelectSonotaBoxMap.js';

const styles = {

};

export default class SelectBoxs extends React.Component {
    constructor(props) {
        super(props);
    }

    selectBox() {
        let selectboxs = [];
        let grouptype;
        
        for (let i = 0; i < this.props.boxs.length; i++) {
            // 未選択状態の場合は、全てその他ボックス
            if (this.props.focusbox.id == '') {
                selectboxs.push(
                    <SelectSonotaBoxMap
                        boxid={this.props.boxs[i].id}
                        x1={this.props.boxs[i].x1}
                        y1={this.props.boxs[i].y1}
                        x2={this.props.boxs[i].x2}
                        y2={this.props.boxs[i].y2}
                        group={this.props.boxs[i].group}
                        no={this.props.boxs[i].no}
                    />
                );

                continue;
            }

            // 選択したボックスの場合
            if (this.props.focusbox.id == this.props.boxs[i].id) {
                selectboxs.push(
                    <SelectEditBoxMap
                        boxid={this.props.boxs[i].id}
                        x1={this.props.boxs[i].x1}
                        y1={this.props.boxs[i].y1}
                        x2={this.props.boxs[i].x2}
                        y2={this.props.boxs[i].y2}
                        group={this.props.boxs[i].group}
                        no={this.props.boxs[i].no}
                    />
                )

                continue;
            }

            // 選択したボックスのグループボックスの場合
            // if (this.props.focusbox.group == this.props.boxs[i].group) {
            //     selectboxs.push(
            //         <SelectGroupBoxMap
            //             boxid={this.props.boxs[i].id}
            //             x1={this.props.boxs[i].x1}
            //             y1={this.props.boxs[i].y1}
            //             x2={this.props.boxs[i].x2}
            //             y2={this.props.boxs[i].y2}
            //             group={this.props.boxs[i].group}
            //             no={this.props.boxs[i].no}
            //         />
            //     );

            //     continue;
            // }

            if (this.props.focusbox.group == this.props.boxs[i].group) {
                grouptype = 'same';
            } else {
                grouptype = 'diff';
            }

            // その他のボックスの場合
            selectboxs.push(
                <SelectSonotaBoxMap
                    boxid={this.props.boxs[i].id}
                    x1={this.props.boxs[i].x1}
                    y1={this.props.boxs[i].y1}
                    x2={this.props.boxs[i].x2}
                    y2={this.props.boxs[i].y2}
                    group={this.props.boxs[i].group}
                    no={this.props.boxs[i].no}
                    grouptype={grouptype}
                />
            );
        }

        return selectboxs;
    }


    render() {
        return (
            <g>
                {this.selectBox()}
            </g>            
        );
    }
}
