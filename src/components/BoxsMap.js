import { connect } from 'react-redux';

import Boxs from './Boxs.js';

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
        boxs: state.boxs,
        editonoff: state.editonoff,
    };
}

// connect
const BoxsMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Boxs);

export default BoxsMap;
