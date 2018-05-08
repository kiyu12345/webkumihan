import { connect } from 'react-redux';

import TopScreen from './TopScreen.js';

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
    };
}

// connect
const TopScreenMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(TopScreen);

export default TopScreenMap;
