import { useState } from "react";
import BoardCell from "./BoardCell";

const Board = ({ board, setTouchAction }) => {
  const [touchStartPos, setTouchStartPos] = useState({ x: 0, y: 0 });

  const onTouchStart = (event) => {
    event.preventDefault()
    setTouchStartPos({ x: event.touches[0].clientX, y: event.touches[0].clientY });
  };
 
  const onTouchMove = (event) => {
    event.preventDefault();
    const touchX = event.touches[0].clientX;
    const touchY = event.touches[0].clientY;
 
    const deltaX = touchX - touchStartPos.x;
    const deltaY = touchY - touchStartPos.y;
 
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 20) {
        setTouchAction({start: true, direction: 'ArrowRight'});
      } else if(deltaX < -20) {
        setTouchAction({start: true, direction: 'ArrowLeft'});
      }
    } else {
      setTouchAction({start: true, direction: 'ArrowDown'});
    }
  };

  const onTouchEnd = () => {
    setTouchAction({start: false, direction: 'ArrowDown'});
  };

  return (
    <div 
      className={`grid grid-rows-${board.size.rows} overflow-hidden bg-dun rounded-lg gap-[1px] p-2`} 
      onTouchStart={onTouchStart} 
      onTouchMove={onTouchMove} 
      onTouchEnd={onTouchEnd} 
      onClick={() => setTouchAction({start: true, direction: 'ArrowUp'})}
    >
      {board.rows.map((row, y) => (
          <div key={y} className="grid grid-cols-10 gap-[1px]">
            {row.map((cell, x) => (
              <div className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px]">
                  <BoardCell key={x * board.size.columns + x} cell={cell} /> 
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Board;
