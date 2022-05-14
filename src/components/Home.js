import React, { useState } from 'react';
import '../style/home.css';
import { Button, Row, Col } from 'react-bootstrap';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';

function Home() {

    const [playerOneScore, setPlayerOneScore] = useState(100);
    const [playerTwoScore, setPlayerTwoScore] = useState(100);
    const resetHandle = () => {
        setPlayerOneScore(100);
        setPlayerTwoScore(100);
    }


  return (
    <div className='home-wrapper'>
        <Button onClick={resetHandle}>Start Game</Button>
        <Row>
            <Col>
            <PlayerOne 
            playerTwoScore={playerTwoScore}
            playerOneScore={playerOneScore}
            setPlayerTwoScore={setPlayerTwoScore}
            />
            </Col>
            <Col>
            <PlayerTwo
             playerOneScore={playerOneScore}
             playerTwoScore={playerTwoScore}
             setPlayerOneScore={setPlayerOneScore}
            />
            </Col>
        </Row>
    </div>
  )
}

export default Home