import { connect } from 'react-redux';

import HandleL from './HandleL.js';

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
        // onHandleL: (xxx) => {
        //     .....
        //     dispatch.dispatch(SU_HandleLxx_HandleLx_HandleL());
        // },
        ...props,
        scale: state.scale,
    };
}

// connect
const HandleLMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(HandleL);

export default HandleLMap;
