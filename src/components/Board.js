import BoardCell from "./BoardCell";

const Board = ({ board }) => {

  return (
    <div className={`grid grid-rows-${board.size.rows} overflow-hidden bg-dun rounded-lg gap-[1px] p-2`} >
      {board.rows.map((row, y) => (
          <div key={y} className="grid grid-cols-10 gap-[1px]">
            {row.map((cell, x) => (
              <div className="w-[30px] h-[30px]">
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
