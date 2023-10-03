import { useKeyPress } from 'ahooks';
import { useDispatch } from 'react-redux';
import {
    deleteSelectedQst,
    selectNextQst,
    selectPrevQst,
} from '../store/componentsReducer';

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

    // TODO: 考虑引入redux-saga, 在这里调用addQst这个action, 复制快捷键
    useKeyPress(['ctrl.v', 'command.v'], () => {});

    // 快速上移和下移选中组件
    useKeyPress(['uparrow'], () => {
        if (isActiveElementValid()) {
            dispatch(selectPrevQst());
        }
    });

    useKeyPress(['downarrow'], () => {
        if (isActiveElementValid()) {
            dispatch(selectNextQst());
        }
    });
};
