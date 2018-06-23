import { connect } from 'react-redux';

import ToolBoxTextData from './ToolBoxTextData.js';

import { Box } from '../libs/box.js';

import {
    SU_ToolBoxTextData_UpdateButton_Click,
} from '../actions_su/toolboxtextdata.js';


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
    // フォーカスされているボックス情報
    const box = Box.getBox(state.boxs, state.focusbox.box_id);

    return {
        // xxx: yyy,
        // onXxxx: (xxx) => {
        //     .....
        //     dispatch.dispatch(SU_Xxxxxx_Xxxxx_Xxxx());
        // },
        // ...props,
        box: box,
        onClickUpdateButton: (payload) => {
            dispatch.dispatch(SU_ToolBoxTextData_UpdateButton_Click(payload));
        },
    };
}

// connect
const ToolBoxTextDataMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(ToolBoxTextData);

export default ToolBoxTextDataMap;
