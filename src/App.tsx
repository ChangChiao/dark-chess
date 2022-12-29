import { useState } from "react";
import { getRandom } from "./utils/common"
import { ChessType } from "./types/chess";
import Chess from "./components/Chess";

function App() {
  const [count, setCount] = useState(0);
  const genChess = () => {
    return { id: getRandom(0, 1000).toString(), status: 0 };
  };
  const [pos, setPos] = useState<ChessType[]>(
    Array.from({ length: 32 }, () => genChess())
  );

  return (
    <div className="App h-screen w-screen bg-orange-200">
      <div className="border-[10px] border-black w-[1060px] h-[550px] mx-auto p-[7px] flex justify-center items-center">
        <div className="flex flex-wrap border-t-2 border-l-2 border-black">
          {pos.map(item => <Chess {...item} /> )}
        </div>
      </div>
    </div>
  );
}

export default App;
