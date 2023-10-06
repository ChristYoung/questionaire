import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import qstListReducer, {
    QstListState,
} from './componentsReducer/componentsSlice';
import todoListReducer, { TodoState } from '../components/TodoList/todo-slice';
import { fork } from 'redux-saga/effects';
import { watchAddOrCopyQuestion } from './componentsReducer/componentsSaga';
import todoSaga from '../components/TodoList/todo-saga';

const sagaMiddleware = createSagaMiddleware();
export type QstListStateType = { qstList: QstListState };
export type TodoStateType = { todoList: TodoState };

export function* rootSaga() {
    yield fork(watchAddOrCopyQuestion);
    yield fork(todoSaga);
}

export default configureStore({
    reducer: {
        qstList: qstListReducer,
        todoList: todoListReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
