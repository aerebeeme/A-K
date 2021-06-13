import React from 'react'

export default function CardItem(props) {
    return (
        <div className='card>'>
            <div className='card-header'>
                <h1>{props.title}</h1>
            </div>
            <div className='card-body'>
                <img 
                alt='Zones'
                src={props.img}/>
                <h2>{props.subtitle}</h2>
            </div>
        </div>
    )
}
