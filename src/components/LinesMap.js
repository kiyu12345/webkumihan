import { connect } from 'react-redux';

import Lines from './Lines.js';

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
        lines: state.lines,
    };
}

// connect
const LinesMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Lines);

export default LinesMap;
