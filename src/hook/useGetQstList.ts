import { useSelector } from 'react-redux';
import { QuestionListItem } from '../types';
import { QstListState } from '../store/componentsReducer';
import { QstListStateType } from '../store';

export const useGetQstList = () => {
    const qstList = useSelector<QstListStateType>(
        state => state.qstList.questions,
    ) as QuestionListItem[];
    return qstList;
};
