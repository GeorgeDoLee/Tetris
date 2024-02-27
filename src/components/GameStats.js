import React from "react";

const GameStats = ({ gameStats }) => {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;

  return (
    <ul className="flex flex-row gap-4 sm:gap-2 sm:flex-col text-anti-flash">
      <div>
        <li className="text-sm sm:text-lg">Level</li>
        <li className="text-xl sm:text-4xl">{level}</li>
      </div>
      <div>
        <li className="text-sm sm:text-lg">Lines to level</li>
        <li className="text-xl sm:text-4xl">{linesToLevel}</li>    
      </div>
      <div>
        <li className="text-sm sm:text-lg">Points</li>
        <li className="text-xl sm:text-4xl">{points}</li>
      </div>
    </ul>
  );
};

export default React.memo(GameStats);
