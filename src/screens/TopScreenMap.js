import { connect } from 'react-redux';

import TopScreen from './TopScreen.js';

import {
    SU_DAndD_MouseUp,
} from '../actions_su/dandd.js';

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
        toolboxs: state.toolboxs,
        dandd: state.dandd,
        scale: state.scale,

        danddMouseUp: (payload) => {
            dispatch.dispatch(SU_DAndD_MouseUp(payload));
        },
    };
}

// connect
const TopScreenMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(TopScreen);

export default TopScreenMap;
