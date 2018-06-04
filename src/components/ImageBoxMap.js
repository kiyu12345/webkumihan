import { connect } from 'react-redux';

import ImageBox from './ImageBox.js';


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
        ...props,
    };
}

// connect
const ImageBoxMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(ImageBox);

export default ImageBoxMap;
