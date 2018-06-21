export const SU_TOOLBOX_MOVEEND = 'SU_TOOLBOX_MOVEEND';


export const SU_ToolBox_MoveEnd = (payload = {}) => {
    return {
        type: SU_TOOLBOX_MOVEEND,
        payload: {
            toolbox_id: payload.toolbox_id,
            x:  payload.x,
            y:  payload.y,
        },
    };
}
