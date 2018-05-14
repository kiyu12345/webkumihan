export const SAGA_TOOLBOX_MOVEEND = 'SAGA_TOOLBOX_MOVEEND';


export const Saga_ToolBox_MoveEnd = (payload) => {
    return {
        type: SAGA_TOOLBOX_MOVEEND,
        payload: {
            id: payload.id,
            x:  payload.x,
            y:  payload.y,
        },
    };
}
