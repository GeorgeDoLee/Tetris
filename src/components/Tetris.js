import Board from "./Board";
import { useBoard } from '../hooks/useBoard'
import GameStats from "./GameStats";
import { useGameStats } from "../hooks/useGameStats";
import Previews from "./Previews";
import { usePlayer } from "../hooks/usePlayer";

const Tetris = ({rows, columns, setGameOver}) => {
    const [gameStats, addLinesCleared] = useGameStats();
    const [board, setBoard] = useBoard({ rows, columns });
    const [player, setPlayer, resetPlayer] = usePlayer();

    return (  
        <div className="flex gap-4">
            <Board board={board} />
            <div className="flex flex-col justify-around">
                <Previews tetraminoes={player.tetraminoes} />
                <GameStats gameStats={gameStats} />
            </div>
        </div>
    );
}
 
export default Tetris;