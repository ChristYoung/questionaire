import { put, takeLatest } from 'redux-saga/effects';
import {
    Todo,
    TodoState,
    addTodo,
    deleteTodo,
    setTodos,
    updateTodo,
} from './todo-slice';
import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const FETCH_TODOS = 'FETCH_TODOS';
export const SET_TODOS = 'SET_TODOS';

// saga actions
export const fetchTodosActions = createAction(FETCH_TODOS);
export const deleteTodoActions = createAction(DELETE_TODO, (id: string) => ({
    payload: { id },
}));
export const updateTodoActions = createAction(
    UPDATE_TODO,
    (text: string, id) => ({
        payload: { text, id },
    }),
);
export const addTodoActions = createAction(ADD_TODO, (text: string) => ({
    payload: { text },
}));

function* fetchTodosaga() {
    // You can fetch todos from an API here
    const todos = [
        { id: nanoid(5), text: 'Todo 1' },
        { id: nanoid(5), text: 'Todo 2' },
        { id: nanoid(5), text: 'Todo 3' },
    ];
    yield put(setTodos(todos));
}

function* deleteTodoSaga(action) {
    yield put(deleteTodo(action.payload.id));
}

function* updateTodoSaga(action) {
    yield put(updateTodo(action.payload));
}

function* addTodoSaga(action) {
    yield put(
        addTodo({
            id: nanoid(5),
            text: action.payload.text,
            completed: false,
        }),
    );
}

function* todoSaga() {
    yield takeLatest(FETCH_TODOS, fetchTodosaga);
    yield takeLatest(DELETE_TODO, deleteTodoSaga);
    yield takeLatest(UPDATE_TODO, updateTodoSaga);
}

export default todoSaga;
