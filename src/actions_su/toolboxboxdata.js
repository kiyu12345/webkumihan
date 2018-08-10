export const SU_TOOLBOXBOXDATA_UPDATEBUTTON_CLICK = 'SU_TOOLBOXBOXDATA_UPDATEBUTTON_CLICK';
export const SU_TOOLBOXBOXDATA_DELETEBUTTON_CLICK = 'SU_TOOLBOXBOXDATA_DELETEBUTTON_CLICK';
export const SU_TOOLBOXBOXDATA_CREATEBUTTON_CLICK = 'SU_TOOLBOXBOXDATA_CREATEBUTTON_CLICK';


export const SU_ToolBoxBoxData_UpdateButton_Click = (payload = {}) => {
    return {
        type: SU_TOOLBOXBOXDATA_UPDATEBUTTON_CLICK,
        payload: {
            box_id: payload.box_id,
            group_id: payload.group_id,
            group_no: payload.group_no,
        },
    };
}

export const SU_ToolBoxBoxData_DeleteButton_Click = (payload = {}) => {
    return {
        type: SU_TOOLBOXBOXDATA_DELETEBUTTON_CLICK,
        payload: {
            box_id: payload.box_id,
        },
    };
}

export const SU_ToolBoxBoxData_CreateButton_Click = (payload = {}) => {
    return {
        type: SU_TOOLBOXBOXDATA_CREATEBUTTON_CLICK,
        payload: {
            type: payload.type,
        },
    };
}
