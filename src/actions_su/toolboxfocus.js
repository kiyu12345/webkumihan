export const SU_TOOLBOX_FOCUS_CHANGE  = 'SU_TOOLBOX_FOCUS_CHANGE';


export const SU_ToolBox_Focus_Change = (payload = {}) => {
    return {
        type: SU_TOOLBOX_FOCUS_CHANGE,
        payload: {
            focus: payload.focus,  // 'in' or 'out'
        },
    };
}


