export const SU_TOOLBOXPRESEN_LAYOUTCALLBUTTON_CLICK = 'SU_TOOLBOXPRESEN_LAYOUTCALLBUTTON_CLICK';
export const SU_TOOLBOXPRESEN_SOZAICALLBUTTON_CLICK = 'SU_TOOLBOXPRESEN_SOZAICALLBUTTON_CLICK';

export const SU_ToolBoxPresen_LayoutCallButton_Click = (payload = {}) => {
    return {
        type: SU_TOOLBOXPRESEN_LAYOUTCALLBUTTON_CLICK,
        payload: {
            pattern: payload.pattern,
        },
    };
}

export const SU_ToolBoxPresen_SozaiCallButton_Click = (payload = {}) => {
    return {
        type: SU_TOOLBOXPRESEN_SOZAICALLBUTTON_CLICK,
        payload: {
            pattern: payload.pattern,
        },
    };
}