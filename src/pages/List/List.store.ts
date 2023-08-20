import { nanoid } from 'nanoid';

export type TodoType = {
    _id: string;
    title: string;
};

export type ActionType = {
    type: 'ADD_TODO' | 'REMOVE_TODO' | 'UPDATE_TODO';
    playload?: TodoType;
};

export const initialState: TodoType[] = [
    { _id: nanoid(5), title: 'Learn Redux' },
    { _id: nanoid(5), title: 'Learn React' },
];

export const reducer = (state: TodoType[] = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.playload];
        case 'REMOVE_TODO':
            return state.filter(todo => todo._id !== action.playload._id);
        case 'UPDATE_TODO':
            return state.map(todo => (todo._id === action.playload._id ? action.playload : todo));
        default:
            return state;
    }
};
