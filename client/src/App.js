import React, {useEffect} from 'react'; 
import axios from 'axios'; 
import logo from './logo.svg';
import './App.css';
require('dotenv').config();


const App = () => {
  // run after render 
  useEffect(() => {
    const getAPI = async() => {
      const API =  'http://127.0.0.1:5000'; 
      const res = await axios.get(`${API}/cities`);  
      console.log(res); 
    }
    getAPI();
  })
  return (
    <div className="App">
      <header className="App-header">
        SQL app 
      </header>
    </div>
  );
}

export default App;
