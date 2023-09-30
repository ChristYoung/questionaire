import { useSelector } from 'react-redux';
import { QstListStateType } from '../store';
import { QuestionListItem } from '../types';

export const useGetQstList = () => {
    const questions = useSelector<QstListStateType>(
        state => state.qstList.questions,
    ) as QuestionListItem[];

    const selectedId = useSelector<QstListStateType>(
        state => state.qstList.selectedId,
    ) as string;

    const selectedComponent = questions.find(qst => qst.id === selectedId);
    return { questions, selectedComponent, selectedId };
};
