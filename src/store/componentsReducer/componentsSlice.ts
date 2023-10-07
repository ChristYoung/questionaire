// 存储组件列表的数据
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { QuestionListItem } from '../../components/QuestionComponents/types';
import { deleteItemFromArray, insertItemToArray, moveNext } from '../../utils';
import produce from 'immer';
import { QstListStateType } from '..';

export type QstListState = {
    questions?: QuestionListItem[];
    selectedId?: string; // 被点击选中的组件id
    copiedComponent?: QuestionListItem; // 被复制的组件
    selectedComponent?: QuestionListItem; // 被点击选中的组件
};

export const INIT_STATE: QstListState = {
    selectedId: '',
    selectedComponent: undefined,
    copiedComponent: undefined,
    questions: [],
};

export function addComponent(
    state: QstListState,
    newQuestion: QuestionListItem,
): QstListState {
    const selectedId = state.selectedId;
    const selectedIndex = state.questions.findIndex(q => q.id === selectedId);
    if (selectedIndex < 0) {
        return {
            ...state,
            questions: [...state.questions, newQuestion],
        };
    } else {
        return {
            ...state,
            questions: insertItemToArray<QuestionListItem>(
                state.questions,
                selectedIndex + 1,
                newQuestion,
            ),
        };
    }
}

// selector
export const getQstListSelector = (state: QstListStateType) => state.qstList;

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
            return addComponent(state, action.payload);
        },

        // 删除选中的组件
        deleteSelectedQst: (state: QstListState) => {
            const selectedIndex = state.questions.findIndex(
                s => s.id === state.selectedId,
            );

            // 在删除之前计算, 将selectedId和selectedIndex设置为下一个问题
            const nextSelectedIndex = moveNext(state.questions, selectedIndex);

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
                action: PayloadAction<{ id: string; newProps: object }>,
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

        // 隐藏一个组件, 本质上也是修改组件的属性, 但是因为要额外处理nextSelectedIndex, 单独拿出来做一个reducer
        hiddenQst: produce(
            (
                draft: QstListState,
                action: PayloadAction<{ isHidden: boolean; id: string }>,
            ) => {
                const { id, isHidden } = action.payload;
                const currentQst = draft.questions.find(q => q.id === id);
                draft.selectedComponent = undefined;
                draft.selectedId = '';
                currentQst.propsObj = {
                    ...currentQst.propsObj,
                    isHidden,
                };
                currentQst.props = JSON.stringify(currentQst.propsObj);
            },
        ),

        // 锁定或者解锁一个组件
        lockOrUnLockQst: produce(
            (
                draft: QstListState,
                action: PayloadAction<{ id: string; disabled: boolean }>,
            ) => {
                const { id, disabled } = action.payload;
                const currentQst = draft.questions.find(q => q.id === id);
                currentQst.propsObj = {
                    ...currentQst.propsObj,
                    disabled,
                };
                currentQst.props = JSON.stringify(currentQst.propsObj);
                draft.selectedComponent.propsObj.disabled = disabled;
            },
        ),

        // 选中上一个组件
        selectPrevQst: (state: QstListState) => {
            const selectedIndex = state.questions.findIndex(
                q => q.id === state.selectedId,
            );
            const nextSelectedIndex = selectedIndex - 1;
            if (nextSelectedIndex >= 0) {
                return {
                    ...state,
                    selectedId: state.questions[nextSelectedIndex].id,
                    selectedComponent: state.questions[nextSelectedIndex],
                };
            } else {
                return state;
            }
        },

        // 选中下一个组件
        selectNextQst: (state: QstListState) => {
            const selectedIndex = state.questions.findIndex(
                q => q.id === state.selectedId,
            );
            const nextSelectedIndex = selectedIndex + 1;
            if (nextSelectedIndex < state.questions.length) {
                return {
                    ...state,
                    selectedId: state.questions[nextSelectedIndex].id,
                    selectedComponent: state.questions[nextSelectedIndex],
                };
            } else {
                return state;
            }
        },
    },
});

export const {
    resetQstList,
    changeSelectedId,
    addQst,
    changeQstProps,
    deleteSelectedQst,
    hiddenQst,
    selectNextQst,
    selectPrevQst,
    lockOrUnLockQst,
} = qstListSlice.actions;
export default qstListSlice.reducer;
