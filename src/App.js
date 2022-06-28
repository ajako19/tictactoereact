import './App.css';
import React, {useState} from 'react';
import Board from './components/Board';
import ScoreBoard from './components/ScoreBoard';
import ResetButton from './components/ResetButton';



function App() {

  const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({xScore: 0, oScore: 0});
  const [gameOver, setGameOver] = useState(false)
  // array with nine values as state, null as each for now
  function handleClick (clickedIndex) {
    let updatedBoard = board.map((value, index) => {
      if (index === clickedIndex) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    })
    // maps thru each board, updates it saying if the index
    // of the box is the one i clicked, return x
    setBoard(updatedBoard)
    const winner = checkWin(updatedBoard)

    if(winner) {
      if (winner === "O") {
        let {oScore} = scores;
        oScore += 1;
        setScores({...scores, oScore})
      } else {
        let {xScore} = scores;
        // extracted oScore from the scores state
        xScore += 1;
        setScores({...scores, xScore})
        // keep scores, update oScore
      }
    }

    setXPlaying(!xPlaying)
  }

  function checkWin (board) {
    for(let i = 0; i < winConditions.length; i++) {
      const [x, y, z] = winConditions[i]

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true)
        return board[x];
      } // loops thru each one, checks if it's x, y, z have the
      // conditions met to win, and checks every single click
    }
  }

  function resetBoardGameOver() {
    setGameOver(false);
    setBoard(Array(9).fill(null))
  }

  function resetBoardProp () {
    setGameOver(false);
    setBoard(Array(9).fill(null))
    setScores(({xScore: 0, oScore: 0}))
  }

  return (
    <div className="App">
      <ScoreBoard scores={scores} xPlaying={xPlaying}></ScoreBoard>
      <Board board={board} onClick={gameOver ? resetBoardGameOver : handleClick}/>
      <ResetButton resetBoardProp={resetBoardProp}/>
    </div>

  );
} // if game is over, resetboard, if not, usual function

export default App;
