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
            image:  payload.image,
        }
    }
}

export const Saga_Nagashi_Remove = (payload = {}) => {
    return {
        type: SAGA_NAGASHI_REMOVE,
        payload: {
            group: payload.group,
        },
    };
}

export const Saga_NagashiResult_Afure = (payload = {}) => {
    return {
        type: SAGA_NAGASHIRESULT_AFURE,
        payload: {
            group: payload.group,
            afure: payload.afure,
        },
    };
}