import { getLevel } from './common';

export const checkMove = () => {

}

export const checkBombMove = () => {

}

export const checkEat = (self: string, target:string) => {
    const selfLevel = getLevel(self);
    const targetLevel = getLevel(target);
    if(selfLevel === 1 && targetLevel === 9) return true; 
    if(selfLevel === 2) return true;
    return selfLevel > targetLevel
}