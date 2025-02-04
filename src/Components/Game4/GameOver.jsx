import React from "react";
const GameOver = ({ Tries, SetGameOver, SetTries }) => {
    const HandleRestart = () => {
        SetGameOver(false);
        SetTries(0);
    }
    return (
        <>
            <div className="Game-OverScreen">
                <div className="Box">
                    <p className="PTR">Game Over After {Tries} Tries</p>
                    <button className="PABTN" onClick={HandleRestart}>Play Again</button>
                </div>
            </div>
        </>
    );
}
export default GameOver;