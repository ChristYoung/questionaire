import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import qstListReducer, {
    QstListState,
} from './componentsReducer/componentsSlice';
import questionnaireInfoReducer from './questionnaireInfoReducer/questionnaireInfoSlice';
import { fork } from 'redux-saga/effects';
import { watchComponentsSaga } from './componentsReducer/componentsSaga';

const sagaMiddleware = createSagaMiddleware();
export type QstListStateType = { qstList: QstListState };

export function* rootSaga() {
    yield fork(watchComponentsSaga);
}

export default configureStore({
    reducer: {
        qstList: qstListReducer,
        questionnaireInfo: questionnaireInfoReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
