export const SU_TOOLBOXBOXDATA_UPDATEBUTTON_CLICK = 'SU_TOOLBOXBOXDATA_UPDATEBUTTON_CLICK';


export const SU_ToolBoxBoxData_UpdateButton_Click = (payload = {}) => {
    return {
        type: SU_TOOLBOXBOXDATA_UPDATEBUTTON_CLICK,
        payload: {
            box: payload.box,
        },
    };
}
