import { useSelector } from 'react-redux';
import { QstListStateType } from '../store';
import { QuestionListItem } from '../types';

export const useGetQstList = () => {
    const qstList = useSelector<QstListStateType>(
        state => state.qstList,
    ) as QuestionListItem[];
    return qstList;
};
