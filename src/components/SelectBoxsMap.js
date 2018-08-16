import { connect } from 'react-redux';

import SelectBoxs from './SelectBoxs.js';


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
        // ...props,
        boxs: state.boxs,
        focusbox: state.focusbox,
    };
}

// connect
const SelectBoxsMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(SelectBoxs);

export default SelectBoxsMap;
