import React from 'react';

const Part = ({ part, exercises }) => {
    return (
        <p key={part}>{part} {exercises}</p>
    )
}

export default Part;