import React from 'react';
import PhoneDetails from './phoneDetails/PhoneDetails';
import { useParams } from 'react-router';

function PhoneById({ data }) {
    const { id } = useParams();
    const phoneId = parseInt(id);
    const phone = data.find(x => x.id === phoneId);

    return (
        <PhoneDetails phone={phone} />
    );
};

export default PhoneById;