import { connect } from 'react-redux';

import ToolBox from './ToolBox.js';

import {
    SU_ToolBox_MoveEnd,
} from '../actions_su/toolbox.js';

import {
    SU_ToolBox_Focus_Change,
} from '../actions_su/toolboxfocus.js';

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
        toolboxfocus: state.toolboxfocus,

        endMoveBox: (payload) => {
            dispatch.dispatch(SU_ToolBox_MoveEnd(payload));
        },

        onFocusChange: (payload) => {
            dispatch.dispatch(SU_ToolBox_Focus_Change(payload));
        },
    };
}

// connect
const ToolBoxMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(ToolBox);

export default ToolBoxMap;
