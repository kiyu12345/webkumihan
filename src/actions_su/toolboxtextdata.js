export const SU_TOOLBOXTEXTDATA_UPDATEBUTTON_CLICK = 'SU_TOOLBOXTEXTDATA_UPDATEBUTTON_CLICK';


export const SU_ToolBoxTextData_UpdateButton_Click = (payload = {}) => {
    return {
        type: SU_TOOLBOXTEXTDATA_UPDATEBUTTON_CLICK,
        payload: {
            box: payload.box,
        },
    };
}
