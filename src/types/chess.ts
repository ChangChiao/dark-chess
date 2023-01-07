export type ChessDict = {
    R1: string;
    R2: string;
    R3: string;
    R4: string;
    R5: string;
    R6: string;
    R7: string;
    B1: string;
    B2: string;
    B3: string;
    B4: string;
    B5: string;
    B6: string;
    B7: string;
}

export type ChessKey = keyof ChessDict;

export type ChessType = {
    id: ChessKey | null;
    status: number // 0蓋住 1翻開 2被吃掉
}