import { connect } from 'react-redux';

import TextBox from './TextBox.js';

import {
    SU_FocusBox_Box_Select,
} from '../actions_su/focusbox.js';


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
            dispatch.dispatch(SU_FocusBox_Box_Select(payload));
        },
    };
}

// connect
const TextBoxMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(TextBox);

export default TextBoxMap;