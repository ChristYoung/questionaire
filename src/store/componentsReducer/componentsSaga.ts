import { PayloadAction, createAction } from '@reduxjs/toolkit';
import { put, select, takeEvery } from 'redux-saga/effects';
import { QuestionListItem } from '../../components/QuestionComponents/types';
import {
    QstListState,
    addQst,
    changeSelectedId,
    getQstListSelector,
} from './componentsSlice';
import cloneDeep from 'lodash.clonedeep';
import { nanoid } from 'nanoid';

// actions
export const COMPONENTS_SAGA = {
    ADD_QST: 'ADD_QST',
    COPY_QST: 'COPY_QST',
    MOVE_SELECTED_INDEX: 'MOVE_SELECTED_INDEX',
};

export const addQstAction = createAction(
    COMPONENTS_SAGA.ADD_QST,
    (q: QuestionListItem) => ({
        payload: q,
    }),
);

export const copyQstAction = createAction(COMPONENTS_SAGA.COPY_QST);
export const moveSelectedIndexAction = createAction(
    COMPONENTS_SAGA.MOVE_SELECTED_INDEX,
    (type: 'next' | 'prev') => ({ payload: type }),
);

// sagas
export function* addQstSaga(action: PayloadAction<QuestionListItem>) {
    yield put(addQst(action.payload));
    yield put(changeSelectedId(action.payload.id));
}

export function* copyQstSaga() {
    const { selectedComponent } = yield select(
        getQstListSelector,
    ) as QstListState;
    const newQst = cloneDeep(selectedComponent);
    const { selectedId } = yield select(getQstListSelector) as QstListState;
    if (selectedId) {
        newQst.id = nanoid(36);
        yield put(addQst(newQst));
        yield put(changeSelectedId(newQst.id));
    } else {
        yield put(null);
    }
}

export function* moveSelectedIndexSaga(action: PayloadAction<'next' | 'prev'>) {
    const { selectedId, questions } = yield select(
        getQstListSelector,
    ) as QstListState;
    const selectedIndex = selectedId
        ? questions.findIndex((q: QuestionListItem) => q.id === selectedId)
        : -1;
    const newIndex =
        action.payload === 'next' ? selectedIndex + 1 : selectedIndex - 1;
    if (newIndex >= 0 && newIndex < questions.length) {
        yield put(changeSelectedId(questions[newIndex].id));
    }
}

export function* watchComponentsSaga() {
    yield takeEvery(COMPONENTS_SAGA.ADD_QST, addQstSaga);
    yield takeEvery(COMPONENTS_SAGA.COPY_QST, copyQstSaga);
    yield takeEvery(COMPONENTS_SAGA.MOVE_SELECTED_INDEX, moveSelectedIndexSaga);
}
