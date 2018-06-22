export const SAGA_TOOLBOXLINEDATA_LINEDATA_UPDATE = 'SAGA_TOOLBOXLINEDATA_LINEDATA_UPDATE';


export const Saga_ToolBoxLineData_LineData_Update = (payload = {}) => {
    return {
        type: SAGA_TOOLBOXLINEDATA_LINEDATA_UPDATE,
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

