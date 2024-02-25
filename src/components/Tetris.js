import Board from "./Board";
import GameStats from "./GameStats";
import Previews from "./Previews";
import { useBoard } from "../hooks/useBoard";
import { useGameStats } from "../hooks/useGameStats";
import { usePlayer } from "../hooks/usePlayer";
import GameControler from "./GameControler";

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

  return (
    <div className="flex gap-4">
      <Board board={board} />
      <div className="flex flex-col justify-around">
        <Previews tetrominoes={player.tetrominoes} />
        <GameStats gameStats={gameStats} />
        <GameControler 
        board={board}
        gameStats={gameStats}
        player={player}
        setGameOver={setGameOver}
        setPlayer={setPlayer}
      />
      </div>
    </div>
  );
};

export default Tetris;
