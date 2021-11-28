import * as React from 'react';
import Phone from '../Phone';


function PhoneDetail({ phone }) {

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Phone
                key={phone.id}
                imageURL={phone.imageURL}
                name={phone.name}
                manufacter={phone.manufacter}
                price={phone.price}
                description={phone.description}
                showDetails={true}
                color={phone.color}
                ram={phone.ram}
                processor={phone.processor}
                screen={phone.screen}
            />
        </div>
    );
}

export default PhoneDetail;