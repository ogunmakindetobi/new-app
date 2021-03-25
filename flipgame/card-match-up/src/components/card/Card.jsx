import React from 'react';
import ReactCardFilp from "react-card-flip"

const Card = ({ id,isFlipped, handleClick, cardNumber }) => (
    <ReactCardFilp isFlipped={isFlipped} flipSpeedBackToFront={1} flipSpeedBackToBack={1}>
    <button id={id} className={`card card-front ${cardNumber !== -1 ? "" : "hide-card"}`} onClick={handleClick} key="front">
    </button>

    <button id={id} className={`card card-back ${cardNumber !== -1 ? "":"hide-card"}`} onClick={handleClick} key="back">
{ cardNumber }
</button>
    </ReactCardFilp>
);

export default Card;