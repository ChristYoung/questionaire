import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export interface Todo {
    id: string;
    text: string;
    completed?: boolean;
}

export interface TodoState {
    todos: Todo[];
}

const initialState: TodoState = {
    todos: [],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: nanoid(5),
                text: action.payload.text,
                completed: false,
            });
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(
                todo => todo.id !== action.payload.id,
            );
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find(
                todo => todo.id === action.payload.id,
            );
            if (todo) {
                todo.text = action.payload.text;
            }
        },
        setTodos: (state, action) => {
            // state.todos = action.payload.todos;
            return { ...state, todos: action.payload };
        },
    },
});

export const { addTodo, updateTodo, deleteTodo, setTodos } = todoSlice.actions;

export default todoSlice.reducer;
