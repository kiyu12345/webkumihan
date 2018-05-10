import { combineReducers } from 'redux';

import { box } from './box.js';
import { focusbox } from './focusbox.js';

const rootReducer = combineReducers({
    box,
    focusbox,
});

export default rootReducer;
