export const SU_CONTEXTMENU_OPEN  = 'SU_CONTEXTMENU_OPEN';
export const SU_CONTEXTMENU_CLOSE = 'SU_CONTEXTMENU_CLOSE';

export const SU_CONTEXTMENU_NEWBOXTEXT = 'SU_CONTEXTMENU_NEWBOXTEXT';
export const SU_CONTEXTMENU_NEWBOXIMAGE = 'SU_CONTEXTMENU_NEWBOXIMAGE';
export const SU_CONTEXTMENU_COPYBOXTEXTONGROUP = 'SU_CONTEXTMENU_COPYBOXTEXTONGROUP';
export const SU_CONTEXTMENU_COPYBOXTEXT = 'SU_CONTEXTMENU_COPYBOXTEXT';
export const SU_CONTEXTMENU_COPYBOXIMAGE = 'SU_CONTEXTMENU_COPYBOXIMGE';
export const SU_CONTEXTMENU_SOZAIUNLINK = 'SU_CONTEXTMENU_SOZAIUNLINK';
export const SU_CONTEXTMENU_BOXREMOVE = 'SU_CONTEXTMENU_BOXREMOVE';
export const SU_CONTEXTMENU_BOXTOFRONT = 'SU_CONTEXTMENU_BOXTOFRONT';
export const SU_CONTEXTMENU_BOXTOBACK = 'SU_CONTEXTMENU_BOXTOBACK';


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

export const SU_ContextMenu_NewBoxText = (payload = {}) => {
    return {
        type: SU_CONTEXTMENU_NEWBOXTEXT,
        payload: {
            cur_x: payload.cur_x,
            cur_y: payload.cur_y,
        },
    };
}

export const SU_ContextMenu_NewBoxImage = (payload = {}) => {
    return {
        type: SU_CONTEXTMENU_NEWBOXIMAGE,
        payload: {
            cur_x: payload.cur_x,
            cur_y: payload.cur_y,
        },
    };
}

export const SU_ContextMenu_CopyBoxTextOnGroup = (payload = {}) => {
    return {
        type: SU_CONTEXTMENU_COPYBOXTEXTONGROUP,
        payload: {
            cur_x: payload.cur_x,
            cur_y: payload.cur_y,
            box_id: payload.box_id,
            group_id: payload.group_id,
        },
    };
}

export const SU_ContextMenu_CopyBoxText = (payload = {}) => {
    return {
        type: SU_CONTEXTMENU_COPYBOXTEXT,
        payload: {
            cur_x: payload.cur_x,
            cur_y: payload.cur_y,
            box_id: payload.box_id,
        },
    };
}

export const SU_ContextMenu_CopyBoxImage = (payload = {}) => {
    return {
        type: SU_CONTEXTMENU_COPYBOXIMAGE,
        payload: {
            cur_x: payload.cur_x,
            cur_y: payload.cur_y,
            box_id: payload.box_id,
        },
    };
}

export const SU_ContextMenu_SozaiUnlink = (payload = {}) => {
    return {
        type: SU_CONTEXTMENU_SOZAIUNLINK,
        payload: {
            group_id: payload.group_id,
        },
    };
}

export const SU_ContextMenu_BoxRemove = (payload = {}) => {
    return {
        type: SU_CONTEXTMENU_BOXREMOVE,
        payload: {
            box_id: payload.box_id,
        },
    };
}

export const SU_ContextMenu_BoxToFront = (payload = {}) => {
    return {
        type: SU_CONTEXTMENU_BOXTOFRONT,
        payload: {
            box_id: payload.box_id,
        },
    };
}

export const SU_ContextMenu_BoxToBack = (payload = {}) => {
    return {
        type: SU_CONTEXTMENU_BOXTOBACK,
        payload: {
            box_id: payload.box_id,
        },
    };
}
