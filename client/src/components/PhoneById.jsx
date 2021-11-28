import React, { useState, useEffect } from "react";
import axios from 'axios';
import PhoneDetails from './phoneDetails/PhoneDetails';
import { useParams } from 'react-router';

function PhoneById() {
    const { id } = useParams();
    const phoneId = parseInt(id);

    const [loadingData, setLoadingData] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            await axios
                .get("http://localhost:9000/phone/" + phoneId)
                .then((response) => {
                    setData(response.data);
                    setLoadingData(false);
                });
        }
        if (loadingData) {
            getData();
        }
    });

    return (
        <PhoneDetails phone={data} />
    );
};

export default PhoneById;