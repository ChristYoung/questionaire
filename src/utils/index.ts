import { QuestionListItem } from '../components/QuestionComponents/types';

// 获取[x, y]区间的随机整数.
export function getRandomInt(start: number, end: number): number {
    return Math.floor(Math.random() * (end - start + 1) + start);
}

// 在数组指定位置插入元素
export function insertItemToArray<T>(arr: T[], index: number, item: T): T[] {
    return [...arr.slice(0, index), item, ...arr.slice(index)];
}

// 在数组的指定位置删除元素, 并返回一个新的数组
export function deleteItemFromArray<T>(arr: T[], index: number): T[] {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

// move next
export function moveNext(
    arr: QuestionListItem[],
    currentSelectedIndex: number,
): number {
    const visibleQuestions = arr.filter(q => !q.propsObj.isHidden);
    return visibleQuestions.length <= 1
        ? -1
        : currentSelectedIndex + 1 === visibleQuestions.length // 如果删除的是最后一个问题, 则将selectedId设置为上一个问题
        ? currentSelectedIndex - 1
        : currentSelectedIndex + 1;
}
