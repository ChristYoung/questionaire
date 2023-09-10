import { configureStore } from '@reduxjs/toolkit';
import qstListReducer from './componentsReducer/index';
import { QuestionListItem } from '../types';

export type QstListStateType = { qstList: QuestionListItem[] };

export default configureStore({
    reducer: {
        qstList: qstListReducer,
    },
});
