import { connect } from 'react-redux';

import ContextMenu from './ContextMenu.js';

import {
    SU_ContextMenu_Close,
    SU_ContextMenu_NewTextBoxOnGroup,
    SU_ContextMenu_NewTextBox,
} from '../actions_su/contextmenu.js';


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
        // onContextMenu: (xxx) => {
        //     .....
        //     dispatch.dispatch(SU_ContextMenuxx_ContextMenux_ContextMenu());
        // },
        ...props,
        focusbox: state.focusbox,

        closeContextMenu: () => {
            dispatch.dispatch(SU_ContextMenu_Close());
        },

        createTextBoxOnGroup: (payload) => {
            dispatch.dispatch(SU_ContextMenu_NewTextBoxOnGroup(payload));
        },
        createTextBox: () => {
            dispatch.dispatch(SU_ContextMenu_NewTextBox());
        },
    };
}

// connect
const ContextMenuMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(ContextMenu);

export default ContextMenuMap;
