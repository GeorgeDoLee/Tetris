import React from "react";
import { buildBoard } from "../utilities/Board";
import { transferToBoard } from "../utilities/Tetrominoes";
import BoardCell from "./BoardCell";

const Preview = ({ tetromino }) => {
  const { shape, className } = tetromino;
  const board = buildBoard({ rows: 4, columns: 4 });

  board.rows = transferToBoard({
    className,
    isOccupied: false,
    position: { row: 0, column: 0 },
    rows: board.rows,
    shape
  });

  return (
    <div className="w-16 h-16 rounded-lg sm:w-20 sm:h-20 bg-dun">
      <div className={`w-full h-full grid grid-cols-4 grid-rows-4 p-2 gap-[1px]`}>
        {board.rows.map((row, y) =>
          row.map((cell, x) => (
            <BoardCell key={x * board.size.columns + x} cell={cell} />
          ))
        )}
      </div>
    </div>
  );
};

export default React.memo(Preview);
