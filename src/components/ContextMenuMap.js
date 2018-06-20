import { connect } from 'react-redux';

import ContextMenu from './ContextMenu.js';

import {
    SU_ContextMenu_Close,
    SU_ContextMenu_NewBoxText,
    SU_ContextMenu_NewBoxImage,
    SU_ContextMenu_CopyBoxTextOnGroup,
    SU_ContextMenu_CopyBoxText,
    SU_ContextMenu_CopyBoxImage,
    SU_ContextMenu_SozaiUnlink,
    SU_ContextMenu_BoxRemove,
    SU_ContextMenu_BoxToFront,
    SU_ContextMenu_BoxToBack,
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
        scale: state.scale,

        closeContextMenu: () => {
            dispatch.dispatch(SU_ContextMenu_Close());
        },

        newBoxText: (payload) => {
            dispatch.dispatch(SU_ContextMenu_NewBoxText(payload));
        },
        newBoxImage: (payload) => {
            dispatch.dispatch(SU_ContextMenu_NewBoxImage(payload));
        },
        copyBoxTextOnGroup: (payload) => {
            dispatch.dispatch(SU_ContextMenu_CopyBoxTextOnGroup(payload));
        },
        copyBoxText: (payload) => {
            dispatch.dispatch(SU_ContextMenu_CopyBoxText(payload));
        },
        copyBoxImage: (payload) => {
            dispatch.dispatch(SU_ContextMenu_CopyBoxImage(payload));
        },
        sozaiUnlink: (payload) => {
            dispatch.dispatch(SU_ContextMenu_SozaiUnlink(payload));
        },
        boxRemove: (payload) => {
            dispatch.dispatch(SU_ContextMenu_BoxRemove(payload));
        },
        boxToFront: (payload) => {
            dispatch.dispatch(SU_ContextMenu_BoxToFront(payload));
        },
        boxToBack: (payload) => {
            dispatch.dispatch(SU_ContextMenu_BoxToBack(payload));
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
