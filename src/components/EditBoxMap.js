import { connect } from 'react-redux';

import EditBox from './EditBox.js';

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
    };
}

// connect
const EditBoxMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(EditBox);

export default EditBoxMap;
