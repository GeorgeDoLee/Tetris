import Board from "./Board";
import GameStats from "./GameStats";
import Previews from "./Previews";
import { useBoard } from "../hooks/useBoard";
import { useGameStats } from "../hooks/useGameStats";
import { usePlayer } from "../hooks/usePlayer";
import GameControler from "./GameControler";
import { useState } from "react";

const Tetris = ({ rows, columns, setGameOver }) => {
  const [gameStats, addLinesCleared] = useGameStats();
  const [player, setPlayer, resetPlayer] = usePlayer();
  const [board, setBoard] = useBoard({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared
  });
  const [touchAction, setTouchAction] = useState({start: false, direction: ''});
  
  return (
     <div className="flex flex-col gap-4 sm:flex-row" >
        <div className="sm:hidden">
          <Previews tetrominoes={player.tetrominoes} touchAction={touchAction} setTouchAction={setTouchAction} />
        </div>
        <Board board={board} setTouchAction={setTouchAction} />
        <div className="sm:hidden">
          <GameStats gameStats={gameStats} />
        </div>
        <div className="flex-row justify-around hidden sm:flex-col sm:flex">
          <Previews tetrominoes={player.tetrominoes} touchAction={touchAction} setTouchAction={setTouchAction} />
          <GameStats gameStats={gameStats} />
        </div>
        <GameControler 
           board={board}
           gameStats={gameStats}
           player={player}
           setGameOver={setGameOver}
           setPlayer={setPlayer}
           touchAction={touchAction}
         />
     </div>
   );
 };
 
 export default Tetris;