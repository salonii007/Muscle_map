
import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from "../assets/icons/THRIVE.png"

const Footer = () => (
  <Box mt="40px" bgcolor="#ce93d8">
    <Stack  
    sx={{ alignItems: 'center' }} 
    flexWrap="wrap"  pt="24px">
      <img src={Logo} alt="logo" 
       style={{ width: '400px', height: '90px' }} />
    </Stack>
    <Typography variant="h5"
     sx={{ fontSize: { lg: '28px', xs: '20px' } }}
      mt="41px" textAlign="center" pb="40px">
        ❤️Made by Saloni❤️</Typography>
  </Box>
);

export default Footer;
