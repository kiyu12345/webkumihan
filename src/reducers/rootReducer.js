import { combineReducers } from 'redux';

import { scale } from './scale.js';
import { boxs } from './boxs.js';
import { focusbox } from './focusbox.js';
import { toolboxs } from './toolboxs.js';
import { sozai } from './sozai.js';
import { links } from './links.js';

const rootReducer = combineReducers({
    scale,
    boxs,
    focusbox,
    toolboxs,
    sozai,
    links,
});

export default rootReducer;
