export const SAGA_TOOLBOXSOZAI_SOZAI_UPDATE = 'SAGA_TOOLBOXSOZAI_SOZAI_UPDATE';
export const SAGA_TOOLBOXSOZAI_SOZAI_DELETE = 'SAGA_TOOLBOXSOZAI_SOZAI_DELETE';
export const SAGA_TOOLBOXSOZAI_SOZAI_CREATE = 'SAGA_TOOLBOXSOZAI_SOZAI_CREATE';
export const SAGA_TOOLBOXSOZAI_SOZAI_SELECT = 'SAGA_TOOLBOXSOZAI_SOZAI_SELECT';
export const SAGA_TOOLBOXSOZAI_SOZAI_NONSELECT = 'SAGA_TOOLBOXSOZAI_SOZAI_NONSELECT';
export const SAGA_TOOLBOXSOZAI_SOZAI_TOGGLE = 'SAGA_TOOLBOXSOZAI_SOZAI_TOGGLE';


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
            sozai_id: payload.sozai_id,
        },
    };
}

export const Saga_ToolBoxSozai_Sozai_Create = (payload = {}) => {
    return {
        type: SAGA_TOOLBOXSOZAI_SOZAI_CREATE,
        payload: {
            sozai_id: payload.sozai_id,
            type:     payload.type,
            text:     payload.text,
            imageUrl: payload.imageUrl,
        },
    };
}

export const Saga_ToolBoxSozai_Sozai_Select = (payload = {}) => {
    return {
        type: SAGA_TOOLBOXSOZAI_SOZAI_SELECT,
        payload: {
            sozai_id: payload.sozai_id,
        }
    };
}

export const Saga_ToolBoxSozai_Sozai_NonSelect = (payload = {}) => {
    return {
        type: SAGA_TOOLBOXSOZAI_SOZAI_NONSELECT,
        payload: {
            
        }
    };
}

export const Saga_ToolBoxSozai_Sozai_Toggle = (payload = {}) => {
    return {
        type: SAGA_TOOLBOXSOZAI_SOZAI_TOGGLE,
        payload: {
            sozai_id: payload.sozai_id,
        }
    };
}

