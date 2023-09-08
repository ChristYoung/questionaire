// 获取[x, y]区间的随机整数.
export function getRandomInt(start: number, end: number): number {
    return Math.floor(Math.random() * (end - start + 1) + start);
}
