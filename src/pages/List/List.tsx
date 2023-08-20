import { useReducer, Reducer, useState, createContext, useContext } from 'react';
import { reducer, initialState, TodoType, ActionType } from './List.store';
import { nanoid } from 'nanoid';

const TodoContext = createContext({
    state: initialState,
    dispatch: (action: ActionType) => {},
});

export const List: React.FC<any> = (props: any) => {
    const [state, dispatch] = useReducer<Reducer<TodoType[], ActionType>>(reducer, initialState);
    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            <InputForm></InputForm>
            {state.map(s => (
                <div key={s._id}>
                    <span>
                        {s.title}
                        {s._id}
                    </span>
                    <button type="button" onClick={() => dispatch({ type: 'REMOVE_TODO', playload: s })}>
                        x
                    </button>
                </div>
            ))}
        </TodoContext.Provider>
    );
};

export const InputForm: React.FC<any> = (props: any) => {
    const { state, dispatch } = useContext(TodoContext);
    const [text, setText] = useState('');
    const handleSubmit = () => {
        if (!text.trim()) {
            return;
        }
        const newTodo: TodoType = { _id: nanoid(5), title: text };
        dispatch({ type: 'ADD_TODO', playload: newTodo });
        setText('');
    };
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };
    return (
        <>
            <input type="text" id="newTodo" value={text} onChange={handleOnChange} />
            <button type="button" onClick={() => handleSubmit()}>
                ADD #{state.length + 1}
            </button>
        </>
    );
};
