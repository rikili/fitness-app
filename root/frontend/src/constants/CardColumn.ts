const vertGap = 10;

function calc(sizeList: number): number {
  const listSpacing: number = (sizeList - 1) * 30;
  const header: number = 50;
  return listSpacing + header + vertGap + 40;
}
const sizeMap = new Map<number, number>([
  [1, calc(1)],
  [2, calc(2)],
  [3, calc(3)],
  [4, calc(4)],
  [5, calc(5)],
  [6, calc(6)],
]);

const screenHeight: number = window.innerHeight - 130;

const longerListSpacing: number = 255 + vertGap;

export { sizeMap, screenHeight, longerListSpacing };
