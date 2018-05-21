export const SAGA_TOOLBOXBOXDATA_BOXDATA_CHANGE = 'SAGA_TOOLBOXBOXDATA_BOXDATA_CHANGE';


export const Saga_ToolBoxBoxData_BoxData_Change = (payload = {}) => {
    return {
        type: SAGA_TOOLBOXBOXDATA_BOXDATA_CHANGE,
        payload: {
            box: payload.box,
        },
    };
}

