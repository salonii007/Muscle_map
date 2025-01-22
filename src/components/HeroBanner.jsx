import React from 'react'
import { Box, Button, Stack, Typography, Grid } from '@mui/material'; //typography is just a text element like paragraph tag with styles
import bannerimg from "../assets/images/Hero.jpg"
const HeroBanner = () => {
  return (
    <Box sx={{
       mt: {lg: '20px', xs:'70px'},
       ml: {sm: '50px'} 
    }} position="relative" p="20px">
        <Grid container alignItems="center" spacing={2}> 
        <Grid item xs={12} md={6}>
        <Typography color= "#9c27b0"
        fontWeight="600" fontSize="26px">
           Fitness Guide
        </Typography>
        <Typography fontWeight="700px" 
        sx={{fontSize:{lg: '44px', xs:'40px'}}} >
            Sweat Now, <br/> Shine Later! 
        </Typography>
        <Typography
        fontSize='22px' lineHeight='35px' mb={3}>
            Discover the ultimate exercises to elevate your <br/> 
            fitness journey and achieve your goals faster!
        </Typography>
        <Button
        variant='contained'//for bhara hua button
        sx={{
            backgroundColor: '#9c27b0', // Custom background color (MATERIAL UI ME SIRF COLOUR SE NI HOTA)
            color: '#FFFFFF',           // Text color
            '&:hover': {
              backgroundColor: '#6d1b7b', // Hover color
            },
          }}
          href="#exercises" //for button click karne pe
          >
            Find your Routine 
        </Button> 
        </Grid> 
        {/* //image on the banner */}
         <Grid item xs={12} md={6}>
          <img
            src={bannerimg}
            alt="Hero banner showcasing fitness motivation"
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '600px', // Adjust maxWidth as per your design
              objectFit: 'contain', // Ensure image is not stretched
            }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default HeroBanner
