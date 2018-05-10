export const SU_FOCUSBOX_NON_SELECT = 'SU_FOCUSBOX_NON_SELECT';
export const SU_FOCUSBOX_BOX_SELECT = 'SU_FOCUSBOX_BOX_SELECT';

export const SU_FocusBox_Non_Select = (payload) => {
    return {
        type: SU_FOCUSBOX_NON_SELECT,
        payload: {
            id:    null,
            group: '',
            no:    0,
        },
    };
}

export const SU_FocusBox_Box_Select = (payload) => {
    return {
        type: SU_FOCUSBOX_BOX_SELECT,
        payload: {
            id:    payload.id,
            group: payload.group,
            no:    payload.no,
        },
    };
}
