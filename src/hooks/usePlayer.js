import { useState, useCallback } from "react"
import { randomTetramino } from "../utilities/Tetraminoes"

const buildPlayer = (previous) => {
    let tetraminoes;

    if(previous){
        tetraminoes = [...previous.tetraminoes];
        tetraminoes.unshift(randomTetramino());
    } else {
        tetraminoes = Array(5).fill(0).map((_) => randomTetramino())
    }

    return {
        collided: false,
        isFastDropping: false,
        position: {row: 0, colums: 4},
        tetraminoes,
        tetramino: tetraminoes.pop()
    };
};

export const usePlayer = () => {
    const [player, setPlayer] = useState(buildPlayer());

    const resetPlayer = useCallback(() => {
        setPlayer((prev) => buildPlayer(prev));
    }, []);

    return [player, setPlayer, resetPlayer];
}