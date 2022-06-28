import React from 'react'
import "./ResetButton.css"

export default function ResetButton ({resetBoardProp}) {
    return (
        <button className="resetButton" onClick={resetBoardProp}>
            Reset
        </button>
    )
}