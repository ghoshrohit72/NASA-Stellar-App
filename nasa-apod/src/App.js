import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route component={Home} path="/" exact />
        <Route component={NasaPhoto} path="/nasaphoto" exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
