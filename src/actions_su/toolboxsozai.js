export const SU_TOOLBOXSOZAI_UPDATEBUTTON_CLICK = 'SU_TOOLBOXSOZAI_UPDATEBUTTON_CLICK';
export const SU_TOOLBOXSOZAI_DELETEBUTTON_CLICK = 'SU_TOOLBOXSOZAI_DELETEBUTTON_CLICK';
export const SU_TOOLBOXSOZAI_CREATEBUTTON_CLICK = 'SU_TOOLBOXSOZAI_CREATEBUTTON_CLICK';


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
            id: payload.id,
        },
    };
}

export const SU_ToolBoxSozai_CreateButton_Click = (payload = {}) => {
    return {
        type: SU_TOOLBOXSOZAI_CREATEBUTTON_CLICK,
        payload: {
            id: payload.id,
            type: payload.type,
            text: payload.text,
            image: payload.image,
        },
    };
}
