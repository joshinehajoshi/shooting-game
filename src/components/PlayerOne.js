import React from 'react'
import { Button } from 'react-bootstrap'

function PlayerOne({playerTwoScore, setPlayerTwoScore, playerOneScore}) {
    const shootHandler = () => {
       let rand = Math.random() * 5;
       let randonInteger = Math.floor(rand);
       setPlayerTwoScore(playerTwoScore - randonInteger)

    }
  return (
    <div>
        <h2>Player 1</h2>
        <h3>Score: {playerOneScore}</h3>
        <Button onClick={shootHandler}>Shoot</Button>
    </div>
  )
}

export default PlayerOne