import { useSelector } from 'react-redux';
import { QstListStateType } from '../store';
import {
    QstListState,
    getQstListSelector,
} from '../store/componentsReducer/componentsSlice';

export const useGetQstList = () => {
    return useSelector<QstListStateType>(getQstListSelector) as QstListState;
};
