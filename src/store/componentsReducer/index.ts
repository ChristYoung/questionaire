// 存储组件列表的数据
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { QuestionListItem, QuestionnaireInfo } from '../../types';
import { insertItemToArray } from '../../utils';
import produce from 'immer';

export type QstListState = {
    questions?: QuestionListItem[];
    selectedId?: string; // 被点击选中的组件id
    selectedComponent?: QuestionListItem; // 被点击选中的组件
};

export const INIT_STATE: QstListState = {
    selectedId: '',
    selectedComponent: undefined,
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
            return {
                ...state,
                questions,
                selectedId: '',
                selectedComponent: undefined,
            };
        },

        // 修改被选中的组件id
        changeSelectedId: (
            state: QstListState,
            action: PayloadAction<string>,
        ) => {
            const selectedId = action.payload;
            const selectedComponent = state.questions.find(
                c => c.id === selectedId,
            );
            return { ...state, selectedId, selectedComponent };
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
                    questions: insertItemToArray<QuestionListItem>(
                        state.questions,
                        selectedIndex + 1,
                        action.payload,
                    ),
                };
            }
        },

        // 修改组件属性, 因为要精准修改某个组件的属性, 所以需要使用immer
        changeQstProps: produce(
            (
                draft: QstListState,
                action: PayloadAction<{ id: string; newProps: any }>,
            ) => {
                const { newProps, id } = action.payload;
                const currentQst = draft.questions.find(q => q.id === id);
                if (currentQst) {
                    currentQst.propsObj = {
                        ...currentQst.propsObj,
                        ...newProps,
                    };
                    currentQst.props = JSON.stringify(currentQst.propsObj);
                    draft.selectedComponent = currentQst;
                }
            },
        ),
    },
});

export const { resetQstList, changeSelectedId, addQst, changeQstProps } =
    qstListSlice.actions;
export default qstListSlice.reducer;
