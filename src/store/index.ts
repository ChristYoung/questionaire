import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import qstListReducer, {
    QstListState,
} from './componentsReducer/componentsSlice';
import { rootSaga } from './componentsReducer/componentsSaga';

const sagaMiddleware = createSagaMiddleware();
export type QstListStateType = { qstList: QstListState };

export default configureStore({
    reducer: {
        qstList: qstListReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
