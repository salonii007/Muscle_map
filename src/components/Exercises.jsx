import { useEffect, useState } from "react";
import React from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setexercise, bodyPart }) => {
  // console.log({exercises});
  const [currentPage, setcurrentPage] = useState(1);
  const exerPerPage = 9;


  const indexOfLastExercise = currentPage * exerPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exerPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (e, value) => {
    setcurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises?limit=${30}&offset=${0}`,
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setexercise(exercisesData);

      // console.log({exercisesData});
    };

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box id="exercises" 
    sx={{ mt: { lg: "30px" } }} mt="10px" p="30px">
      <Typography variant="h5" mb="20px">
        Presenting finds...
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={exercise.id || index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > exerPerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exerPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
