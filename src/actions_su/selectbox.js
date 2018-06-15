export const SU_SELECTBOX_BOX_NONSELECT   = 'SU_SELECTBOX_BOX_NONSELECT';
export const SU_SELECTBOX_BOX_SELECT      = 'SU_SELECTBOX_BOX_SELECT';

export const SU_SELECTBOX_EDITBOX_MOVEEND = 'SU_SELECTBOX_EDITBOX_MOVEEND';
export const SU_SELECTBOX_EDITBOX_CHANGESIZE = 'SU_SELECTBOX_EDITBOX_CHANGESIZE';
export const SU_SELECTBOX_EDITBOX_DELETEKEYPRESS = 'SU_SELECTBOX_EDITBOX_DELETEKEYPRESS';


export const SU_SelectBox_Box_NonSelect = (payload = {}) => {
    return {
        type: SU_SELECTBOX_BOX_NONSELECT,
        payload: {
            id:    null,
            type:  '',
            group: '',
            no:    0,
        },
    };
}

export const SU_SelectBox_Box_Select = (payload = {}) => {
    return {
        type: SU_SELECTBOX_BOX_SELECT,
        payload: {
            id:    payload.id,
            type:  payload.type,
            group: payload.group,
            no:    payload.no,
        },
    };
}

export const SU_SelectBox_EditBox_MoveEnd = (payload = {}) => {
    return {
        type: SU_SELECTBOX_EDITBOX_MOVEEND,
        payload: {
            id: payload.id,
            x1: payload.x1,
            y1: payload.y1,
            x2: payload.x2,
            y2: payload.y2,
        },
    };
}

export const SU_SelectBox_EditBox_ChangeSize = (payload = {}) => {
    return {
        type: SU_SELECTBOX_EDITBOX_CHANGESIZE,
        payload: {
            id: payload.id,
            x1: payload.x1,
            y1: payload.y1,
            x2: payload.x2,
            y2: payload.y2,
        },
    };
}

export const SU_SelectBox_EditBox_DeleteKeyPress = (payload = {}) => {
    return {
        type: SU_SELECTBOX_EDITBOX_DELETEKEYPRESS,
        payload: {
            group: payload.group,
        },
    };
}
