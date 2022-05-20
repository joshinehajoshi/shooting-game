import React from 'react';
import { Button } from 'react-bootstrap';

function PlayerTwo({
  playerOneScore, 
  setPlayerOneScore, 
  playerTwoScore,
  playerTwoBtn
}) {
    const shootHandler = () => {
        let rand = Math.random() * 5;
        let randonInteger = Math.floor(rand);
        if (playerOneScore > 0) {
        setPlayerOneScore(playerOneScore - randonInteger);
        } else setPlayerOneScore(0);
 
     }
  return (
    <div>
    <h2>Player 2</h2>
    <h3>Score: {playerTwoScore}</h3>
    <Button 
    onClick={shootHandler}
    disabled={playerTwoBtn}
    >Shoot</Button>
</div>
  )
}

export default PlayerTwo