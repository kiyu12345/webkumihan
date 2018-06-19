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
        box_id: '',
        group_id: '',
        group_no: '',
        type: '',
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
    if (state.focusbox.box_id != '') {
        for (let i = 0; i < state.boxs.length; i++) {
            if (state.boxs[i].box_id == state.focusbox.box_id) {
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

        checkKizonId: (box_id) => {
            for (let i = 0; i < state.boxs.length; i++) {
                if (state.boxs[i].box_id == box_id) {
                    return true;
                }
            }

            return false;
        },
        isSameGroupAndNo: (group_id, group_no) => {
            const box_id = Box.getBoxId(state.boxs, group_id, group_no);
            if (box_id != '') {
                return true;
            }

            return false;
        },
        isSameGroup: (group_id) => {
            const groupNoAry = Box.getGroupNoAry(state.boxs, group_id);
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
