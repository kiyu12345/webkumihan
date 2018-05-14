import { connect } from 'react-redux';

import SvgImage from './SvgImage.js';


// mapStateToProps
const mapStateToProps = (state, props) => {
    return {
        ...state,
    };
}

// mapDispatchToProps
const mapDispatchToProps = (dispatch, props) => {
    return {
        dispatch,
    };
}

// mergeProps 
const mergeProps = (state, dispatch, props) => {
    return {
        // xxx: yyy,
        // onXxxx: (xxx) => {
        //     .....
        //     dispatch.dispatch(SU_Xxxxxx_Xxxxx_Xxxx());
        // },
        width: props.width,
        height: props.height,
        scale: state.scale,
    };
}

// connect
const SvgImageMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(SvgImage);

export default SvgImageMap;
