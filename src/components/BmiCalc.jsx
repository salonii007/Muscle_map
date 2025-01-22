import React, { useState } from "react";
import { Stack, TextField ,Button,Typography} from "@mui/material";

const BmiCalc = () => {
  const [weight, setweight] = useState("");
  const [height, setheight] = useState("");
  const [bmi, setbmi] = useState("");
  const [result, setresult] = useState(" ");

  const calculatebmi = (e) => {
    e.preventDefault();

    if (weight <= 0 || height <= 0) {
      alert("Please enter valid weight and height values");
      return;
    }

    const bmivalue = ((weight * 10000) / (height * height)).toFixed(2);
    setbmi(bmivalue);
    resultmessage(bmivalue);
  };

  const resultmessage = (bmivalue) => {
    if (bmivalue < 18.5) {
      setresult("You are Underweight");
    } else if (bmivalue >= 18.5 && bmivalue < 24.9) {
      setresult("You are Normal Weight");
    } else if (bmivalue >= 24.9 && bmivalue < 29.9) {
      setresult("You are Overweight");
    } else {
      setresult("You are Obese");
    }
  };

  const reset = () => {
    setheight("");
    setweight("");
    setbmi(null);
  };

  return (
    <Stack
      marginBottom={"600px"}
      border={"1px solid #6a1b9a"}
      width={"400px"}
      margin={"auto"}
      p={"20px"}
      mt={"60px"}
      borderRadius='8px'
      backgroundColor= '#f3e5f5'
      boxShadow= '0 2px 5px rgba(0,0,0,0.2)'
    >
      <h2>BMI CALCULATOR</h2>
      <Typography variant="body2" color="textSecondary" mt={"5px"} mb={"20px"}>
        * Note: BMI is a general guideline and may not apply to all individuals.
      </Typography>
      <form onSubmit={calculatebmi}>
        <Stack mt={"20px"} mb={"20px"} fontSize={"24px"} gap={"5px"}>
          <label>
            Weight <i>(kg)</i>
          </label>
          <TextField
            fontSize={"24px"}
            type="number"
            value={weight}
            placeholder="Your Weight in kgs"
            sx={{
              backgroundColor: "#e1bee7",
              borderRadius: "4px",
            }}
            onChange={(e) => setweight(Number(e.target.value))}
          />
        </Stack>
        <Stack mt={"20px"} mb={"40px"} fontSize={"24px"} gap={"5px"}>
          <label>
            Height <i>(cm)</i>
          </label>
          <TextField
            type="number"
            value={height}
            placeholder="Your Height in cms"
            sx={{
                backgroundColor: "#e1bee7",
                borderRadius: "4px",
              }}
              
            onChange={(e) => setheight(Number(e.target.value))}
          />
        </Stack>
        <Stack direction="row" spacing={2} justifyContent="center">

        <Button type="submit"
         variant='contained'//for bhara hua button
         
         sx={{
             backgroundColor: '#9c27b0', // Custom background color (MATERIAL UI ME SIRF COLOUR SE NI HOTA)
             color: '#FFFFFF',           // Text color
             '&:hover': {
               backgroundColor: '#6d1b7b', // Hover color
             },
           }}> Calculate BMI</Button>
        <Button 
         variant='contained'//for bhara hua button
         sx={{
             backgroundColor: '#9c27b0', // Custom background color (MATERIAL UI ME SIRF COLOUR SE NI HOTA)
             color: '#FFFFFF',           // Text color
             '&:hover': {
               backgroundColor: '#6d1b7b', // Hover color
             },
           }}
           onClick={reset}>Reset</Button>
           </Stack>
      </form>

      {bmi && (
        <Stack mt={"15px"} >
          <h3 >
            Your BMI is : {bmi}</h3>
          <h4>{result}</h4>
        </Stack>
      )}
    </Stack>
  );
};

export default BmiCalc;
