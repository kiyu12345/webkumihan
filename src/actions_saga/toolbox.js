export const SAGA_TOOLBOX_MOVEEND = 'SAGA_TOOLBOX_MOVEEND';


export const Saga_ToolBox_MoveEnd = (payload = {}) => {
    return {
        type: SAGA_TOOLBOX_MOVEEND,
        payload: {
            toolbox_id: payload.toolbox_id,
            x:  payload.x,
            y:  payload.y,
        },
    };
}
