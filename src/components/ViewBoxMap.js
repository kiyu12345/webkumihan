import { connect } from 'react-redux';

import ViewBox from './ViewBox.js';

import {
    SU_ContextMenu_Open, SU_CONTEXTMENU_CLOSE, SU_ContextMenu_Close,
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
        // onXxxx: (xxx) => {
        //     .....
        //     dispatch.dispatch(SU_Xxxxxx_Xxxxx_Xxxx());
        // },
        // ...props,
        contextmenu: state.contextmenu,
        onContextMenu: (payload) => {
            dispatch.dispatch(SU_ContextMenu_Open(payload));
        },
        onContextMenuClose: () => {
            dispatch.dispatch(SU_ContextMenu_Close());
        },
    };
}

// connect
const ViewBoxMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(ViewBox);

export default ViewBoxMap;
