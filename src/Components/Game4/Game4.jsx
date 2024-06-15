import React, { useState, useEffect } from "react";
import '../Game4/Game4.css';
import ArrayImage from "./Array";
import Card from "./Card";
import GameOver1 from "./GameOver";
const Game4 = () => {
    const [cards, SetCard] = useState([]);
    const [SelectedCard, SetSelectedCard] = useState([]); 
    const [Score, SetScore] = useState(0);
    const [Tries, SetTries] = useState(0);
    const [GameOver, SetGameOver] = useState(false);

    const ShuffleImages = () => {
        let shuffleArray = [...ArrayImage, ...ArrayImage].map((item, index) => ({ ...item, id: index + 1 })).sort((a, b) => 0.5 - Math.random());
        SetScore(0);
        SetCard(shuffleArray);
    }
    useEffect(() => {
        ShuffleImages();
    }, []);
    useEffect(()=>{
        console.log(SelectedCard);
        if(SelectedCard.length === 2){
            setTimeout(()=>{
                SetSelectedCard([]);
            },1000)
            CheckMatch()
        }
    },[SelectedCard]);

    const CheckMatch = () => {
        if(SelectedCard[0].num === SelectedCard[1].num){
            SetScore(prev => prev + 1);
           let UpdatedCard = cards.map((card)=>{
                if(card.num === SelectedCard[0].num){
                    return {...card, isMatch: true}
                }
                return card
            })
            SetCard(UpdatedCard)
        } else {
            SetTries(prev => prev + 1)
        }
    }
    //Restart Game
    useEffect(()=>{
        if(Score === ArrayImage.length) {
            console.log("Game Over");
            setTimeout(()=>{
                ShuffleImages();
                SetGameOver(true);
            },1000);
        }
    },[Score, ShuffleImages]);
    return (
        <>
            {GameOver && <GameOver1 SetTries={SetTries} Tries={Tries} SetGameOver={SetGameOver} />}
            <div className="MCHD"><h1 className="MCH1">Memory Card Game</h1></div>
            <div className="MainContainer">
                <div className="Container">
                    {
                        cards.map((card) => (
                            <Card key={card.id} card={card} SetSelectedCard = {SetSelectedCard} SelectedCard = {SelectedCard} />
                        ))
                    }
                </div>
            </div>
            <div className="Score-Container">
                <p className="Score">Score: {Score}</p>
                <p className="Tries">Tries: {Tries}</p>
            </div>
        </>
    );
}
export default Game4;