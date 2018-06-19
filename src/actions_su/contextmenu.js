export const SU_CONTEXTMENU_OPEN  = 'SU_CONTEXTMENU_OPEN';
export const SU_CONTEXTMENU_CLOSE = 'SU_CONTEXTMENU_CLOSE';

export const SU_CONTEXTMENU_NEWTEXTBOXONGROUP = 'SU_CONTEXTMENU_NEWTEXTBOXONGROUP';
export const SU_CONTEXTMENU_NEWTEXTBOX = 'SU_CONTEXTMENU_NEWTEXTBOX';


export const SU_ContextMenu_Open = (payload = {}) => {
    return {
        type: SU_CONTEXTMENU_OPEN,
        payload: {
            x: payload.x,
            y: payload.y,
        },
    };
}

export const SU_ContextMenu_Close = (payload = {}) => {
    return {
        type: SU_CONTEXTMENU_CLOSE,
        payload: {
            
        },
    };
}

export const SU_ContextMenu_NewTextBoxOnGroup = (payload = {}) => {
    return {
        type: SU_CONTEXTMENU_NEWTEXTBOXONGROUP,
        payload: {
            box_id:   payload.box_id,
            group_id: payload.group_id,
        },
    };
}

export const SU_ContextMenu_NewTextBox = (payload = {}) => {
    return {
        type: SU_CONTEXTMENU_NEWTEXTBOX,
        payload: {

        },
    };
}
