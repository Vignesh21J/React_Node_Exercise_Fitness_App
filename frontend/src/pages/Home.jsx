import { useState } from 'react'

import HeroBanner from '../components/HeroBanner'

import { Box } from '@mui/material';

import BodyPartFilter from '../components/BodyPartFilter';
import ExercisesList from '../components/ExercisesList';

const Home = () => {

  
  const [bodyPart, setBodyPart] = useState("all");   // To Set a User Selected BodyPart in BodyPart.jsx
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
        <HeroBanner />

        <BodyPartFilter bodyPart={bodyPart} setBodyPart={setBodyPart} />

        <ExercisesList exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />  {/* Selected Body Part will go in this component */}
    </Box>
  )
}

export default Home