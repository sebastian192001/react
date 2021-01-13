import React from 'react';

const HolaMundo = () => {
    const hello = 'hola mundo'
    const isTrue = true
    return (
        <div className = 'HolaMundo'>
            <h1>{hello}</h1>
            <h2>curso ensencial de react</h2>
            <img src="https://arepa.s3.amazonaws.com/react.png" alt="React"/>
            {isTrue ? <h4> esto es verdadero </h4> : <h5>soy falso</h5>} 
            {isTrue && <h4>soy verdadero</h4> } 
        </div>
    )
}

export default HolaMundo;