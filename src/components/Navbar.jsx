import React from 'react';
import { Link } from 'react-router-dom';

import { Stack } from '@mui/material'; //material ui ka component is stack
import logo from "../assets/icons/THRIVE.png"


const Navbar = () => {
  return (
  <Stack 
  direction="row"
  gap="20px"
  fontSize="24px"
  justifyContent="space-around" 
  sx={{gap: { sm:'122px', xs: '40px'}, mt:{sm: '32px', xs:'20px'}, justifyContent: 'none'}} px="20px" >
     <Link to="/">
     <img src={logo} alt="Logo" style={{width: '400px', height: '90px', margin:'0 20px'}}/>
   </Link>
    <Stack 
  direction="row"
  gap="31px"
  fontSize="24px"
  alignItems="flex-end" >
      <Link to="/"
      style={{textDecoration: "none" , colour:'#ce93d8' }}> Home</Link>
      <a href="#exercises" style={{textDecoration: "none" , colour:'#ce93d8' }}>Exercises</a>
      <a href="bmi" style={{textDecoration: "none" , colour:'#ce93d8' }}>Calculate BMI</a>
      
       </Stack>

  </Stack>
  )
}

export default Navbar;
