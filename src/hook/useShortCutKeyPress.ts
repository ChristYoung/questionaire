import { useKeyPress } from 'ahooks';
import { useDispatch } from 'react-redux';
import { deleteSelectedQst } from '../store/componentsReducer';
import { useGetQstList } from './useGetQstList';

// 为了防止在右侧属性编辑框中输入时也触发快捷键, 需要判断是否在输入框中
export const isActiveElementValid = () => {
    // 小知识: document.activeElement可以获取当前焦点的元素, 在输入框中输入时, activeElement就是输入框, 在输入框外输入时, activeElement就是body
    const activeElement = document.activeElement;
    return activeElement === document.body;
};

export const useShortCutKeyPress = () => {
    const dispatch = useDispatch();
    // 删除快捷键
    useKeyPress(['backspace', 'delete'], () => {
        if (isActiveElementValid()) {
            dispatch(deleteSelectedQst());
        }
    });

    // 复制快捷键
    useKeyPress(['ctrl.v', 'command.v'], () => {});
};
