export const SAGA_DANDD_MOUSEDOWN = 'SAGA_DANDD_MOUSEDOWN';
export const SAGA_DANDD_MOUSEUP = 'SAGA_DANDD_MOUSEUP';


export const Saga_DAndD_MouseDown = (payload = {}) => {
    return {
        type: SAGA_DANDD_MOUSEDOWN,
        payload: {
            view: 'true',
            x: payload.x,
            y: payload.y,
            type: payload.type,
            value: payload.value,
        },
    };
}

export const Saga_DAndD_MouseUp = (payload = {}) => {
    return {
        type: SAGA_DANDD_MOUSEUP,
        payload: {
            view: 'false',
            type: payload.type,
            value: payload.value,
            x: payload.x,
            y: payload.y,
        },
    };
}
