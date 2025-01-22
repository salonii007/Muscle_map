import React from 'react'
import { Stack, stackClasses, Typography } from '@mui/material'
// import bodyparts from "../assets/bodyparts/";
import { constants } from 'react-horizontal-scrolling-menu';
// import bodypartimgs from "../assets/bodyparts";
import all from "../assets/bodyparts/all.png"
import back from "../assets/bodyparts/back.png"
import cardio from "../assets/bodyparts/cardio.png"
import chest from "../assets/bodyparts/chest.png"
import lowerarm from "../assets/bodyparts/lowerarms.png"
import lowerleg from "../assets/bodyparts/lowerlegs.png"
import neck from "../assets/bodyparts/neck.png"
import shoulders from "../assets/bodyparts/shoulders.png"



// import bodypartimgs from '@assets/bodyparts';

// const bodypartimgs={
//   all: require('../assets/bodyparts/all.png'),
//   cardio: require('src/assets/bodyparts/cardio.png'),
//   chest: require('/assets/bodyparts/chest.png'),
//   'lower arms':require( '/assets/bodyparts/lowerarms.png'),
//   "lower legs": require('/assets/bodyparts/lowerlegs.png'),
//   'upper arms':require( '/assets/bodyparts/lowerarms.png'),
//   "upper legs": require('/assets/bodyparts/lowerlegs.png'),
//   waist:require('/assets/bodyparts/chest.png'),
//   neck: require('/assets/bodyparts/neck.png'),
//   back: require('/assets/bodyparts/back.png'),
//   shoulders:require( '/assets/bodyparts/shoulders.png'),
//   };
const bodypartimgs={
  all,
  cardio,
  chest,
  'lower arms':lowerarm,
  "lower legs":lowerleg,
  'upper arms':lowerarm,
  "upper legs": lowerleg,
  "waist":chest,
  neck,
  back,
  shoulders,
  };



// const bodypartimgs = {};

// for (let i = 1; i <= 8; i++) {
//   bodypartimgs[i] = require(`../assets/bodyparts/${i}.png`);
// }


const BodyPart = ({item, id, setBodyPart, bodyPart}) => {


  // const imageUrl = `/assets/bodyparts/${id}.png`;


  const handleClick = () => {
    setBodyPart(item); // Make sure setBodyPart is a function
    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
  };
  
  return (
    <Stack
    type="button"
    alignItems ="center"
    justifyContent ="center"
    className='bodyPart-card'
    sx={
          {
            borderTop: bodyPart === item ? "4px solid #6d1b7b": " ",
            backgroundColor: "#e1bee7",
            borderBottomLeftRadius: '20px',
            width: '270px',
            height :'200px',
            gap: "47px",
            cursor: "pointer"
        } 
    }
    onClick={handleClick}
    >

        <img  src={bodypartimgs[item] || defaultImage} // Use dynamic source or fallback
        alt={item} 
        onError={(e) => (e.target.src = 'default.png')}
        style={{ width: '80px', height: '80px'}}/>
        <Typography fontSize={"24px"} fontWeight={"bold"} color='purple' textTransform={"capitalize"}> 
        {item}  {/*   //image ke neeche body part name */}
       { console.log({item})}
        </Typography>
 

    </Stack>
  )
}

export default BodyPart
