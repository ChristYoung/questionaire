import { QuestionnaireInfo } from '../../components/QuestionComponents/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import produce from 'immer';

const INIT_STATE: QuestionnaireInfo = {
    name: '',
    description: '',
    id: '',
};

export type QuestionnaireInfoStateType = {
    questionnaireInfo: QuestionnaireInfo;
};

export const questionnaireInfoSelector = (state: QuestionnaireInfoStateType) =>
    state.questionnaireInfo as QuestionnaireInfo;

export const questionnaireInfoSlice = createSlice({
    name: 'questionnaire',
    initialState: INIT_STATE,
    reducers: {
        resetQuestionnaireInfo: (
            state: QuestionnaireInfo,
            action: PayloadAction<QuestionnaireInfo>,
        ) => {
            return action.payload;
        },

        changeQuestionnaireName: produce(
            (draft: QuestionnaireInfo, action: PayloadAction<string>) => {
                if (action.payload) {
                    draft.name = action.payload;
                }
            },
        ),
    },
});

export const { resetQuestionnaireInfo, changeQuestionnaireName } =
    questionnaireInfoSlice.actions;
export default questionnaireInfoSlice.reducer;
