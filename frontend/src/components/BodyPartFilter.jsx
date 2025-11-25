import { useState, useEffect } from 'react'

import { Box, Stack, Typography } from '@mui/material';

import { fetchData, exerciseOptions } from '../utils/fetchData'

import HorizontalScrollBar from './HorizontalScrollBar';



const BodyPartFilter = ({ bodyPart ,setBodyPart }) => {

  const [bodyParts, setBodyParts] = useState("all");

  useEffect(() => {

    const fetchedBodyParts = async () => {

      try {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
        setBodyParts(['all', ...bodyPartsData]);
      }
      catch(error) {
        console.error('Failed to fetch exercises:', error);
        setBodyParts([]);
      }
    }

    fetchedBodyParts();

  }, [])


  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">

      <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: '44px', xs: '30px' } }}
          mb="49px"
          textAlign="center"
      >
          Explore Exercises by <br /> Body Part
      </Typography>


      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>

        {/* Traditional Way to See All BodyPartList */}

        {/* 
          {bodyParts.map((part, index) => (

          <Typography key={index} sx={{ fontSize: "20px", mb: "10px" }}>
            {part}
          </Typography> 
          ))}
          
        */}

        <HorizontalScrollBar items = {bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />

        
      </Box>

    </Stack>
  )
}

export default BodyPartFilter