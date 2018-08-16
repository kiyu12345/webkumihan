import { connect } from 'react-redux';

import SelectGroupBox from './SelectGroupBox.js';

import {
    SU_SelectBox_Box_Select,
} from '../actions_su/selectbox.js';

import {
    SU_ContextMenu_Close,
} from '../actions_su/contextmenu.js';

import {
    SU_ToolBox_Focus_Change
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
        onClickBox: (payload) => {
            dispatch.dispatch(SU_SelectBox_Box_Select(payload));
        },

        onToolBoxFocusChange: (payload) => {
            dispatch.dispatch(SU_ToolBox_Focus_Change(payload));
        },
    };
}

// connect
const SelectGroupBoxMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(SelectGroupBox);

export default SelectGroupBoxMap;
