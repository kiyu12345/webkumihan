import { connect } from 'react-redux';

import Xxxx from './Xxxx.js';

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
    };
}

// connect
const XxxxMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Xxxx);

export default XxxxMap;
