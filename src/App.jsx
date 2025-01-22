import { useState } from 'react'


import './App.css'
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BmiCalc from './components/BmiCalc';


function App() {
  const [count, setCount] = useState(0)

   return (<Box width="400px" sx= {{width: {xl:'1488px'}}} m="auto">
    <Navbar/>
    
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
        <Route path="/bmi" element={<BmiCalc/>}/>
    </Routes>
    <Footer/>
  </Box>
  );
};

export default App
