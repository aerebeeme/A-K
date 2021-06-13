import React from 'react'
import {CardDeck,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GridServices.css'


export default function GridServices(){

return(
    <CardDeck>
        <Card>
            <Card.Img variant="top" src={require('../assets/images/4.jpg').default} style={{
                alignItems:"center",
                width:"auto",
                height:"400px"
            }} />
                <Card.Body>
                    <Card.Title>Residential Cleaning</Card.Title>
                    <Card.Text>
                        <h3>Include cleaning</h3>
                                    Studio apartment<br/>
                                    House <br/>
                                    Apartments <br/>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Starting from $75.00</small>
                </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src={require('../assets/images/2.jpg').default} style={{
                alignItems:"center",
                height:"410px"
            }}/>
                <Card.Body>
                    <Card.Title>Maintenance</Card.Title>
                    <Card.Text>
                    <h3>Our services are</h3>
                        Baseboard: installation, removal and paint.<br/>
                        Painting<br/>
                        Drywall: installation and repair.<br/>
                        Sheetrock: installation and repair.<br/>
                        Crown molding: installation, removal and paint.<br/>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Contact us to make an estimate</small>
                </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src={require('../assets/images/4.jpg').default} style={{
                alignItems:"center",
                width:"auto",
                height:"400px"
            }}/>
            <Card.Body>
                    <Card.Title>Commercial Cleaning</Card.Title>
                    <Card.Text>
                    <h3>Include cleaning</h3>
                        Buildings<br/>
                        Offices <br/>
                    </Card.Text>
            </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Contact us to make an estimate</small>
                </Card.Footer>
        </Card>
    </CardDeck>
)
}