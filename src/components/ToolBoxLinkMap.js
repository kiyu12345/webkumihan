import { connect } from 'react-redux';

import ToolBoxLink from './ToolBoxLink.js';

import { Zahyo } from '../libs/zahyo.js';

import {
    SU_ToolBoxLink_CreateButton_Click,
    SU_ToolBoxLink_DeleteButton_Click,
} from '../actions_su/toolboxlink.js';


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
        links: state.links,
        boxs: state.boxs,
        sozai: state.sozai,
        
        onClickCreateButton: (payload) => {
            dispatch.dispatch(SU_ToolBoxLink_CreateButton_Click(payload));
        },
        onClickDeleteButton: (payload) => {
            dispatch.dispatch(SU_ToolBoxLink_DeleteButton_Click(payload));
        },
    };
}

// connect
const ToolBoxLinkMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(ToolBoxLink);

export default ToolBoxLinkMap;
