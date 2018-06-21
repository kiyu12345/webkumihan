import {
    SAGA_SCALE_CHANGE,
} from '../actions_saga/toolboxscale.js';

// ====================
// scale情報
//      1.0: 100%
// ====================
export const scale = (state = 100, action) => {
    switch (action.type) {
    case SAGA_SCALE_CHANGE:   // 拡大縮小値が変更された
        return action.payload.scale;

    default:
        return state;
    }
}
