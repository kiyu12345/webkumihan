import { takeEvery, put } from 'redux-saga/effects';

import {
    SU_FOCUSBOX_NON_SELECT,
    SU_FOCUSBOX_BOX_SELECT,
} from '../actions_su/focusbox.js';

import {
    Saga_FocusBox_Non_Select,
    Saga_FocusBox_Box_Select,
} from '../actions_saga/focusbox.js';


export default function* focusbox() {
    yield takeEvery(SU_FOCUSBOX_NON_SELECT, function* (action) {
        yield put(Saga_FocusBox_Non_Select(action.payload));
    });
    yield takeEvery(SU_FOCUSBOX_BOX_SELECT, function* (action) {
        yield put(Saga_FocusBox_Box_Select(action.payload));
    });
}
