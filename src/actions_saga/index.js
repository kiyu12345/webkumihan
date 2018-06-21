export const SAGA_NANI_DOUSHITA = 'SAGA_NANI_DOUSHITA';

export const Saga_Nani_Doushita = (payload) => {
    return {
        type: SAGA_NANI_DOUSHITA,
        payload: {
            data: payload.data,
        },
    };
}
