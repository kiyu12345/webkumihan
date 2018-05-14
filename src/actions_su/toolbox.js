export const SU_TOOLBOX_MOVEEND = 'SU_TOOLBOX_MOVEEND';


export const SU_ToolBox_MoveEnd = (payload) => {
    return {
        type: SU_TOOLBOX_MOVEEND,
        payload: {
            id: payload.id,
            x:  payload.x,
            y:  payload.y,
        },
    };
}
