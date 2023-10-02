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
