export const SAGA_SELECTBOX_BOX_NONSELECT   = 'SAGA_SELECTBOX_BOX_NONSELECT';
export const SAGA_SELECTBOX_BOX_SELECT      = 'SAGA_SELECTBOX_BOX_SELECT';

export const SAGA_SELECTBOX_EDITBOX_MOVEEND = 'SAGA_SELECTBOX_EDITBOX_MOVEEND';


export const Saga_SelectBox_Box_NonSelect = (payload) => {
    return {
        type: SAGA_SELECTBOX_BOX_NONSELECT,
        payload: {
            id:    null,
            group: '',
            no:    0,
        },
    };
}

export const Saga_SelectBox_Box_Select = (payload) => {
    return {
        type: SAGA_SELECTBOX_BOX_SELECT,
        payload: {
            id:    payload.id,
            group: payload.group,
            no:    payload.no,
        },
    };
}

export const Saga_SelectBox_EditBox_MoveEnd = (payload) => {
    return {
        type: SAGA_SELECTBOX_EDITBOX_MOVEEND,
        payload: {
            id: payload.id,
            x1: payload.x1,
            y1: payload.y1,
            x2: payload.x2,
            y2: payload.y2,
        },
    };
}
