import React from 'react';

import { Base64 } from '../libs/base64.js';

const styles = {
    container: {
        //backgroundColor: 'yellow',
    },
}; 

export default class ImageBox extends React.Component {
    constructor(props) {
        super(props);

        this.imageobj = new Image;

        this.imageurl = props.image.url;

        this.state = {
            base64: '',
        };

        if (props.image.url != '') {
            this.imageload();
        }
    }

    componentWillReceiveProps(nextProps) {
        this.imageurl = nextProps.image.url;

        if (this.imageurl != '') {
            this.imageload();
        } else {
            this.setState({
                base64: '',
            });
        }
    }

    imageload() {
        //this.imageobj.crossOrigin = 'anonymous';
        this.imageobj.src = this.imageurl;

        // MimeType を取得
        const mimetype = Base64.getMimeType(this.imageurl);

        this.imageobj.onload = () => {
            this.setState({
                base64: Base64.ImageToBase64(this.imageobj, mimetype),
            });
        }
    }

    box() {
        if (this.props.editonoff == 'off') {
            return '';
        }
        
        return (
            <rect
                x="0"
                y="0"
                width={this.props.width}
                height={this.props.height}
                style={{
                    stroke: 'none',
                    fill: 'lightpink',
                    opacity: '0.3',
                }}
            />
        )
    }

    image() {
        if (this.state.base64 == '') {
            return '';
        }

        return (
            <image
                x="0"
                y="0"
                width={this.props.width}
                height={this.props.height}
                // xlinkHref={this.props.image.url}
                xlinkHref={this.state.base64}
                preserveAspectRatio={'xMidYMid meet'}
            />
        )
    }


    render() {
        return (
            <g
                id={this.props.box_id}
                transform={`translate(${this.props.x},${this.props.y})`}
                width={this.props.width}
                height={this.props.height}
                style={styles.container}
            >
                {/* イメージボックスの背景 */}
                {this.box()}

                {/* イメージ */}
                {this.image()}
            </g>
        );
    }
}