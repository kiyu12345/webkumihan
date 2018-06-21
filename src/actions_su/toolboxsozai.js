export const SU_TOOLBOXSOZAI_UPDATEBUTTON_CLICK = 'SU_TOOLBOXSOZAI_UPDATEBUTTON_CLICK';
export const SU_TOOLBOXSOZAI_DELETEBUTTON_CLICK = 'SU_TOOLBOXSOZAI_DELETEBUTTON_CLICK';
export const SU_TOOLBOXSOZAI_CREATEBUTTON_CLICK = 'SU_TOOLBOXSOZAI_CREATEBUTTON_CLICK';
export const SU_TOOLBOXSOZAI_SOZAI_SELECT       = 'SU_TOOLBOXSOZAI_SOZAI_SELECT';
export const SU_TOOLBOXSOZAI_SOZAI_TOGGLE       = 'SU_TOOLBOXSOZAI_SOZAI_TOGGLE';


export const SU_ToolBoxSozai_UpdateButton_Click = (payload = {}) => {
    return {
        type: SU_TOOLBOXSOZAI_UPDATEBUTTON_CLICK,
        payload: {
            sozai: payload.sozai,
        },
    };
}

export const SU_ToolBoxSozai_DeleteButton_Click = (payload = {}) => {
    return {
        type: SU_TOOLBOXSOZAI_DELETEBUTTON_CLICK,
        payload: {
            sozai_id: payload.sozai_id,
        },
    };
}

export const SU_ToolBoxSozai_CreateButton_Click = (payload = {}) => {
    return {
        type: SU_TOOLBOXSOZAI_CREATEBUTTON_CLICK,
        payload: {
            sozai_id: payload.sozai_id,
            type: payload.type,
            text: payload.text,
            imageUrl: payload.imageUrl,
        },
    };
}

export const SU_ToolBoxSozai_Sozai_Select = (payload = {}) => {
    return {
        type: SU_TOOLBOXSOZAI_SOZAI_SELECT,
        payload: {
            sozai_id: payload.sozai_id,
        }
    }
}

export const SU_ToolBoxSozai_Sozai_Toggle = (payload = {}) => {
    return {
        type: SU_TOOLBOXSOZAI_SOZAI_TOGGLE,
        payload: {
            sozai_id: payload.sozai_id,
        }
    }
}
