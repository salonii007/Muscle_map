import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Button, Typography, Stack, TextField } from '@mui/material'
import Picker from 'emoji-picker-react';//for emojies
import { fetchData } from '../utils/fetchData';
import { exerciseOptions } from '../utils/fetchData';
import Horizontalscroll from '../components/Horizontalscroll';
import BodyPart from './BodyPart';

const SearchExercises = ( {setexercise, bodyPart, setBodyPart}) => {

const [search, setsearch] =useState(''); //for searching the search ex. search bar, chnging input values

const [bodyParts, setBodyParts]= useState([]); //jo horizontal wala he uske liye!
    
useEffect(()=>{ //to fectch some categories as soon as our page loads
const fetchExerciseData= async()=>{
const bodyPartsData= await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
 
// console.log(bodyPartsData); 
setBodyParts(['all',...bodyPartsData]);
    }
    fetchExerciseData(); //call it as the app loads
}, [])

const handleSearch= async()=>
{
  // console.log('handleSearch triggered');
  if(search){
    const exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises?limit=${500}&offset=${0}`, exerciseOptions);

   
    // console.log('Fetched Data:', exerciseData);
     //this fetch data function is in utils!
    const searchedexer = exerciseData.filter(
        (item)=> item.name.toLowerCase().includes(search) //when someone search with exercise name, pushups, deadlifts etc
        || item.target.toLowerCase().includes(search) //triceps, back, shouldres
        || item.equipment.toLowerCase().includes(search)
        || item.bodyPart.toLowerCase().includes(search)
    );
    // console.log('hiiiiii', searchedexer);
    setsearch('');
    setexercise(searchedexer);

  }
}

  return (
    <Stack  //stack is like div (its a container in Material ui )
    alignItems={'center'} mt="37px" justifyContent={"center"} p="20px">
     <Typography fontWeight={500}
        sx={{
            fontSize: { lg:'44px' , xs:"30px" }
         }}
         mb="30px" textAlign={'center'}>
          Must-try exercises for your fitness journey!
         </Typography>
         <Box position={'relative'} mb="50px" >
            <TextField 
            height="76px"
            value={search}  //initilly empty (usestate me defauly is '') then changes as we enter words, kyuki search ko apan ne upar banaya
            onChange={(e)=>{
             setsearch(e.target.value.toLowerCase()) //jo jo type karenge in search box! and search ki value bhi vahi set
            }}
            placeholder='Search Exercise'
            type='text'
            sx={{
                input: {fontWeight:'700', borderRadius: "5px", border: "darkmagenta"},
                width:{lg:'1100px', xs:'350px'},
                backgroundColor: "#e1bee7",
                borderRadius:'4px'
            }}
             />
             <Button className='search-btn'
             variant='contained'  sx={{

                ml: "10px", 
                mt: "10px",   
                border: "1px solid black",  
                backgroundColor: '#9c27b0', // Custom background color (MATERIAL UI ME SIRF COLOUR SE NI HOTA)
                color: '#FFFFFF',           // Text color
                '&:hover': {
                  backgroundColor: '#6d1b7b', // Hover color
                },
              }}
               
              onClick={handleSearch} //search click karene pe jo search kiya he search ho
              >
                Search
             </Button>
             {/* {console.log(import.meta.env.VITE_API_KEY)}   */}

         </Box>
         <Box sx={{position: 'relative', width: '100%', p:'20px'}}>
            <Horizontalscroll data={bodyParts}
            bodyPart={bodyPart} setBodyPart={setBodyPart} isbodyPart/>
         </Box>
    </Stack>
  )
}

export default SearchExercises
