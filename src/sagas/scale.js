import { takeEvery, put, select } from 'redux-saga/effects';

import {
    SU_TOOLBOXSCALE_MINBUTTON_CLICK,
    SU_TOOLBOXSCALE_MAXBUTTON_CLICK,
    SU_TOOLBOXSCALE_100PERBUTTON_CLICK,
} from '../actions_su/toolboxscale.js';

import {
    Saga_Scale_Change,
} from '../actions_saga/toolboxscale.js';

const getScale = (state) => state.scale;

export default function* scale() {
    yield takeEvery(SU_TOOLBOXSCALE_MINBUTTON_CLICK, function* (action) {
        let scale = yield select(getScale);
        scale -= 50;
        if (scale <= 50) {
            scale = 50
        }
        yield put(Saga_Scale_Change({scale: scale}));
    });

    yield takeEvery(SU_TOOLBOXSCALE_MAXBUTTON_CLICK, function* (action) {
        // let scale = select().scale;
        let scale = yield select(getScale);
        scale += 50;
        if (scale >= 1000) {
            scale = 1000
        }
        yield put(Saga_Scale_Change({scale: scale}));
    });

    yield takeEvery(SU_TOOLBOXSCALE_100PERBUTTON_CLICK, function* (action) {
        yield put(Saga_Scale_Change({scale: 100}));
    })
}
