 import React from 'react';
 import { Link } from 'react-router-dom';
 import { Button, Stack, Typography } from '@mui/material';
 
 const ExerciseCard = ({exercise }) => {
   return (
     <Link className = "exercise-card" to={`/exercise/${exercise.id}`}>
       <img src={exercise.gifUrl} alt={exercise.name} />
       <Stack direction={"row"} pt="5px">
         <Button sx={{ ml: "21px" , color: "#fff" , background: "#9c27b0" , fontSize:"14px", borderRadius:"2px"
            , textTransform:"capitalize"
          }}>
            {exercise.bodyPart}
 
         </Button>
      
         <Button sx={{ ml: "21px" , color: "#fff" , background: "#9c27b0" , fontSize:"14px", borderRadius:"2px"
            , textTransform:"capitalize"
          }}>
            {exercise.target}
 
         </Button>
       </Stack>
        <Typography fontSize={"20px"} ml="21pxt" color="#000"  fontWeight="bold" 
        mt=" 11px"  pl="20px" pb="10px " textTransform={"capitalize"} >
 
    {exercise.name}
          </Typography>
     </Link>
     
   )
 }
 
 export default ExerciseCard
 