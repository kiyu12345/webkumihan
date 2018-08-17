export const SAGA_SELECTBOX_BOX_NONSELECT   = 'SAGA_SELECTBOX_BOX_NONSELECT';
export const SAGA_SELECTBOX_BOX_SELECT      = 'SAGA_SELECTBOX_BOX_SELECT';

export const SAGA_SELECTBOX_EDITBOX_MOVEEND = 'SAGA_SELECTBOX_EDITBOX_MOVEEND';
export const SAGA_SELECTBOX_EDITBOX_CHANGESIZE = 'SAGA_SELECTBOX_EDITBOX_CHANGESIZE';


export const Saga_SelectBox_Box_NonSelect = (payload = {}) => {
    return {
        type: SAGA_SELECTBOX_BOX_NONSELECT,
        payload: {
            box_id:    0,
            group_id: '',
            group_no:  0,
            type:     '',
        },
    };
}

export const Saga_SelectBox_Box_Select = (payload = {}) => {
    return {
        type: SAGA_SELECTBOX_BOX_SELECT,
        payload: {
            box_id:   payload.box_id,
            group_id: payload.group_id,
            group_no: payload.group_no,
            type:     payload.type,
        },
    };
}

export const Saga_SelectBox_EditBox_MoveEnd = (payload = {}) => {
    return {
        type: SAGA_SELECTBOX_EDITBOX_MOVEEND,
        payload: {
            box_id: payload.box_id,
            x1: payload.x1,
            y1: payload.y1,
            x2: payload.x2,
            y2: payload.y2,
        },
    };
}

export const Saga_SelectBox_EditBox_ChangeSize = (payload = {}) => {
    return {
        type: SAGA_SELECTBOX_EDITBOX_CHANGESIZE,
        payload: {
            box_id: payload.box_id,
            x1: payload.x1,
            y1: payload.y1,
            x2: payload.x2,
            y2: payload.y2,
        },
    };
}

