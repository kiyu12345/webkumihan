import { connect } from 'react-redux';

import TopScreen from './TopScreen.js';

import {
    SU_FocusBox_Non_Select,
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
        onBaseClick: () => {
            dispatch.dispatch(SU_FocusBox_Non_Select());
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
