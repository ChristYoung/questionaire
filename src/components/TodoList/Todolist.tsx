import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TodoState } from './todo-slice';
import {
    addTodoActions,
    deleteTodoActions,
    updateTodoActions,
    fetchTodosActions,
} from './todo-saga';

export interface TodolistProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Todolist: React.FC<TodolistProps> = (props: TodolistProps) => {
    const [newTodoTitle, setNewTodoTitle] = useState('');
    const [editingTodoId, setEditingTodoId] = useState<string | null>(null);
    const [editingTodoTitle, setEditingTodoTitle] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector((state: TodoState) => state.todos);
    const handleNewTodoTitleChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setNewTodoTitle(event.target.value);
    };

    const handleNewTodoSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(addTodoActions(newTodoTitle));
        setNewTodoTitle('');
    };

    const handleDeleteClick = (id: string) => {
        dispatch(deleteTodoActions(id));
    };

    const handleEditClick = (id: string, title: string) => {
        setEditingTodoId(id);
        setEditingTodoTitle(title);
    };

    const handleEditingTodoTitleChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setEditingTodoTitle(event.target.value);
    };

    const handleEditingTodoSubmit = (
        event: React.FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();
        if (editingTodoId !== null) {
            dispatch(updateTodoActions(editingTodoTitle, editingTodoId));
            setEditingTodoId(null);
            setEditingTodoTitle('');
        }
    };
    return (
        <div>
            <h1>Todos</h1>
            <form onSubmit={handleNewTodoSubmit}>
                <input
                    type="text"
                    value={newTodoTitle}
                    onChange={handleNewTodoTitleChange}
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos &&
                    todos.map(todo =>
                        editingTodoId === todo.id ? (
                            <li key={todo.id}>
                                <form onSubmit={handleEditingTodoSubmit}>
                                    <input
                                        type="text"
                                        value={editingTodoTitle}
                                        onChange={handleEditingTodoTitleChange}
                                    />
                                    <button type="submit">Save</button>
                                </form>
                            </li>
                        ) : (
                            <li key={todo.id}>
                                {todo.text}{' '}
                                <button
                                    onClick={() =>
                                        handleEditClick(todo.id, todo.text)
                                    }>
                                    Edit
                                </button>{' '}
                                <button
                                    onClick={() => handleDeleteClick(todo.id)}>
                                    Delete
                                </button>
                            </li>
                        ),
                    )}
            </ul>
            <button onClick={() => dispatch(fetchTodosActions())}>
                Fetch Todos
            </button>
        </div>
    );
};
