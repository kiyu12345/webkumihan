export const SAGA_NAGASHIRESULT_CREATE = 'SAGA_NAGASHIRESULT_CREATE';


export const Saga_NagashiResult_Create = (payload = {}) => {
    return {
        type: SAGA_NAGASHIRESULT_CREATE,
        payload: {
            box_id: payload.box_id,
            nagashiResult:  payload.nagashiResult,
        },
    };
}
