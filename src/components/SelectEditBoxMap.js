import { connect } from 'react-redux';

import SelectEditBox from './SelectEditBox.js';

import {
    SU_SelectBox_Box_NonSelect,
    SU_SelectBox_EditBox_MoveEnd,
    SU_SelectBox_EditBox_ChangeSize,
    SU_SelectBox_EditBox_DeleteKeyPress,
} from '../actions_su/selectbox.js';

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
        scale: state.scale,

        endMoveBox: (payload) => {
            dispatch.dispatch(SU_SelectBox_EditBox_MoveEnd(payload));
        },
        endChangeSizeBox: (payload) => {
            dispatch.dispatch(SU_SelectBox_EditBox_ChangeSize(payload));
        },

        onClickBase: () => {
            dispatch.dispatch(SU_SelectBox_Box_NonSelect());
        },

        sozaiDelete: (payload) => {
            dispatch.dispatch(SU_SelectBox_EditBox_DeleteKeyPress(payload));
        },
    };
}

// connect
const SelectEditBoxMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(SelectEditBox);

export default SelectEditBoxMap;
