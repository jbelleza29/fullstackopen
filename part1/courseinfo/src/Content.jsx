import React from 'react';
import Part from './Part';

const Content = ({ exercises }) => {
    return (
        exercises.map(exercise => (
            <Part key={exercise.part} part={exercise.part} exercises={exercise.exercises} />
        ))
    )
}

export default Content;