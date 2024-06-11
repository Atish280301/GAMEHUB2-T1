import React, { useState } from "react";
import Overlay from "./Overlay";
import '../Game2/Game2.css';
import Tile from "./Tile";
const Board = () => {
    const suffle = () =>
        new Array(16)
            .fill()
            .map((index, i) => (i + 1))
            .sort(() => Math.random() - .5)
            .map((x, i) => ({ value: x, index: i }))
    const [numbers, setNumbers] = useState(suffle());

    const MoveTile = tile => {
        const t16 = numbers.find(n => n.value === 16).index
        if (![t16 - 1, t16 + 1, t16 - 4, t16 + 4].includes(tile.index)) return

        const newNumbers = [...numbers].map(number => {
            if (number.index !== t16 && number.index !== tile.index) return number

            else if (number.value === 16) return { value: 16, index: tile.index }

            return { value: tile.value, index: t16 }
        })
        setNumbers(newNumbers);
    }
    return (
        <>
            <div className="GameBoard">
                <div className="Board">
                    <Overlay />
                    {numbers.map((x, i) => (
                        <Tile key={i} number={x} MoveTile={MoveTile} />
                    ))}
                </div>
                <div className="Boardd-Btn">
                    <button className="BRDBTN">New Game</button>
                </div>
            </div>
        </>
    );
}
export default Board;