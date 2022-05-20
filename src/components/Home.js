import React, { useState, useEffect } from 'react';
import '../style/home.css';
import { Button, Row, Col } from 'react-bootstrap';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';
import StartModal from './StartModal';

function Home() {

    const [playerOneScore, setPlayerOneScore] = useState(100);
    const [playerTwoScore, setPlayerTwoScore] = useState(100);
    const [playerOneBtn, setPlayerOneBtn] = useState(true);
    const [playerTwoBtn, setPlayerTwoBtn] = useState(true);
    

    const [winnerList, setWinnerList] = useState([]);
    const resetHandle = () => {
        if (playerOneScore > playerTwoScore) {
            setWinnerList([...winnerList, " Player1"]);
        } else if (playerOneScore < playerTwoScore) {
            setWinnerList([...winnerList, " Player2"]);
        }
        setPlayerOneScore(100);
        setPlayerTwoScore(100);
    }

    useEffect(() => {
        <StartModal />
    },[])

  return (
    <div className='home-wrapper'>
        <Button onClick={resetHandle}>Start Game</Button>
        <h3>Winners: {winnerList} </h3>
        <Row>
            <Col>
            <PlayerOne 
            playerTwoScore={playerTwoScore}
            playerOneScore={playerOneScore}
            setPlayerTwoScore={setPlayerTwoScore}
            playerOneBtn={playerOneBtn}
            />
            </Col>
            <Col>
            <PlayerTwo
             playerOneScore={playerOneScore}
             playerTwoScore={playerTwoScore}
             setPlayerOneScore={setPlayerOneScore}
             playerTwoBtn={playerTwoBtn}
            />
            </Col>
        </Row>
    </div>
  )
}

export default Home