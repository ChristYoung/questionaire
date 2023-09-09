// 存储组件列表的数据
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { QuestionListItem, QuestionnaireInfo } from '../../types';

export type QstListState = Pick<QuestionnaireInfo, 'questions'>;

export const INIT_QST_LIST: QuestionListItem[] = [];

export const qstListSlice = createSlice({
    name: 'qstList',
    initialState: INIT_QST_LIST,
    reducers: {
        // 重置所有问卷详情
        resetQstList: (state, action: PayloadAction<QuestionListItem[]>) =>
            action.payload,
    },
});

export const { resetQstList } = qstListSlice.actions;
export default qstListSlice.reducer;
