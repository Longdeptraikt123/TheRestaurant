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
      <Routes>
        <Route exact path='/login' element={<LogIn />}></Route>
        <Route exact path='/' element={<RoutesComponent />}></Route>
      </Routes>

    </>
  );
}

export default App;
