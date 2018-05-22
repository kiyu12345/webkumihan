export const SAGA_TOOLBOXTEXTDATA_TEXTDATA_UPDATE = 'SAGA_TOOLBOXTEXTDATA_TEXTDATA_UPDATE';


export const Saga_ToolBoxTextData_TextData_Update = (payload = {}) => {
    return {
        type: SAGA_TOOLBOXTEXTDATA_TEXTDATA_UPDATE,
        payload: {
            box: payload.box,
        },
    };
}

