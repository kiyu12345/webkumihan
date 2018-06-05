export const SAGA_LAYOUT_CALL = 'SAGA_LAYOUT_CALL';
export const SAGA_SOZAI_CALL = 'SAGA_SOZAI_CALL';


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