import { connect } from 'react-redux';

import ToolBoxPresen from './ToolBoxPresen.js';

import {
    SU_ToolBoxPresen_LayoutCallButton_Click,
    SU_ToolBoxPresen_SozaiCallButton_Click,
    SU_ToolBoxPresen_LinkCallButton_Click,
    
    SU_ToolBoxPresen_EditOnOffButton_Click,
    SU_ToolBoxPresen_LayoutImportButton_Click,
} from '../actions_su/toolboxpresen.js';


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
        
        // onClickMinButton: () => {
        //     dispatch.dispatch(SU_ToolBoxPresen_MinButton_Click());
        // },
        // onClickMaxButton: () => {
        //     dispatch.dispatch(SU_ToolBoxPresen_MaxButton_Click());
        // },
        // onClick100PerButton: () => {
        //     dispatch.dispatch(SU_ToolBoxPresen_100PerButton_Click());
        // },
        boxs: state.boxs,
        onCallLayout: (payload) => {
            dispatch.dispatch(SU_ToolBoxPresen_LayoutCallButton_Click(payload));
        },
        onCallSozai: (payload) => {
            dispatch.dispatch(SU_ToolBoxPresen_SozaiCallButton_Click(payload));
        },
        onCallLink: (payload) => {
            dispatch.dispatch(SU_ToolBoxPresen_LinkCallButton_Click(payload));
        },

        onEditOnClick: () => {
            dispatch.dispatch(SU_ToolBoxPresen_EditOnOffButton_Click({onoff: 'on'}));
        },
        onEditOffClick: () => {
            dispatch.dispatch(SU_ToolBoxPresen_EditOnOffButton_Click({onoff: 'off'}));
        },
        onImportLayout: (payload) => {
            dispatch.dispatch(SU_ToolBoxPresen_LayoutImportButton_Click(payload));
        },
    };
}

// connect
const ToolBoxPresenMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(ToolBoxPresen);

export default ToolBoxPresenMap;
