export const getRandom = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
}

export const getLevel = (type: string) => {
    return  Number(type.substring(1, 2));
}
