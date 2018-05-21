export const SAGA_TOOLBOXTEXTDATA_TEXTDATA_CHANGE = 'SAGA_TOOLBOXTEXTDATA_TEXTDATA_CHANGE';


export const Saga_ToolBoxTextData_TextData_Change = (payload = {}) => {
    return {
        type: SAGA_TOOLBOXTEXTDATA_TEXTDATA_CHANGE,
        payload: {
            box: payload.box,
        },
    };
}

