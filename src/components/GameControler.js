import { useInterval } from "../hooks/useInterval";
import { useDropTime } from "../hooks/useDropTime";
import { Action, actionForKey, actionIsDrop } from "../utilities/Input";
import { playerController } from "../utilities/PlayerController";

const GameControler = ({board, gameStats, player, setGameOver, setPlayer}) => {
    const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
        gameStats
    });

    useInterval(() => {
        handleInput({action: Action.SlowDrop});
    }, dropTime)

    const onKeyUp = ({ code }) => {
        const action = actionForKey(code);
        if(action === Action.Quit){
            setGameOver(true);
        }
        if(actionIsDrop(action)) resumeDropTime();
    };

    const onKeyDown = ({ code }) => {
        const action = actionForKey(code);

        if(action === Action.Pause){
            if(dropTime){
                pauseDropTime();
            } else {
                resumeDropTime();
            }
        } else if(action === Action.Quit){
            setGameOver(true);
        } else {
            if(actionIsDrop(action)) pauseDropTime();
            handleInput({action})
        }
    };
    
    const handleInput = ({action}) => {
        playerController({
            action,
            board,
            player,
            setPlayer,
            setGameOver
        })
    }
    
    return (  
        <input 
            className="absolute top-[-100em]"
            type="text"
            autoFocus
            onBlur={e => e.target.focus()}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
         />
    );
}
 
export default GameControler;