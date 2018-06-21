import { connect } from 'react-redux';

import LineBox from './LineBox.js';

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
        // onLineBox: (xxx) => {
        //     .....
        //     dispatch.dispatch(SU_LineBoxxx_LineBoxx_LineBox());
        // },
        ...props,
        editonoff: state.editonoff,
    };
}

// connect
const LineBoxMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(LineBox);

export default LineBoxMap;
