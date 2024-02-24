import React from "react";
import { buildBoard } from "../utilities/Board";
import { transferToBoard } from "../utilities/Tetraminoes"
import BoardCell from "./BoardCell";


const Preview = ({tetramino, index}) => {
    const {shape, className} = tetramino;
    const board = buildBoard({rows: 4, columns: 4});

    board.rows = transferToBoard({
        className,
        isOccupied: false,
        position: {row: 0, column: 0},
        rows: board.rows,
        shape
    });

    return (  
        <div className="w-20 h-20 rounded-lg bg-dun">
            <div className={`w-full h-full grid grid-cols-4 grid-rows-4 p-2`}>
                {board.rows.map((row, y) => 
                    row.map((cell, x) => (
                        <BoardCell key={x * board.size.column + x} cell={cell} />
                    ))
                )}
            </div>
        </div>
    );
}
 
export default React.memo(Preview);