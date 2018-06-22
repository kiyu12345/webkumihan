export const SAGA_TOOLBOXTEXTDATA_TEXTDATA_UPDATE = 'SAGA_TOOLBOXTEXTDATA_TEXTDATA_UPDATE';


export const Saga_ToolBoxTextData_TextData_Update = (payload = {}) => {
    return {
        type: SAGA_TOOLBOXTEXTDATA_TEXTDATA_UPDATE,
        payload: {
            box_id:   payload.box_id,
            group_id: payload.group_id,
            text: {
                padding_js: payload.text.padding_js,
                padding_je: payload.text.padding_je,
                padding_gs: payload.text.padding_gs,
                padding_ge: payload.text.padding_ge,
                kumihoko:   payload.text.kumihoko,
                size_j:     payload.text.size_j,
                size_g:     payload.text.size_g,
                gyokan:     payload.text.gyokan,
                font:       payload.text.font,
            },
        },
    };
}

