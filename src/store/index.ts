import { configureStore } from '@reduxjs/toolkit';
import qstListReducer, { QstListState } from './componentsReducer/index';
import { QuestionListItem } from '../types';

export type QstListStateType = { qstList: QstListState };

export default configureStore({
    reducer: {
        qstList: qstListReducer,
    },
});
