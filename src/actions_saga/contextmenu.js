export const SAGA_CONTEXTMENU_OPEN  = 'SAGA_CONTEXTMENU_OPEN';
export const SAGA_CONTEXTMENU_CLOSE = 'SAGA_CONTEXTMENU_CLOSE';

export const SAGA_CONTEXTMENU_NEWTEXTBOX = 'SAGA_CONTEXTMENU_NEWTEXTBOX';


export const Saga_ContextMenu_Open = (payload = {}) => {
    return {
        type: SAGA_CONTEXTMENU_OPEN,
        payload: {
            x: payload.x,
            y: payload.y,
        },
    };
}

export const Saga_ContextMenu_Close = (payload = {}) => {
    return {
        type: SAGA_CONTEXTMENU_CLOSE,
        payload: {

        },
    };
}

export const Saga_ContextMenu_NewTextBox = (payload = {}) => {
    return {
        type: SAGA_CONTEXTMENU_NEWTEXTBOX,
        payload: {
            box_id:   payload.box_id,
            group_id: payload.group_id,
            group_no: payload.group_no,
            type:     payload.type,

            text: {
                kumihoko:   payload.text.kumihoko,
                padding_js: payload.text.padding_js,
                padding_je: payload.text.padding_je,
                padding_gs: payload.text.padding_gs,
                padding_ge: payload.text.padding_ge,
                size_j:     payload.text.size_j,
                size_g:     payload.text.size_g,
                gyokan:     payload.text.gyokan,
                font:       payload.text.font,
            },
        },
    };
}
