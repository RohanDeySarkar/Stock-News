import React from 'react';
import "./Card.css"

function Card({score, exchDisp, longname}) {
    return (
        <div className="card">
            <h1>{exchDisp}</h1>
            <h2>{score}</h2>
            <p>{longname}</p>
        </div>
    )
}

export default Card
