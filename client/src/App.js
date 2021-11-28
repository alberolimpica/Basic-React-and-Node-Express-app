import React, { useState, useEffect } from "react";
import axios from 'axios';
import PhoneGrid from "./components/PhoneList/PhoneGrid"
import HomeScreen from "./components/HomeScreen"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  // here you set a state to tell the component it need to wait
  //  until the result is fetched from the api
  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      await axios
        .get("http://localhost:9000/phones")
        .then((response) => {
          console.log(response.data);
          setData(response.data);
          setLoadingData(false);
        });
    }
    if (loadingData) {
      getData();
    }
  }, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/phones" element={<PhoneGrid data={data} />} />
        <Route exact path="/" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}
export default App;