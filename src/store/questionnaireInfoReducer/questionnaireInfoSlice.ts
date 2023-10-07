import { QuestionnaireInfo } from '../../components/QuestionComponents/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import produce from 'immer';

const INIT_STATE: QuestionnaireInfo = {
    name: '',
    description: '',
    id: '',
};

export const questionnaireInfoSlice = createSlice({
    name: 'questionnaireInfo',
    initialState: INIT_STATE,
    reducers: {
        setQuestionnaireInfo: (
            state,
            action: PayloadAction<QuestionnaireInfo>,
        ) => {
            return produce(state, draft => {
                draft.name = action.payload.name;
                draft.description = action.payload.description;
            });
        },
        resetQuestionnaireInfo: (
            state: QuestionnaireInfo,
            action: PayloadAction<QuestionnaireInfo>,
        ) => action.payload,
    },
});

export const { setQuestionnaireInfo, resetQuestionnaireInfo } =
    questionnaireInfoSlice.actions;
export default questionnaireInfoSlice.reducer;
