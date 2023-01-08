import { useState } from "react";
import { getRandom } from "./utils/common";
import { shuffle } from "./utils/init";
import { ChessType } from "./types/chess";
import Chess from "./components/Chess";
import { CHESS_LIST } from "./global/config";
import Panel from "./components/Panel";

function App() {
  const genChess = () => {
    const arr = shuffle();
    return arr.map((item) => ({ id: item, status: 1 }));
  };
  const [pos, setPos] = useState<ChessType[]>(genChess());
  const [current, setCurrent] = useState<number>(-1);

  return (
    <div className="App h-screen w-screen bg-cyan-900">
      <div className="border-[10px] bg-white/90 border-black w-[1060px] h-[550px] mx-auto p-[7px] flex justify-center items-center">
        <div className="border-t-2 border-l-2 border-black relative ">
          <div className="flex flex-wrap absolute left-0 right-0 w-[1060px] h-[510px]">
            {Array.from({ length: 32 }).map((item, i) => (
              <Panel index={i} current={current} />
            ))}
          </div>
          <div className="flex flex-wrap">
            {pos.map((item, i) => (
              <Chess
                pos={pos}
                key={i}
                index={i}
                current={current}
                setCurrent={setCurrent}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
