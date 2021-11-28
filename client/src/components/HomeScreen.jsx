import React from 'react';
import { Link } from "react-router-dom";

function HomeScreen() {
    return <div className="phone">
        <Link to="/phones"><button>Go check out our phones!</button></Link>
    </div>;
}

export default HomeScreen;