import { connect } from 'react-redux';

import ToolBoxScale from './ToolBoxScale.js';

import {
    SU_ToolBoxScale_MinButton_Click,
    SU_ToolBoxScale_MaxButton_Click,
    SU_ToolBoxScale_100PerButton_Click,
} from '../actions_su/toolboxscale.js';


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
        scale: state.scale,
        onClickMinButton: () => {
            dispatch.dispatch(SU_ToolBoxScale_MinButton_Click());
        },
        onClickMaxButton: () => {
            dispatch.dispatch(SU_ToolBoxScale_MaxButton_Click());
        },
        onClick100PerButton: () => {
            dispatch.dispatch(SU_ToolBoxScale_100PerButton_Click());
        },
    };
}

// connect
const ToolBoxScaleMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(ToolBoxScale);

export default ToolBoxScaleMap;
