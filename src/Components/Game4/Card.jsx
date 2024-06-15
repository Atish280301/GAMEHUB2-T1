import React, { useEffect, useState } from "react";
import '../Game4/Game4.css';
const Card = ({card, SetSelectedCard, SelectedCard}) => {
    const [IsFlipped, SetIsFlipped] = useState(false);
    const HandleClick = () => {
        SetSelectedCard([...SelectedCard, card]);
    }
    useEffect(()=>{
        if(SelectedCard[0] === card || SelectedCard[1] === card || card.isMatch){
            SetIsFlipped(true);
        } else {
            SetIsFlipped(false)
        }
    },[SelectedCard])
    return(
        <>
            <div className={IsFlipped ? "Card open stop-clicking":"Card"} onClick={HandleClick}>
                <div className="front">
                    <img src={card.img} alt="" className="img" />
                </div>
                <div className="back"></div>
            </div>
        </>
    );
}
export default Card;