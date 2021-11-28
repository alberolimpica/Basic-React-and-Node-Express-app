import React from 'react';

function Phone(props) {
    return <div className="phone">
        <div>
            <img src={props.imageURL} alt={props.name} className="responsive"></img>
        </div>
        <div>
            <h1>{props.name}</h1>
            <h2>{props.manufacter}</h2>
            <p>${props.price}</p>
            <p>{props.description}</p>

            {props.showDetails === true &&
                <ul><b>Specs:</b>
                    <li>Color: {props.color}</li>
                    <li>Screen size: {props.screen}</li>
                    <li>Processor: {props.processor}</li>
                    <li>Ram: {props.ram}</li>
                </ul>
            }
        </div>
    </div>;
}

export default Phone;