import React, { useState } from "react";
import Preview from "./Preview";
import PauseImg from '../assets/pause.png';
import ResumeImg from '../assets/resume.png';

const Previews = ({ tetrominoes, touchAction, setTouchAction }) => {
  const previewTetrominoes = tetrominoes
    .slice(1 - tetrominoes.length)
    .reverse();

  const handlePause = () => {
    if(touchAction.direction === 'KeyP'){
      setTouchAction({start: false, direction: 'ArrowDown'});
    } else {
      setTouchAction({start: true, direction: 'KeyP'});
    }
  }

  return (
    <div className="flex flex-row gap-4 sm:gap-2 sm:flex-col">
      {previewTetrominoes.map((tetromino, index) => (
        <Preview tetromino={tetromino} index={index} key={index} />
      ))}
      <img 
        src={touchAction.direction === 'KeyP' ? ResumeImg : PauseImg} 
        alt="icon not found" 
        onClick={handlePause}
        className="self-center w-8 h-8 sm:hidden"
      />
    </div>
  );
};

export default React.memo(Previews);
