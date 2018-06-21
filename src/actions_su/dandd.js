export const SU_DANDD_MOUSEDOWN = 'SU_DANDD_MOUSEDOWN';
export const SU_DANDD_MOUSEUP = 'SU_DANDD_MOUSEUP';


export const SU_DAndD_MouseDown = (payload = {}) => {
    return {
        type: SU_DANDD_MOUSEDOWN,
        payload: {
            x: payload.x,
            y: payload.y,
            type: payload.type,
            value: payload.value,
        },
    };
}

export const SU_DAndD_MouseUp = (payload = {}) => {
    return {
        type: SU_DANDD_MOUSEUP,
        payload: {
            type: payload.type,
            value: payload.value,
            x: payload.x,
            y: payload.y,
        },
    };
}
