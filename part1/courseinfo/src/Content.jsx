import React from 'react';

const Content = ({ exercises }) => {
    return (
        exercises.map(exercise => (
            <p key={exercise.part}>
                {exercise.part} {exercise.exercises}
            </p>
        ))
    )
}

export default Content;