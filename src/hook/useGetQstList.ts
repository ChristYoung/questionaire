import { useSelector } from 'react-redux';
import { QstListStateType } from '../store';
import { QstListState } from '../store/componentsReducer/componentsSlice';

export const useGetQstList = () => {
    return useSelector<QstListStateType>(
        state => state.qstList,
    ) as QstListState;
};
