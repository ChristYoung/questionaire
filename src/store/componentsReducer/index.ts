// 存储组件列表的数据
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { QuestionnaireInfo } from '../../types';

export const INIT_QST_LIST: QuestionnaireInfo = {
    name: '',
    questions: [],
};

export const qstListSlice = createSlice({
    name: 'qstList',
    initialState: INIT_QST_LIST,
    reducers: {
        // 重置所有问卷详情
        resetQstList: (state, action: PayloadAction<QuestionnaireInfo>) =>
            action.payload,
    },
});

export const { resetQstList } = qstListSlice.actions;
export default qstListSlice.reducer;
