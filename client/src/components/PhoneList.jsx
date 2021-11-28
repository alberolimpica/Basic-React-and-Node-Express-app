import React from 'react';
import Phone from './Phone';

function PhoneList({ data }) {
    return <div className="phones">
        {data.map((phone) =>
            <Phone
                key={phone.id}
                imageURL={phone.imageURL}
                name={phone.name}
                manufacter={phone.manufacter}
                price={phone.price}
                description={phone.description}
                color={phone.color}
                screem={phone.screem}
                processor={phone.processor}
                ram={phone.ram}
            />
        )
        }
    </div>;
}

export default PhoneList;