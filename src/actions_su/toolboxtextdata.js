export const SU_TOOLBOXTEXTDATA_UPDATEBUTTON_CLICK = 'SU_TOOLBOXTEXTDATA_UPDATEBUTTON_CLICK';


export const SU_ToolBoxTextData_UpdateButton_Click = (payload = {}) => {
    return {
        type: SU_TOOLBOXTEXTDATA_UPDATEBUTTON_CLICK,
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
