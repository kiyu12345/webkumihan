export const SAGA_FOCUSBOX_NON_SELECT = 'SAGA_FOCUSBOX_NON_SELECT';
export const SAGA_FOCUSBOX_BOX_SELECT = 'SAGA_FOCUSBOX_BOX_SELECT';

export const Saga_FocusBox_Non_Select = (payload) => {
    return {
        type: SAGA_FOCUSBOX_NON_SELECT,
        payload: {
            id:    null,
            group: '',
            no:    0,
        },
    };
}

export const Saga_FocusBox_Box_Select = (payload) => {
    return {
        type: SAGA_FOCUSBOX_BOX_SELECT,
        payload: {
            id:    payload.id,
            group: payload.group,
            no:    payload.no,
        },
    };
}
