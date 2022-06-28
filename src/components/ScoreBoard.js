import React from 'react';
import "./ScoreBoard.css"

export default function ScoreBoard ({scores, xPlaying}) {
    const {xScore, oScore} = scores;
    // extract them
    return (
        <div className='scoreBoard'>
            <span className={`score x-score ${!xPlaying && "inactive"}`}>X - {xScore}</span>
            <span className={`score o-score ${xPlaying && "inactive"}`}>O - {oScore}</span>
        </div>
    )
}