import React from 'react'
import Media from 'react-bootstrap/Media'
import './AboutContent.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

export default function AboutContent(){
    return(
        <>
        <Media>
            <Media.Body>
                <h3 style={{textAlign:"left"}}>About Us</h3>
                    <h1 style={{textAlign:"left", paddingLeft:"0px"}}><strong>Multiservices company</strong></h1>
                    <p>
                    We are a company with knowledge and experience in multi-services, such as residential cleaning, commercial cleaning and maintenance. <br/> We hope to serve you better than you expect so that you have an unforgettable experience together with us, let's continue supporting each other and do not forget that we are the solution to the daily problems of your daily life.
                    </p>
            </Media.Body>
            <img
                className="align-self-start mr-3"
                src={require('../assets/images/m1.jpg').default}
                alt="Generic placeholder"
                style={{border:"10px inset black"}}
            />
        </Media>
        <section className="section-header">
        <Media classname="new-media">
            <Media.Body classname="new-body">
                    <h1 style={{textAlign:"left", paddingLeft:"0px"}}><strong>A&K Principles</strong></h1>
                    <Card border="dark" classname="card-body-about">
                        <Card.Body>
                            <Card.Title style={{textAlign:"left"}}><i class="fas fa-caret-right"/>Efficiency</Card.Title>
                            <Card.Text style={{textAlign:"left"}}>
                            We will do our best to fulfill the work that lies ahead.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card border="dark" classname="card-body-about">
                        <Card.Body>
                            <Card.Title style={{textAlign:"left"}}><i class="fas fa-caret-right"/>Passion</Card.Title>
                            <Card.Text style={{textAlign:"left"}}>
                            We like to do what we are passionate about, that is why our work will always be accompanied by a smile
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
            </Media.Body>
            <Media.Body classname="new-body">
                    <h1 style={{textAlign:"left", paddingLeft:"0px"}}><strong>Core values</strong></h1>
                    <Card border="dark"  classname="card-body-about">
                        
                        <Card.Body>
                            <Card.Text style={{textAlign:"left"}}>
                            Problem that arises, problem that we will solve
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card border="dark"  classname="card-body-about">
                        
                        <Card.Body>
                            <Card.Text style={{textAlign:"left"}}>
                            Our quality starts from the moment you contact us
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
            </Media.Body>
        </Media>
        </section>
        </>
        
    )
}