// 存储组件列表的数据
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { QuestionListItem, QuestionnaireInfo } from '../../types';
import { insertItemToArray } from '../../utils';

export type QstListState = {
    questions?: QuestionListItem[];
    selectedId?: string; // 被点击选中的组件
};

export const INIT_STATE: QstListState = {
    selectedId: '',
    questions: [],
};

export const qstListSlice = createSlice({
    name: 'qstList',
    initialState: INIT_STATE,
    reducers: {
        // 重置所有问卷问题组件列表
        resetQstList: (
            state: QstListState,
            action: PayloadAction<QstListState>,
        ) => {
            const questions = action.payload.questions.map(q => ({
                ...q,
                propsObj: JSON.parse(q.props),
            }));
            return { questions, selectedId: '' };
        },

        // 修改被选中的组件id
        changeSelectedId: (
            state: QstListState,
            action: PayloadAction<string>,
        ) => {
            const selectedId = action.payload;
            return { selectedId, questions: state.questions };
        },

        // 添加一个组件
        addQst: (
            state: QstListState,
            action: PayloadAction<QuestionListItem>,
        ) => {
            const selectedId = state.selectedId;
            const selectedIndex = state.questions.findIndex(
                q => q.id === selectedId,
            );
            if (selectedIndex < 0) {
                return {
                    ...state,
                    questions: [...state.questions, action.payload],
                };
            } else {
                return {
                    ...state,
                    selectedId: action.payload.id,
                    questions: insertItemToArray<QuestionListItem>(
                        state.questions,
                        selectedIndex + 1,
                        action.payload,
                    ),
                };
            }
        },
    },
});

export const { resetQstList, changeSelectedId, addQst } = qstListSlice.actions;
export default qstListSlice.reducer;
