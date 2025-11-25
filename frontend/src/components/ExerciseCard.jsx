import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

import ExerciseImage from './ExerciseImage';


const ExerciseCard = ({ id, exercise }) => {
    return (
      <Link to={`/exercises/${id}`} className="exercise-card">

        <ExerciseImage exerciseId={exercise.id} />

        <Stack direction="row">
            <Button
                sx={{ ml: '20px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}    
            >
                {exercise.bodyPart}
            </Button>

            <Button
                sx={{ ml: '20px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}    
            >
                {exercise.target}
            </Button>

            <Typography ml="20px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="10px" pb="10px" textTransform="capitalize">
                {exercise.name}
            </Typography>
        </Stack>

      </Link>
    )
}

export default ExerciseCard