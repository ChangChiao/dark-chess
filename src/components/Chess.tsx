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
        "border-r-2 relative border-gray-500 h-32 w-32 border-b-2 flex justify-center items-center",
        isCurrent && "after:absolute after:h-[110px] after:w-[110px] after:border-2 after:content-[''] after:border-red-500",
    )}
      key={id}
    >
      <div className="w-28 h-28 chess cursor-pointer  bg-orange-300 rounded-full flex justify-center items-center">
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
