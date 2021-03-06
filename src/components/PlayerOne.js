import React from 'react'
import { Button } from 'react-bootstrap'

function PlayerOne({
  playerTwoScore, 
  setPlayerTwoScore, 
  playerOneScore,
  playerOneBtn
}) {
    const shootHandler = () => {
       let rand = Math.random() * 5;
       let randonInteger = Math.floor(rand);
       if (playerTwoScore > 0) {
       setPlayerTwoScore(playerTwoScore - randonInteger);
       } else setPlayerTwoScore(0);

    }
  return (
    <div>
        <h2>Player 1</h2>
        <h3>Score: {playerOneScore}</h3>
        <Button 
        onClick={shootHandler}
        disabled={playerOneBtn}
        >Shoot</Button>
    </div>
  )
}

export default PlayerOne