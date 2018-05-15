import { connect } from 'react-redux';

import HandleU from './HandleU.js';

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
        // onHandleU: (xxx) => {
        //     .....
        //     dispatch.dispatch(SU_HandleUxx_HandleUx_HandleU());
        // },
        ...props,
        scale: state.scale,
    };
}

// connect
const HandleUMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(HandleU);

export default HandleUMap;
