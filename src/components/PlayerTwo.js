import React from 'react';
import { Button } from 'react-bootstrap';

function PlayerTwo({playerOneScore, setPlayerOneScore, playerTwoScore}) {
    const shootHandler = () => {
        let rand = Math.random() * 5;
        let randonInteger = Math.floor(rand);
        setPlayerOneScore(playerOneScore - randonInteger)
 
     }
  return (
    <div>
    <h2>Player 2</h2>
    <h3>Score: {playerTwoScore}</h3>
    <Button onClick={shootHandler}>Shoot</Button>
</div>
  )
}

export default PlayerTwo