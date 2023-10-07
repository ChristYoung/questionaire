import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import qstListReducer, {
    QstListState,
} from './componentsReducer/componentsSlice';
import questionnaireInfoReducer from './questionnaireInfoReducer/questionnaireInfoSlice';
import todoListReducer, { TodoState } from '../components/TodoList/todo-slice';
import { fork } from 'redux-saga/effects';
import { watchComponentsSaga } from './componentsReducer/componentsSaga';
import todoSaga from '../components/TodoList/todo-saga';
import { QuestionnaireInfo } from '../components/QuestionComponents/types';

const sagaMiddleware = createSagaMiddleware();
export type QstListStateType = { qstList: QstListState };
export type TodoStateType = { todoList: TodoState };
export type QuestionnaireType = { questionnaire: QuestionnaireInfo };

export function* rootSaga() {
    yield fork(watchComponentsSaga);
    yield fork(todoSaga);
}

export default configureStore({
    reducer: {
        qstList: qstListReducer,
        todoList: todoListReducer,
        questionnaireInfo: questionnaireInfoReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
