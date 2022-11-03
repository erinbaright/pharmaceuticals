import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Drugs from './Drugs.jsx';
import Modal from './Modal.jsx';
// import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';

function App() {
  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://drugs-api-production.up.railway.app/drugs`, {
        headers: { Accept: "application/json" },
      });
      setDrugs(response.data);
      console.log(response.data)
    }

    getData();
    console.log(drugs);

  }, []);
  
  if (!drugs) return <h2>Loading...</h2>
  
  return (
    <div className="App">
  
      <Drugs drugs={drugs} />
      
    </div>
  );
}

export default App;

