import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import RoutesComponent from './Routes';
import LogIn from './components/login';
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <>
      <Navbar />

      {/* Home and Log-in */}
      <Routes>
        <Route path='/TheRestaurant' element={<RoutesComponent />}></Route>
        <Route path='/TheRestaurant/login' element={<LogIn />}></Route>
      </Routes>
    </>
  );
}

export default App;
