export const SU_TOOLBOXLINK_CREATEBUTTON_CLICK = 'SU_TOOLBOXLINK_CREATEBUTTON_CLICK';
export const SU_TOOLBOXLINK_DELETEBUTTON_CLICK = 'SU_TOOLBOXLINK_DELETEBUTTON_CLICK';


export const SU_ToolBoxLink_CreateButton_Click = (payload = {}) => {
    return {
        type: SU_TOOLBOXLINK_CREATEBUTTON_CLICK,
        payload: {
            group_id: payload.group_id,
            sozai_id: payload.sozai_id,
        },
    };
}

export const SU_ToolBoxLink_DeleteButton_Click = (payload = {}) => {
    return {
        type: SU_TOOLBOXLINK_DELETEBUTTON_CLICK,
        payload: {
            group_id: payload.group_id,
        },
    };
}
