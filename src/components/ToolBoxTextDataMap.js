import { connect } from 'react-redux';

import ToolBoxTextData from './ToolBoxTextData.js';

import { Zahyo } from '../libs/zahyo.js';

import {
    SU_ToolBoxTextData_UpdateButton_Click,
} from '../actions_su/toolboxtextdata.js';


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
    // フォーカスされているボックス情報
    let box = {
        id: '',
        text: {
            kumihoko: '',
            padding_js: '',
            padding_je: '',
            padding_gs: '',
            padding_ge: '',
            size_j: '',
            size_g: '',
            gyokan: '',
        },
    }
    if (state.focusbox.id != '') {
        for (let i = 0; i < state.boxs.length; i++) {
            if (state.boxs[i].id == state.focusbox.id) {
                const z = Zahyo.changeRectToArea(state.boxs[i].x1,
                                                 state.boxs[i].y1,
                                                 state.boxs[i].x2,
                                                 state.boxs[i].y2);
                box = state.boxs[i];
                box.x = z.x;
                box.y = z.y;
                box.w = z.w;
                box.h = z.h;

                break;
            }
        }
    }

    return {
        // xxx: yyy,
        // onXxxx: (xxx) => {
        //     .....
        //     dispatch.dispatch(SU_Xxxxxx_Xxxxx_Xxxx());
        // },
        // ...props,
        box: box,
        onClickUpdateButton: (payload) => {
            dispatch.dispatch(SU_ToolBoxTextData_UpdateButton_Click(payload));
        },
    };
}

// connect
const ToolBoxTextDataMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(ToolBoxTextData);

export default ToolBoxTextDataMap;
