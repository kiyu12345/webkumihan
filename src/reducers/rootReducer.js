import { combineReducers } from 'redux';

import { scale } from './scale.js';
import { boxs } from './boxs.js';
import { focusbox } from './focusbox.js';
import { toolboxs } from './toolboxs.js';
import { sozai } from './sozai.js';

const rootReducer = combineReducers({
    scale,
    boxs,
    focusbox,
    toolboxs,
    sozai,
});

export default rootReducer;
