export const SAGA_TOOLBOXSOZAI_SOZAI_UPDATE = 'SAGA_TOOLBOXSOZAI_SOZAI_UPDATE';
export const SAGA_TOOLBOXSOZAI_SOZAI_DELETE = 'SAGA_TOOLBOXSOZAI_SOZAI_DELETE';
export const SAGA_TOOLBOXSOZAI_SOZAI_CREATE = 'SAGA_TOOLBOXSOZAI_SOZAI_CREATE';
export const SAGA_TOOLBOXSOZAI_SOZAI_SELECT = 'SAGA_TOOLBOXSOZAI_SOZAI_SELECT';


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

export const Saga_ToolBoxSozai_Sozai_Create = (payload = {}) => {
    return {
        type: SAGA_TOOLBOXSOZAI_SOZAI_CREATE,
        payload: {
            id: payload.id,
            type: payload.type,
            text: payload.text,
            image: payload.image,
        },
    };
}

export const Saga_ToolBoxSozai_Sozai_Select = (payload = {}) => {
    return {
        type: SAGA_TOOLBOXSOZAI_SOZAI_SELECT,
        payload: {
            id: payload.id,
        }
    };
}

