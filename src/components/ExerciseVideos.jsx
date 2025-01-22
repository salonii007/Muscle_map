import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ utubevideos, name }) => {
  if (!utubevideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '30px', xs: '20px' } }} p="20px">
      <Typography sx={{ fontSize: { lg: '35px', xs: '20px' } }} fontWeight={700} color="#000" mb="20px">
        Explore <span style={{ color: '#673ab7', textTransform: 'capitalize' }}>{name}</span> Tutorials on Youtube
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
        {utubevideos?.slice(0, 6)?.map((item, index) => ( //slice (0,6 the 6 is for kitne video chiye)
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '24px', xs: '14px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="12px" mt={"7px"} color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;