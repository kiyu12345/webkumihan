export const SAGA_NAGASHIRESULT_CREATE = 'SAGA_NAGASHIRESULT_CREATE';
export const SAGA_NAGASHI_REMOVE = 'SAGA_NAGASHI_REMOVE';


export const Saga_NagashiResult_Create = (payload = {}) => {
    return {
        type: SAGA_NAGASHIRESULT_CREATE,
        payload: {
            box_id: payload.box_id,
            nagashiResult:  payload.nagashiResult,
        },
    };
}

export const Saga_Nagashi_Remove = (payload = {}) => {
    return {
        type: SAGA_NAGASHI_REMOVE,
        payload: {
            group: payload.group,
        },
    };
}
