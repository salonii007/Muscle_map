import React from 'react'
import { Typography,Stack, Button } from '@mui/material';
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';


const Detail = ({exerciseDetail}) => {
    const { bodyPart, gifUrl, name, target, equipment}= exerciseDetail; //destructure kiya he

    console.log(exerciseDetail);

    const extradetail=[{
        icon: BodyPartImage,
        name: bodyPart,
    },
    {
        icon: TargetImage,
        name: target,
    },{
        icon: EquipmentImage,
        name: equipment,
    },

]
  return (
    <Stack gap='60px'  sx={{ display :'flex' , flexDirection:{ lg:'row' , xs: "column"}, p: '20px', alignItems:"center"}}>
        <img src={gifUrl} alt={name} className='detail-image' />  
            <Stack sx={{gap: {lg: '35px', xs:'20px'}}}>
                <Typography variant='h3' textTransform={"capitalize"}>
                    {name}
                </Typography>
                <Typography variant='h6'>
                    Unleash the power of {name}- designed to target your {target} and elevate your mood! 
                    </Typography>   
                    {extradetail.map((item)=>(
                        <Stack key={item.id||item.gifUrl} direction={"row"} gap='24px' alignItems={"center"}>
                            <Button sx={{ background: '#f3e5f5',
                height: '64px',
                width: '64px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                border: "#ce93d8",
                justifyContent: 'center'}} >
                                <img style={{
                  width: '60px',
                  height: '60px'}} src={item.icon}/> 
                            </Button>
                            <Typography variant="h5">
                                {item.name}
                            </Typography>
                        </Stack>
                    ))}              
            </Stack>

    </Stack>
  )
}

export default Detail
