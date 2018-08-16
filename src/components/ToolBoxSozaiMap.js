import { connect } from 'react-redux';

import ToolBoxSozai from './ToolBoxSozai.js';

import {
    SU_ToolBoxSozai_UpdateButton_Click,
    SU_ToolBoxSozai_DeleteButton_Click,
    SU_ToolBoxSozai_CreateButton_Click,
    SU_ToolBoxSozai_Sozai_Toggle,
} from '../actions_su/toolboxsozai.js';

import {
    SU_DAndD_MouseDown,
} from '../actions_su/dandd.js';


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
        sozai: state.sozai,

        onClickSozaiList: (payload) => {
            dispatch.dispatch(SU_ToolBoxSozai_Sozai_Toggle(payload));
        },
        onClickUpdateButton: (payload) => {
            dispatch.dispatch(SU_ToolBoxSozai_UpdateButton_Click(payload));
        },
        onClickDeleteButton: (payload) => {
            dispatch.dispatch(SU_ToolBoxSozai_DeleteButton_Click(payload));
        },
        onClickCreateButton: (payload) => {
            dispatch.dispatch(SU_ToolBoxSozai_CreateButton_Click(payload));
        },

        checkSozaiExist: (sozai_id) => {
            for (let i = 0; i < state.sozai.length; i++) {
                if (state.sozai[i].sozai_id == sozai_id) {
                    return true;
                }
            }

            return false;
        },

        sozaiMouseDown: (payload) => {
            dispatch.dispatch(SU_DAndD_MouseDown(payload));
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
