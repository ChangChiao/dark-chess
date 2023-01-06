import clsx from "clsx";
import { useMemo } from "react";
import { ChessType } from "../types/chess";
import { CHESS_LIST } from "../global/config";

type ChessProps = {
  index: number;
  current: number;
  setCurrent: (param: number) => void;
} & ChessType;

const Chess = ({ id, status, index, current, setCurrent }: ChessProps) => {
  const isBlack = useMemo(() => {
    return id.substring(0, 1) === "B";
  }, [id]);

  const isCurrent = useMemo(() => {
    return current === index
  }, [current, index])

  const isLineExist = useMemo(() => {
    return index === 19 || index === 20 || index === 27 || index === 28
  }, [index])

  const setLine = useMemo(() => {
    switch (index) {
        case 19:
            return 'before:-rotate-45'
        case 20:
            return 'before:rotate-45'
        case 27:
            return 'before:-rotate-[135deg]'
        case 28:
            return 'before:rotate-[135deg]'
        default:
            return null
    }
  }, [index])

  const handleClick = () => {
    if (isCurrent) {
      setCurrent(-1);
    } else {
      setCurrent(index);
    }
  };
  return (
    <div
      onClick={handleClick}
      className={clsx(
        "panel",
        setLine,
        isLineExist && "panel-line",
        isCurrent && "after:absolute after:h-[110px] after:w-[110px] after:border-2 after:content-[''] after:border-red-500",
    )}
      key={id}
    >
      <div className="w-28 h-28 relative chess cursor-pointer  bg-orange-300 rounded-full flex justify-center items-center">
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
    </div>
  );
};

export default Chess;
