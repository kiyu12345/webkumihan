export const SU_SELECTBOX_BOX_NONSELECT   = 'SU_SELECTBOX_BOX_NONSELECT';
export const SU_SELECTBOX_BOX_SELECT      = 'SU_SELECTBOX_BOX_SELECT';

export const SU_SELECTBOX_EDITBOX_MOVEEND = 'SU_SELECTBOX_EDITBOX_MOVEEND';


export const SU_SelectBox_Box_NonSelect = (payload) => {
    return {
        type: SU_SELECTBOX_BOX_NONSELECT,
        payload: {
            id:    null,
            group: '',
            no:    0,
        },
    };
}

export const SU_SelectBox_Box_Select = (payload) => {
    return {
        type: SU_SELECTBOX_BOX_SELECT,
        payload: {
            id:    payload.id,
            group: payload.group,
            no:    payload.no,
        },
    };
}

export const SU_SelectBox_EditBox_MoveEnd = (payload) => {
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
