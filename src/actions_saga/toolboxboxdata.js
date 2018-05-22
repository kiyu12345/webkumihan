export const SAGA_TOOLBOXBOXDATA_BOXDATA_CHANGE = 'SAGA_TOOLBOXBOXDATA_BOXDATA_CHANGE';
export const SAGA_TOOLBOXBOXDATA_BOXDATA_CREATE = 'SAGA_TOOLBOXBOXDATA_BOXDATA_CREATE';


export const Saga_ToolBoxBoxData_BoxData_Change = (payload = {}) => {
    return {
        type: SAGA_TOOLBOXBOXDATA_BOXDATA_CHANGE,
        payload: {
            box: payload.box,
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
