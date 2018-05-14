import { combineReducers } from 'redux';

import { boxs } from './boxs.js';
import { focusbox } from './focusbox.js';
import { toolboxs } from './toolboxs.js';
import { scale } from './scale.js';

const rootReducer = combineReducers({
    boxs,
    focusbox,
    toolboxs,
    scale,
});

export default rootReducer;
