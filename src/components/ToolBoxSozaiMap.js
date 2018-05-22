import { connect } from 'react-redux';

import ToolBoxSozai from './ToolBoxSozai.js';

import { Zahyo } from '../libs/zahyo.js';

import {
    SU_ToolBoxSozai_UpdateButton_Click,
    SU_ToolBoxSozai_DeleteButton_Click,
} from '../actions_su/toolboxsozai.js';


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
console.log(state);
    return {
        // xxx: yyy,
        // onXxxx: (xxx) => {
        //     .....
        //     dispatch.dispatch(SU_Xxxxxx_Xxxxx_Xxxx());
        // },
        // ...props,
        sozai: state.sozai,
        onClickUpdateButton: (payload) => {
            dispatch.dispatch(SU_ToolBoxSozai_UpdateButton_Click(payload));
        },
        onClickDeleteButton: (payload) => {
            dispatch.dispatch(SU_ToolBoxSozai_DeleteButton_Click(payload));
        },
    };
}

// connect
const ToolBoxSozaiMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(ToolBoxSozai);

export default ToolBoxSozaiMap;
