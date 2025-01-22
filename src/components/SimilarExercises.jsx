import React from "react";
import { Typography, Box, Stack } from "@mui/material";

import Horizontalscroll from "./Horizontalscroll";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (

  <Box sx={{ mt: { lg: "60px", xs: "0px" } }}>
    <Typography
      sx={{ fontSize: { lg: "35px", xs: "20px" }, ml: "20px" }}
      fontWeight={700}
      color="#000"
      mb="33px"
    >
      Similar{" "}
      <span style={{ color: "#673ab7", textTransform: "capitalize" }}>
        Target Muscle
      </span>{" "}
      exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: "relative" }}>
      {targetMuscleExercises.length !==0 ? (
        <Horizontalscroll data={targetMuscleExercises} 
        bodyPart={""}
        setBodyPart={""}
        isbodyPart={false}/>
      ) : (
        <Loader />
      )}
    </Stack>
    <Typography
      sx={{
        fontSize: { lg: "35px", xs: "20px" },
        ml: "20px",
        mt: { lg: "100px", xs: "60px" },
      }}
      fontWeight={700}
      color="#000"
      mb="33px"
    >
      Similar{" "}
      <span style={{ color: "#673ab7", textTransform: "capitalize" }}>
        Equipment
      </span>{" "}
      exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: "relative" }}>
      {equipmentExercises.length !== 0 ? (
        <Horizontalscroll data={equipmentExercises} 
        bodyPart={""}
        setBodyPart={""}
        isbodyPart={false} />
      ) : (
        <Loader />
      )}
      {
 console.log("Target Muscle Exercises:", targetMuscleExercises)}
{console.log("Equipment Exercises:", equipmentExercises)}
    </Stack>
  </Box>
);

export default SimilarExercises;
