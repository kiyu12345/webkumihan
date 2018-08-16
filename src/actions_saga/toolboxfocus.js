export const SAGA_TOOLBOXFOCUS_CHANGE  = 'SAGA_TOOLBOXFOCUS_CHANGE';


export const Saga_ToolBoxFocus_Change = (payload = {}) => {
    return {
        type: SAGA_TOOLBOXFOCUS_CHANGE,
        payload: {
            focus: payload.focus,  // 'in' or 'out'
        },
    };
}


