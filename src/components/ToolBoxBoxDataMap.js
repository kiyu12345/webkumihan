import { connect } from 'react-redux';

import ToolBoxBoxData from './ToolBoxBoxData.js';

import { Zahyo } from '../libs/zahyo.js';
import { Box } from '../libs/box.js';

import {
    SU_ToolBoxBoxData_UpdateButton_Click,
    SU_ToolBoxBoxData_DeleteButton_Click,
    SU_ToolBoxBoxData_CreateButton_Click,
} from '../actions_su/toolboxboxdata.js';


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
        type: '',
        group: '',
        no: '',
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
            dispatch.dispatch(SU_ToolBoxBoxData_UpdateButton_Click(payload));
        },
        onClickDeleteButton: (payload) => {
            dispatch.dispatch(SU_ToolBoxBoxData_DeleteButton_Click(payload));
        },
        onClickCreateButton: (payload) => {
            dispatch.dispatch(SU_ToolBoxBoxData_CreateButton_Click(payload));
        },

        checkKizonId: (id) => {
            for (let i = 0; i < state.boxs.length; i++) {
                if (state.boxs[i].id == id) {
                    return true;
                }
            }

            return false;
        },
        isSameGroupAndNo: (group, no) => {
            const box_id = Box.getBoxId(state.boxs, group, no);
            if (box_id != '') {
                return true;
            }

            return false;
        },
        isSameGroup: (group) => {
            const groupNoAry = Box.getGroupNoAry(state.boxs, group);
            if (groupNoAry.length > 0) {
                return true;
            }

            return false;
        },
    };
}

// connect
const ToolBoxBoxDataMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(ToolBoxBoxData);

export default ToolBoxBoxDataMap;
