import { fork } from 'redux-saga/effects';

import selectbox from './selectbox.js';
import toolbox from './toolbox.js';
import scale from './scale.js';
import dandd from './dandd.js';
import contextmenu from './contextmenu.js';

export default function* rootSaga() {
    yield fork(selectbox);
    yield fork(toolbox);
    yield fork(scale);
    yield fork(dandd);
    yield fork(contextmenu);
}
