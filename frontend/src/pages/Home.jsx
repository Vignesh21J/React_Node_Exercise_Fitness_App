import { useState } from 'react'

import HeroBanner from '../components/HeroBanner'

import { Box } from '@mui/material';

import BodyPartFilter from '../components/BodyPartFilter';

const Home = () => {

  
  const [bodyPart, setBodyPart] = useState("all");   // To Set a User Selected BodyPart in BodyPart.jsx
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
        <HeroBanner />

        <BodyPartFilter bodyPart={bodyPart} setBodyPart={setBodyPart} />
    </Box>
  )
}

export default Home