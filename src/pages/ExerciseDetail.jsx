import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"; 
 import {exerciseOptions, fetchData, youtubeOptions} from '../utils/fetchData'
 import { Box } from '@mui/material';
 import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import Detail from '../components/Detail';

const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail ]=useState({});
  const [utubevideos, setUtubevideos]= useState([]);
  const {id}=useParams();
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);


  useEffect(()=>
  {
    const fetchExerciseData =async()=>
    {
      const exercisedburl ='https://exercisedb.p.rapidapi.com';
      const youtubeurl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exercisedetaildata= await fetchData(`${exercisedburl}/exercises/exercise/${id}`, exerciseOptions );
      setExerciseDetail(exercisedetaildata);
      console.log(exercisedetaildata);

      const youtubeVideoData= await fetchData(`${youtubeurl}/search?query=
        ${exercisedetaildata.name}`, youtubeOptions);
        
        setUtubevideos(youtubeVideoData.contents)


        const targetMuscleExercisesData = await fetchData(`${exercisedburl}/exercises/target/${exercisedetaildata.target}`, exerciseOptions);
        setTargetMuscleExercises(targetMuscleExercisesData);
  
        const equimentExercisesData = await fetchData(`${exercisedburl}/exercises/equipment/${exercisedetaildata.equipment}`, exerciseOptions);
        setEquipmentExercises(equimentExercisesData);
     

    }
    fetchExerciseData(); 
    

  },[id]  );

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos utubevideos={utubevideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} /> 
    </Box>
  )
}

export default ExerciseDetail
