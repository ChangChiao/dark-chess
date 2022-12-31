import { CHESS_LIST } from "../global/config";
import { getRandom } from "./common";
export const shuffle = () => {
console.log('createChess', createChess())
  const keysArr = Object.keys(createChess());
  for (let i = 0; i < keysArr.length; i++) {
    const target = getRandom(0, keysArr.length - 1);
    console.log("target", target);

    [keysArr[i], keysArr[target]] = [keysArr[target], keysArr[i]];
  }
  console.log("keysArr", keysArr);

  return keysArr;
};

export const createChess = () => {
  const keysArr = Object.keys(CHESS_LIST);
  return keysArr.reduce((prev, current) => {
    const type = Number(current.substring(1, 2));
    let arr = [];
    if (type === 1) {
      arr = new Array(5).fill(current);
    } else if (type === 7) {
      arr = [current];
    } else {
      arr = new Array(2).fill(current);
    }
    return [...prev, ...arr];
  }, [] as string[]);
};
