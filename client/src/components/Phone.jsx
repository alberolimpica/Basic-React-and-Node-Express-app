import React from 'react';


function Phone(props) {
    return <div className="note">
        <div>
            <img src={props.imageURL} alt={props.name}></img>
        </div>
        <div>
            <h1>{props.name}</h1>
            <h2>{props.manufacter}</h2>
            <p>{props.price}</p>
            <p>{props.description}</p>
            <ul>Specs:
                <li>{props.color}</li>
                <li>{props.screen}</li>
                <li>{props.processor}</li>
                <li>{props.ram}</li>
            </ul>
        </div>
    </div>;
}

export default Phone;