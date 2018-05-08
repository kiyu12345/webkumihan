export const SU_DOKO_NANI_DOUSHITA = 'SU_DOKO_NANI_DOUSHITA';

export const SU_Doko_Nani_Doushita = (payload) => {
    return {
        type: SU_DOKO_NANI_DOUSHITA,
        payload: {
            data: payload.data,
        },
    };
}
