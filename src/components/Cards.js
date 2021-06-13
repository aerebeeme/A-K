import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cards() {
return (
    <>
    <h1 style={{fontFamily:"Acumin,sans-serif;", margin:"30px", padding:"30px"}}>See all our coverage areas</h1>
    <div className="row">
        <CardItem
            title="Zone 1"
            img={require('../assets/images/NY.jpg').default}
            subtitle="New York City area"
        />

        <CardItem
            title="Zone 2"
            img={require('../assets/images/HCC.jpg').default}
            subtitle="Northern New Jersey"
        />
    </div>
    </>
);
}

export default Cards;
