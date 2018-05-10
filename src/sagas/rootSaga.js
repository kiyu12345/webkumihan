import { fork } from 'redux-saga/effects';

import focusbox from './focusbox.js';

export default function* rootSaga() {
    yield fork(focusbox);
}
