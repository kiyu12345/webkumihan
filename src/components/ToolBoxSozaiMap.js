import { connect } from 'react-redux';

import ToolBoxSozai from './ToolBoxSozai.js';

import { Zahyo } from '../libs/zahyo.js';

import {
    SU_ToolBoxSozai_UpdateButton_Click,
    SU_ToolBoxSozai_DeleteButton_Click,
    SU_ToolBoxSozai_CreateButton_Click,
    SU_ToolBoxSozai_Sozai_Toggle,
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

        checkSozaiExist: (id) => {
            for (let i = 0; i < state.sozai.length; i++) {
                if (state.sozai[i].id == id) {
                    return true;
                }
            }

            return false;
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
