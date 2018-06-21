export const SAGA_CONTEXTMENU_OPEN  = 'SAGA_CONTEXTMENU_OPEN';
export const SAGA_CONTEXTMENU_CLOSE = 'SAGA_CONTEXTMENU_CLOSE';

export const SAGA_CONTEXTMENU_NEWBOXTEXT = 'SAGA_CONTEXTMENU_NEWBOXTEXT';
export const SAGA_CONTEXTMENU_NEWBOXIMAGE = 'SAGA_CONTEXTMENU_NEWBOXIMAGE';
export const SAGA_CONTEXTMENU_NEWBOXLINE = 'SAGA_CONTEXTMENU_NEWBOXLINE';

export const SAGA_CONTEXTMENU_BOXTOFRONT = 'SAGA_CONTEXTMENU_BOXTOFRONT';
export const SAGA_CONTEXTMENU_BOXTOBACK = 'SAGA_CONTEXTMENU_BOXTOBACK';


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

export const Saga_ContextMenu_NewBoxText = (payload = {}) => {
    return {
        type: SAGA_CONTEXTMENU_NEWBOXTEXT,
        payload: {
            box_id:   payload.box_id,
            group_id: payload.group_id,
            group_no: payload.group_no,
            type:     payload.type,
            x1: payload.x1,
            y1: payload.y1,
            x2: payload.x2,
            y2: payload.y2,

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

export const Saga_ContextMenu_NewBoxImage = (payload = {}) => {
    return {
        type: SAGA_CONTEXTMENU_NEWBOXIMAGE,
        payload: {
            box_id:   payload.box_id,
            group_id: payload.group_id,
            group_no: payload.group_no,
            type:     payload.type,
            x1: payload.x1,
            y1: payload.y1,
            x2: payload.x2,
            y2: payload.y2,

            image: {
                url: payload.image.url,
            },
        },
    };
}

export const Saga_ContextMenu_NewBoxLine = (payload = {}) => {
    return {
        type: SAGA_CONTEXTMENU_NEWBOXLINE,
        payload: {
            box_id:   payload.box_id,
            group_id: payload.group_id,
            group_no: payload.group_no,
            type:     payload.type,
            x1: payload.x1,
            y1: payload.y1,
            x2: payload.x2,
            y2: payload.y2,

            line: {
                hoko:      payload.line.hoko,
                padding_s: payload.line.padding_s,
                padding_e: payload.line.padding_e,
                width:     payload.line.width,
                kind:      payload.line.kind,
                color:     payload.line.color,
            },
        },
    };
}

export const Saga_ContextMenu_BoxToFront = (payload = {}) => {
    return {
        type: SAGA_CONTEXTMENU_BOXTOFRONT,
        payload: {
            box_id: payload.box_id,
        },
    };
}

export const Saga_ContextMenu_BoxToBack = (payload = {}) => {
    return {
        type: SAGA_CONTEXTMENU_BOXTOBACK,
        payload: {
            box_id: payload.box_id,
        },
    };
}
