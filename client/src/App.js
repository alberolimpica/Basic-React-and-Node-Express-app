import React, { useState, useEffect } from "react";
import axios from 'axios';
import PhoneGrid from "./components/phoneList/PhoneGrid"
import PhoneById from "./components/PhoneById"
import HomeScreen from "./components/HomeScreen"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {

  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      await axios
        .get("http://localhost:9000/phones")
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
    <Router>
      <Routes>
        <Route exact path="/phones" element={<PhoneGrid data={data} />} />
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/phone/:id" element={<PhoneById />} />
      </Routes>
    </Router>
  );
}
export default App;