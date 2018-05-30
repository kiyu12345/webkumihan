export const SAGA_TOOLBOXLINK_LINK_CREATE = 'SAGA_TOOLBOXLINK_LINK_CREATE';
export const SAGA_TOOLBOXLINK_LINK_DELETE = 'SAGA_TOOLBOXLINK_LINK_DELETE';


export const Saga_ToolBoxLink_Link_Create = (payload = {}) => {
    return {
        type: SAGA_TOOLBOXLINK_LINK_CREATE,
        payload: {
            group: payload.group,
            sozai_id: payload.sozai_id,
        },
    };
}

export const Saga_ToolBoxLink_Link_Delete = (payload = {}) => {
    return {
        type: SAGA_TOOLBOXLINK_LINK_DELETE,
        payload: {
            group: payload.group,
        },
    };
}
