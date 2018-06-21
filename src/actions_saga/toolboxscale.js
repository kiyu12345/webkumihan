export const SAGA_SCALE_CHANGE = 'SAGA_SCALE_CHANGE';


export const Saga_Scale_Change = (payload = {}) => {
    return {
        type: SAGA_SCALE_CHANGE,
        payload: {
            scale: payload.scale,
        },
    };
}

