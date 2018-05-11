import { takeEvery, put } from 'redux-saga/effects';

import {
    SU_SELECTBOX_BOX_NONSELECT,
    SU_SELECTBOX_BOX_SELECT,
    SU_SELECTBOX_EDITBOX_MOVEEND,
} from '../actions_su/selectbox.js';

import {
    Saga_SelectBox_Box_NonSelect,
    Saga_SelectBox_Box_Select,
    Saga_SelectBox_EditBox_MoveEnd,
} from '../actions_saga/selectbox.js';


export default function* selectbox() {
    yield takeEvery(SU_SELECTBOX_BOX_NONSELECT, function* (action) {
        yield put(Saga_SelectBox_Box_NonSelect(action.payload));
    });

    yield takeEvery(SU_SELECTBOX_BOX_SELECT, function* (action) {
        yield put(Saga_SelectBox_Box_Select(action.payload));
    });

    yield takeEvery(SU_SELECTBOX_EDITBOX_MOVEEND, function* (action) {
        yield put(Saga_SelectBox_EditBox_MoveEnd(action.payload));
    });
}
