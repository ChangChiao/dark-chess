import { useState } from "react";
import { getRandom } from "./utils/common";
import { shuffle } from "./utils/init";
import { ChessType } from "./types/chess";
import Chess from "./components/Chess";
import { CHESS_LIST } from "./global/config";

function App() {
  const genChess = () => {
    const arr = shuffle()
    return arr.map(item => ({ id: item, status: 1 }));
  }
  const [pos, setPos] = useState<ChessType[]>(genChess())
  const [current, setCurrent] = useState<number>(-1);

  return (
    <div className="App h-screen w-screen bg-cyan-900">
      <div className="border-[10px] bg-white/90 border-black w-[1060px] h-[550px] mx-auto p-[7px] flex justify-center items-center">
        <div className="flex flex-wrap border-t-2 border-l-2 border-black">
          {pos.map((item, i) => (
            <Chess pos={pos} key={i} index={i} current={current} setCurrent={setCurrent} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
