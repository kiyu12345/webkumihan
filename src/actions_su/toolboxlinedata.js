export const SU_TOOLBOXLINEDATA_UPDATEBUTTON_CLICK = 'SU_TOOLBOXLINEDATA_UPDATEBUTTON_CLICK';


export const SU_ToolBoxLineData_UpdateButton_Click = (payload = {}) => {
    return {
        type: SU_TOOLBOXLINEDATA_UPDATEBUTTON_CLICK,
        payload: {
            box_id: payload.box_id,
            line: {
                hoko:      payload.line.hoko,
                padding_s: payload.line.padding_s,
                padding_e: payload.line.padding_e,
                width:     payload.line.width,
                kind:      payload.line.kind,
                color:     payload.line.color,
            },
        },
    };
}
