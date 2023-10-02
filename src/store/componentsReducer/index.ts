// 存储组件列表的数据
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { QuestionListItem } from '../../types';
import { deleteItemFromArray, insertItemToArray } from '../../utils';
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

        // 删除选中的组件
        deleteSelectedQst: (state: QstListState) => {
            const selectedIndex = state.questions.findIndex(
                s => s.id === state.selectedId,
            );

            // 在删除之前计算, 将selectedId和selectedIndex设置为下一个问题
            const nextSelectedIndex =
                state.questions.length <= 1
                    ? -1
                    : selectedIndex + 1 === state.questions.length // 如果删除的是最后一个问题, 则将selectedId设置为上一个问题
                    ? selectedIndex - 1
                    : selectedIndex + 1;

            // 删除问题
            const newQuestions = deleteItemFromArray(
                state.questions,
                selectedIndex,
            );

            return {
                ...state,
                questions: newQuestions,
                selectedId:
                    nextSelectedIndex >= 0
                        ? state.questions[nextSelectedIndex].id
                        : '',
                selectedComponent:
                    nextSelectedIndex >= 0
                        ? state.questions[nextSelectedIndex]
                        : undefined,
            };
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

export const {
    resetQstList,
    changeSelectedId,
    addQst,
    changeQstProps,
    deleteSelectedQst,
} = qstListSlice.actions;
export default qstListSlice.reducer;
