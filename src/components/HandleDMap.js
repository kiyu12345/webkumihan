import { connect } from 'react-redux';

import HandleD from './HandleD.js';

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
        // onHandleD: (xxx) => {
        //     .....
        //     dispatch.dispatch(SU_HandleDxx_HandleDx_HandleD());
        // },
        ...props,
        scale: state.scale,
    };
}

// connect
const HandleDMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(HandleD);

export default HandleDMap;
