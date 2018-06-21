export const SAGA_LAYOUT_CALL = 'SAGA_LAYOUT_CALL';
export const SAGA_SOZAI_CALL = 'SAGA_SOZAI_CALL';
export const SAGA_LINK_CALL = 'SAGA_LINK_CALL';

export const SAGA_EDITONOFF_CHANGE = 'SAGA_EDITONOFF_CHANGE';


export const Saga_Layout_Call = (payload = {}) => {
    return {
        type: SAGA_LAYOUT_CALL,
        payload: {
            pattern: payload.pattern,
        },
    };
}

export const Saga_Sozai_Call = (payload = {}) => {
    return {
        type: SAGA_SOZAI_CALL,
        payload: {
            pattern: payload.pattern,
        },
    };
}

export const Saga_Link_Call = (payload = {}) => {
    return {
        type: SAGA_LINK_CALL,
        payload: {
            links: payload.links,
        },
    };
}

export const Saga_EditOnOff_Change = (payload = {}) => {
    return {
        type: SAGA_EDITONOFF_CHANGE,
        payload: {
            onoff: payload.onoff,
        },
    };
}
