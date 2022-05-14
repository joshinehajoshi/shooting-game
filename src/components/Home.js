import React from 'react';
import '../style/home.css';
import { Button, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <div className='home-wrapper'>
        <Button>Start Game</Button>
        <Row>
            <Col><h2>Player 1</h2></Col>
            <Col><h2>Player 2</h2></Col>
        </Row>
    </div>
  )
}

export default Home