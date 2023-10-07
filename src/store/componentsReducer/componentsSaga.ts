import { PayloadAction, createAction } from '@reduxjs/toolkit';
import { put, select, takeEvery } from 'redux-saga/effects';
import { QuestionListItem } from '../../components/QuestionComponents/types';
import {
    addQst,
    changeSelectedId,
    getQstListSelector,
} from './componentsSlice';
import cloneDeep from 'lodash.clonedeep';
import { nanoid } from 'nanoid';

export const COMPONENTS_SAGA = {
    ADD_QST: 'ADD_QST',
    COPY_QST: 'COPY_QST',
};

export const addQstAction = createAction(
    COMPONENTS_SAGA.ADD_QST,
    (q: QuestionListItem) => ({
        payload: q,
    }),
);

export const copyQstAction = createAction(COMPONENTS_SAGA.COPY_QST);

export function* addQstSaga(action: PayloadAction<QuestionListItem>) {
    yield put(addQst(action.payload));
    yield put(changeSelectedId(action.payload.id));
}

export function* copyQstSaga() {
    const { selectedComponent } = yield select(getQstListSelector);
    const newQst = cloneDeep(selectedComponent);
    newQst.id = nanoid(36);
    yield put(addQst(newQst));
    yield put(changeSelectedId(newQst.id));
}

export function* watchComponentsSaga() {
    yield takeEvery(COMPONENTS_SAGA.ADD_QST, addQstSaga);
    yield takeEvery(COMPONENTS_SAGA.COPY_QST, copyQstSaga);
}
