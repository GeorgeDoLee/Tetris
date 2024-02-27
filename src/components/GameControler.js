import { useInterval } from "../hooks/useInterval";
import { useDropTime } from "../hooks/useDropTime";
import { Action, actionForKey, actionIsDrop } from "../utilities/Input";
import { playerController } from "../utilities/PlayerController";
import { useEffect } from "react";

const GameControler = ({board, gameStats, player, setGameOver, setPlayer, touchAction}) => {
    const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
        gameStats
    });

    useEffect(() => {
        if(touchAction.start){
            onKeyDown({code: touchAction.direction});
        } else {
            onKeyUp({code: touchAction.direction});
        }
    }, [touchAction]);

    useInterval(() => {
        handleInput({action: Action.SlowDrop});
    }, dropTime)

    const onKeyUp = ({ code }) => {
        const action = actionForKey(code);
        if(actionIsDrop(action)) resumeDropTime();
    };

    const onKeyDown = ({ code }) => {
        const action = actionForKey(code);
        
        if(action === Action.Pause){
            if(dropTime){
                pauseDropTime();
            } else {
            console.log(1);

                resumeDropTime();
            }
        } else if(action === Action.Escape){
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
        <>
            {window.innerWidth < 600 ? null : (
                <input
                    className="absolute top-[-100em]"
                    type="text"
                    autoFocus
                    onBlur={(e) => e.target.focus()}
                    onKeyDown={onKeyDown}
                    onKeyUp={onKeyUp}
                />
            )}
        </>
    );
}
 
export default GameControler;