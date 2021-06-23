import React from 'react';
import './Cards.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CardDeck,Card} from 'react-bootstrap';

function Cards() {
return (
    <>
    <h1 style={{fontFamily:"Acumin,sans-serif;", margin:"30px", padding:"30px"}}>See all our coverage areas</h1>
    <CardDeck>
        <Card>
            <Card.Img className='image-variant' variant="top" src={require('../assets/images/NY9.jpg').default} style={{
                height:"400px"
            }} />
                <Card.Body>
                    <Card.Title>New York area</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Zone 1</small>
                </Card.Footer>
        </Card>
        <Card>
            <Card.Img className='image-variant' variant="top" src={require('../assets/images/HCC.jpg').default} style={{
                height:"400px"
            }}/>
                <Card.Body>
                    <Card.Title>Northern New Jersey</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Zone 2</small>
                </Card.Footer>
        </Card>
    </CardDeck>
    </>
);
}

export default Cards;
