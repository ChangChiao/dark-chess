import clsx from "clsx";
import { useMemo } from "react";
import { ChessType } from "../types/chess"


const Chess = ({id, status}: ChessType) => {
  const isBlack = useMemo(() => {
    return id.substring(0, 1) === "B"
  }, [id])  
  return (
    <div className="border-r-2 border-black h-32 w-32 border-b-2 flex justify-center items-center" key={id}>
      <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center">
        <div
          className={clsx(
            "w-24 h-24 rounded-full text-6xl flex justify-center items-center border-2"
          )}
        >
          車
        </div>
      </div>
    </div>
  );
};

export default Chess;
