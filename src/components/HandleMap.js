import { connect } from 'react-redux';

import Handle from './Handle.js';

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
        //     dispatch.dispatch(SU_xxxxx_xxxxx_xxxxx());
        // },
        ...props,
        scale: state.scale,
    };
}

// connect
const HandleMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Handle);

export default HandleMap;
