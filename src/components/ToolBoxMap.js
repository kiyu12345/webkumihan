import { connect } from 'react-redux';

import ToolBox from './ToolBox.js';

import {
    SU_ToolBox_MoveEnd,
} from '../actions_su/toolbox.js';


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

        endMoveBox: (payload) => {
            dispatch.dispatch(SU_ToolBox_MoveEnd(payload));
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
