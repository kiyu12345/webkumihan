export const SAGA_TOOLBOXSOZAI_SOZAI_UPDATE = 'SAGA_TOOLBOXSOZAI_SOZAI_UPDATE';
export const SAGA_TOOLBOXSOZAI_SOZAI_DELETE = 'SAGA_TOOLBOXSOZAI_SOZAI_DELETE';


export const Saga_ToolBoxSozai_Sozai_Update = (payload = {}) => {
    return {
        type: SAGA_TOOLBOXSOZAI_SOZAI_UPDATE,
        payload: {
            sozai: payload.sozai,
        },
    };
}

export const Saga_ToolBoxSozai_Sozai_Delete = (payload = {}) => {
    return {
        type: SAGA_TOOLBOXSOZAI_SOZAI_DELETE,
        payload: {
            id: payload.id,
        },
    };
}

