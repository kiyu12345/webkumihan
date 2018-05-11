import { connect } from 'react-redux';

import SelectEditBox from './SelectEditBox.js';

import {
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
        id: props.id,
        x1: props.x1,
        y1: props.y1,
        x2: props.x2,
        y2: props.y2,
        group: props.group,
        no: props.no,

        endMoveBox: (payload) => {
            dispatch.dispatch(SU_SelectBox_EditBox_MoveEnd(payload));
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
