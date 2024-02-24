const className = 'tetramino';

export const TETRAMINOES = {
    I: {
        shape: [
            [0,1,0,0],
            [0,1,0,0],
            [0,1,0,0],
            [0,1,0,0]
        ],
        className: `${className}__i`
    },
    J: {
        shape: [
            [0,1,0,0],
            [0,1,0,0],
            [1,1,0,0]
        ],
        className: `${className}__j`
    },
    L: {
        shape: [
            [0,1,0,0],
            [0,1,0,0],
            [0,1,1,0],
        ],
        className: `${className}__l`
    },
    0: {
        shape: [
            [1,1],
            [1,1],
        ],
        className: `${className}__o`
    },
    S: {
        shape: [
            [0,1,1],
            [1,1,0],
            [0,0,0],
        ],
        className: `${className}__s`
    },
    T: {
        shape: [
            [1,1,1],
            [0,1,0],
            [0,0,0],
        ],
        className: `${className}__t`
    },
    Z: {
        shape: [
            [1,1,0],
            [0,1,1],
            [0,0,0],
        ],
        className: `${className}__z`
    }
    
}

export const randomTetramino = () => {
    const keys = Object.keys(TETRAMINOES);
    const index = Math.floor(Math.random() * keys.length);
    const key = keys[index];
    return TETRAMINOES[key];
}

export const transferToBoard = ({
    className, 
    isOccupied,
    position,
    rows,
    shape
}) => {
    shape.forEach((row, y) => {
        row.forEach((cell, x) => {
            if(cell){
                const occupied = isOccupied;
                const _y = y + position.row;
                const _x = x + position.column;
                rows[_y][_x] = { occupied, className };
            }
        })
    })

    return rows;
};