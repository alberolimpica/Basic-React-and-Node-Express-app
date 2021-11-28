import React from 'react';
import { Link } from "react-router-dom";

function HomeScreen() {
    return <div className="phone">
        <Link to="/phones"><button style={{ width: 300, marginTop: 20, }}>Go check out our phones!</button>
        </Link>
    </div>;
}

export default HomeScreen;