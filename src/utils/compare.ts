import { getLevel, getColor } from './common';
import { ChessKey } from '../types/chess';
export const checkMove = () => {

}

export const checkBombMove = () => {

}

export const isSameColor = (self: ChessKey, target:ChessKey) => {
    return getColor(self) === getColor(target)
}

export const checkEat = (self: ChessKey, target:ChessKey) => {
    if(isSameColor()) return;
    const selfLevel = getLevel(self);
    const targetLevel = getLevel(target);
    if(selfLevel === 1 && targetLevel === 9) return true; 
    if(selfLevel === 2) return true;
    return selfLevel > targetLevel
}