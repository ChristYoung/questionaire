import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import qstListReducer, {
    QstListState,
} from './componentsReducer/componentsSlice';
import { fork } from 'redux-saga/effects';
import { watchAddOrCopyQuestion } from './componentsReducer/componentsSaga';

const sagaMiddleware = createSagaMiddleware();
export type QstListStateType = { qstList: QstListState };

export function* rootSaga() {
    yield fork(watchAddOrCopyQuestion);
}

export default configureStore({
    reducer: {
        qstList: qstListReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
