import { connect } from 'react-redux';

import HandleR from './HandleR.js';

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
        // onHandleR: (xxx) => {
        //     .....
        //     dispatch.dispatch(SU_HandleRxx_HandleRx_HandleR());
        // },
        ...props,
        scale: state.scale,
    };
}

// connect
const HandleRMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(HandleR);

export default HandleRMap;
