export const SU_TOOLBOXSCALE_MINBUTTON_CLICK = 'SU_TOOLBOXSCALE_MINBUTTON_CLICK';
export const SU_TOOLBOXSCALE_MAXBUTTON_CLICK = 'SU_TOOLBOXSCALE_MAXBUTTON_CLICK';
export const SU_TOOLBOXSCALE_100PERBUTTON_CLICK = 'SU_TOOLBOXSCALE_100PERBUTTON_CLICK';


export const SU_ToolBoxScale_MinButton_Click = (payload = {}) => {
    return {
        type: SU_TOOLBOXSCALE_MINBUTTON_CLICK,
        payload: {
        },
    };
}

export const SU_ToolBoxScale_MaxButton_Click = (payload = {}) => {
    return {
        type: SU_TOOLBOXSCALE_MAXBUTTON_CLICK,
        payload: {
        },
    };
}

export const SU_ToolBoxScale_100PerButton_Click = (payload = {}) => {
    return {
        type: SU_TOOLBOXSCALE_100PERBUTTON_CLICK,
        payload: {
        },
    };
}
