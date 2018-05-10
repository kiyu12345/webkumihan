import { combineReducers } from 'redux';

import { boxs } from './boxs.js';
import { focusbox } from './focusbox.js';

const rootReducer = combineReducers({
    boxs,
    focusbox,
});

export default rootReducer;
