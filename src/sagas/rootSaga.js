import { fork } from 'redux-saga/effects';

import selectbox from './selectbox.js';

export default function* rootSaga() {
    yield fork(selectbox);
}
