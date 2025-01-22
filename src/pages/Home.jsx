import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises'


const Home = () => {
  const [bodyPart ,setBodyPart]= useState('all') //we need to have these in home, becoz changes in this wil be in whole application
   const [exercises, setexercise]= useState([]) //search karne ke baad filtered exercuises list

  //  console.log(exercises)
   
  //  console.log(bodyPart)


  return (
    <Box>
      <HeroBanner/>
      <SearchExercises 
      setexercise={setexercise}  //if we want instead of passsing all this baar baar we can also use react context
       bodyPart={bodyPart} 
       setBodyPart={setBodyPart}
       
       />
      <Exercises
      exercises={exercises}
      setexercise={setexercise}
      bodyPart={bodyPart} 
      
      />
    </Box>
  )
}

export default Home
