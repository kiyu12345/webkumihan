import { connect } from 'react-redux';

import SelectEditBox from './SelectEditBox.js';

import {
    SU_SelectBox_Box_NonSelect,
    SU_SelectBox_EditBox_MoveEnd,
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

        onClickBase: () => {
console.log('Non Select');
            dispatch.dispatch(SU_SelectBox_Box_NonSelect());
        }
    };
}

// connect
const SelectEditBoxMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(SelectEditBox);

export default SelectEditBoxMap;
