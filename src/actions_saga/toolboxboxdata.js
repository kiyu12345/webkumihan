export const SAGA_TOOLBOXBOXDATA_BOXDATA_UPDATE = 'SAGA_TOOLBOXBOXDATA_BOXDATA_UPDATE';
export const SAGA_TOOLBOXBOXDATA_BOXDATA_DELETE = 'SAGA_TOOLBOXBOXDATA_BOXDATA_DELETE';
export const SAGA_TOOLBOXBOXDATA_BOXDATA_CREATE = 'SAGA_TOOLBOXBOXDATA_BOXDATA_CREATE';


export const Saga_ToolBoxBoxData_BoxData_Update = (payload = {}) => {
    return {
        type: SAGA_TOOLBOXBOXDATA_BOXDATA_UPDATE,
        payload: {
            box: payload.box,
        },
    };
}

export const Saga_ToolBoxBoxData_BoxData_Delete = (payload = {}) => {
    return {
        type: SAGA_TOOLBOXBOXDATA_BOXDATA_DELETE,
        payload: {
            id: payload.id,
        },
    };
}

export const Saga_ToolBoxBoxData_BoxData_Create = (payload = {}) => {
    return {
        type: SAGA_TOOLBOXBOXDATA_BOXDATA_CREATE,
        payload: {
            box: payload.box,
        },
    };
}

