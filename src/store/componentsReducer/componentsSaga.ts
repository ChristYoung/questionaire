import { debounce, fork, put, takeEvery } from 'redux-saga/effects';
import { QuestionListItem } from '../../components/QuestionComponents/types';
import { addQst, changeSelectedId } from './componentsSlice';
import { PayloadAction, createAction } from '@reduxjs/toolkit';

export const COMPONENTS_SAGA = {
    ADD_OR_COPY_QST: 'ADD_OR_COPY_QST',
};

export const addOrCopyQuestion = createAction(
    COMPONENTS_SAGA.ADD_OR_COPY_QST,
    (q: QuestionListItem) => ({
        payload: q,
    }),
);

export function* addOrCopyQuestionSaga(
    action: PayloadAction<QuestionListItem>,
) {
    yield put(addQst(action.payload));
    yield put(changeSelectedId(action.payload.id));
}

export function* watchAddOrCopyQuestion() {
    yield takeEvery(COMPONENTS_SAGA.ADD_OR_COPY_QST, addOrCopyQuestionSaga);
}
