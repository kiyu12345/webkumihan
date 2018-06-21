export const SAGA_NAGASHIRESULT_CREATE = 'SAGA_NAGASHIRESULT_CREATE';
export const SAGA_NAGASHI_IMAGE = 'SAGA_NAGASHI_IMAGE';
export const SAGA_NAGASHI_REMOVE = 'SAGA_NAGASHI_REMOVE';
export const SAGA_NAGASHIRESULT_AFURE = 'SAGA_NAGASHIRESULT_AFURE';


export const Saga_NagashiResult_Create = (payload = {}) => {
    return {
        type: SAGA_NAGASHIRESULT_CREATE,
        payload: {
            box_id: payload.box_id,
            nagashiResult:  payload.nagashiResult,
        },
    };
}

export const Saga_Nagashi_Image = (payload = {}) => {
    return {
        type: SAGA_NAGASHI_IMAGE,
        payload: {
            box_id: payload.box_id,
            imageUrl:  payload.imageUrl,
        }
    }
}

export const Saga_Nagashi_Remove = (payload = {}) => {
    return {
        type: SAGA_NAGASHI_REMOVE,
        payload: {
            group_id: payload.group_id,
        },
    };
}

export const Saga_NagashiResult_Afure = (payload = {}) => {
    return {
        type: SAGA_NAGASHIRESULT_AFURE,
        payload: {
            group_id: payload.group_id,
            afure: payload.afure,
        },
    };
}