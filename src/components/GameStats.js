import React from "react";

const GameStats = ({gameStats}) => {
    const { level, points, linesCompleted, linesPerLevel } = gameStats;
    const linesToLevel = linesPerLevel - linesCompleted;
    return (  
        <ul className="text-anti-flash flex flex-col gap-2">
            <div>
                <li>Level</li>
                <li className="text-4xl">{level}</li>
            </div>
            <div>
                <li>Lines to level</li>
                <li className="text-4xl">{linesToLevel}</li>    
            </div>
            <div>
                <li>Points</li>
                <li className="text-4xl">{points}</li>
            </div>
        </ul>
    );
}
 
export default React.memo(GameStats);