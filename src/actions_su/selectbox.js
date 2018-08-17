export const SU_SELECTBOX_BOX_NONSELECT   = 'SU_SELECTBOX_BOX_NONSELECT';
export const SU_SELECTBOX_BOX_SELECT      = 'SU_SELECTBOX_BOX_SELECT';

export const SU_SELECTBOX_EDITBOX_MOVEEND = 'SU_SELECTBOX_EDITBOX_MOVEEND';
export const SU_SELECTBOX_EDITBOX_CHANGESIZE = 'SU_SELECTBOX_EDITBOX_CHANGESIZE';
export const SU_SELECTBOX_EDITBOX_DELETEKEYPRESS = 'SU_SELECTBOX_EDITBOX_DELETEKEYPRESS';


export const SU_SelectBox_Box_NonSelect = (payload = {}) => {
    return {
        type: SU_SELECTBOX_BOX_NONSELECT,
        payload: {
            box_id:    0,
            group_id: '',
            group_no:  0,
            type:     '',
        },
    };
}

export const SU_SelectBox_Box_Select = (payload = {}) => {
    return {
        type: SU_SELECTBOX_BOX_SELECT,
        payload: {
            box_id:   payload.box_id,
            group_id: payload.group_id,
            group_no: payload.group_no,
            type:     payload.type,
        },
    };
}

export const SU_SelectBox_EditBox_MoveEnd = (payload = {}) => {
    return {
        type: SU_SELECTBOX_EDITBOX_MOVEEND,
        payload: {
            box_id: payload.box_id,
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
            box_id: payload.box_id,
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
            group_id: payload.group_id,
        },
    };
}

