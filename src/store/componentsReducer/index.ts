// 存储组件列表的数据
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { QuestionListItem, QuestionnaireInfo } from '../../types';

export type QstListState = {
    questions?: QuestionListItem[];
    selectedId?: string;
};

export const INIT_STATE: QstListState = {
    selectedId: '',
    questions: [],
};

export const qstListSlice = createSlice({
    name: 'qstList',
    initialState: INIT_STATE,
    reducers: {
        // 重置所有问卷详情
        resetQstList: (
            state: QstListState,
            action: PayloadAction<QstListState>,
        ) => {
            const questions = action.payload.questions.map(q => ({
                ...q,
                propsObj: JSON.parse(q.props),
            }));
            return { questions };
        },
        changeSelectedId: (
            state: QstListState,
            action: PayloadAction<string>,
        ) => {},
    },
});

export const { resetQstList } = qstListSlice.actions;
export default qstListSlice.reducer;
