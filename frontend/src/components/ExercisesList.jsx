import { useEffect } from 'react';

import { Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';


import ExerciseCard from './ExerciseCard';


const ExercisesList = ({ exercises, setExercises, bodyPart }) => {

    useEffect(() => {

        const fetchedExercises = async () => {
            
            let exerciseData = []

            if(bodyPart === 'all') {
                exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            }
            else {
                exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
            }

            setExercises(exerciseData);
        };

        fetchedExercises();

    }, [bodyPart, setExercises])

    return (

        <Box id="exercises" sx={{ mt: { lg: '112px' } }} mt="50px" p="20px">
            <Typography variant="h3" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
                Showing Results
            </Typography>

            <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{ gap: { lg: '107px', xs: '50px' } }}>
                {exercises.map((exercise) => (
                    <ExerciseCard id={exercise.id} exercise={exercise} />
                ))}
            </Stack>
        </Box>
    )
}

export default ExercisesList