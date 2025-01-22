import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";
import arrow from "../assets/icons/arrow.png";

const Horizontalscroll = ({ data, bodyPart, setBodyPart, isbodyPart }) => {
  return (
    <Box position="relative" width="100%" overflow="hidden">
      <ScrollMenu>
        <Stack direction="row">
          {data.map((item) => (
            <Box
              key={item.id || item}
              id={item.id || item}
              title={item.id || item}
              m="0 40px"
            >
              {isbodyPart ? (
                <BodyPart
                  item={item}
                  id={item.id}
                  bodyPart={bodyPart}
                  setBodyPart={setBodyPart}
                />
              ) : (
                <ExerciseCard exercise={item} />
              )}
            </Box>
          ))}
        </Stack>
      </ScrollMenu>
      {/* Arrow image on the right */}
      <Box
        position="absolute"
        top="50%"
        right="21px" 
        transform="translateY(-50%)"
        zIndex={1}
      >
        <img src={arrow} height="30px" alt="Scroll Right" />
      </Box>
    </Box>
  );
};

export default Horizontalscroll;
