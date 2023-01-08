import clsx from "clsx";
import { useMemo } from "react";
import { ChessType } from "../types/chess";
import { CHESS_LIST } from "../global/config";

type ChessProps = {
  index: number;
  current: number;
  pos: ChessType[];
  setCurrent: (param: number) => void;
} & ChessType;

const Chess = ({ pos, id, status, index, current, setCurrent }: ChessProps) => {
  const isBlack = useMemo(() => {
    if (!id) return false;
    return id.substring(0, 1) === "B";
  }, [id]);

  const isCurrent = useMemo(() => {
    return current === index;
  }, [current, index]);

  const checkVaild = () => {
    const self = pos[current]?.id;
    return self !== null
  }

  const checkSelect = () => {
    const self = pos[current];
    const target = pos[index];
  };


  const handleClick = () => {
    if(!checkVaild()) return;
    if (current !== -1) {
      if (isCurrent) {
        setCurrent(-1);
      } else {
        checkSelect();
      }
    } else {
      setCurrent(index);
    }
  };
  return (
    <div
      className="w-32 h-32 relative flex items-center justify-center"
    >
      {id && (
        <div key={id} onClick={handleClick} className="w-28 h-28 relative chess cursor-pointer  bg-orange-300 rounded-full flex justify-center items-center">
          {status !== 0 && (
            <div
              className={clsx(
                "w-24 h-24 rounded-full text-6xl flex justify-center items-center border-2",
                isBlack
                  ? "border-black text-black"
                  : "border-red-600 text-red-600"
              )}
            >
              {CHESS_LIST[id]}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chess;
