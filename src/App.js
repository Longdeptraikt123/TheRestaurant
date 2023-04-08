import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import RoutesComponent from './Routes';
import LogIn from './components/login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Navbar />
      {/* Home and Log-in */}
      <Routes>
        <Route path='/' element={<RoutesComponent />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
      </Routes >
    </Router>
  );
}


export default App;
