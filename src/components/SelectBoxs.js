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

    selectAllSonotaBox() {
        let selectboxs = [];

        for (let i = 0; i < this.props.boxs.length; i++) {
            selectboxs.push(
                <SelectSonotaBoxMap
                    id={this.props.boxs[i].id}
                    type={this.props.boxs[i].type}
                    x1={this.props.boxs[i].x1}
                    y1={this.props.boxs[i].y1}
                    x2={this.props.boxs[i].x2}
                    y2={this.props.boxs[i].y2}
                    group={this.props.boxs[i].group}
                    no={this.props.boxs[i].no}
                />           
            )
        }

        return selectboxs;
    }

    selectBox() {
        let selectboxs = [];
        let editbox;
        
        for (let i = 0; i < this.props.boxs.length; i++) {
            // 選択したボックス（エディットボックス）の場合は、配列の最後に追加するため、保存
            if (this.props.focusbox.id == this.props.boxs[i].id) {
                editbox = (
                    <SelectEditBoxMap
                        id={this.props.boxs[i].id}
                        type={this.props.boxs[i].type}
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

            // 選択したボックスのグループボックスの場合
            if (this.props.focusbox.group == this.props.boxs[i].group) {
                selectboxs.push(
                    <SelectGroupBoxMap
                        id={this.props.boxs[i].id}
                        type={this.props.boxs[i].type}
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

            // その他のボックスの場合
            selectboxs.push(
                <SelectSonotaBoxMap
                    id={this.props.boxs[i].id}
                    type={this.props.boxs[i].type}
                    x1={this.props.boxs[i].x1}
                    y1={this.props.boxs[i].y1}
                    x2={this.props.boxs[i].x2}
                    y2={this.props.boxs[i].y2}
                    group={this.props.boxs[i].group}
                    no={this.props.boxs[i].no}
                />
            );
        }

        // エディットボックスを最後に追加する
        selectboxs.push(editbox);

        return selectboxs;
    }


    render() {
        let selectboxs;
        if (this.props.focusbox.id == '') {
            selectboxs = this.selectAllSonotaBox();
        } else {
            selectboxs = this.selectBox();
        }

        return (
            <g>
                {selectboxs}
            </g>            
        );
    }
}
