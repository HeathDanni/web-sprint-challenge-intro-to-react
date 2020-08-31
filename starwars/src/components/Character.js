// Write your Character component here
import React from "react";

const Character = (props) => {
    return <div>
        <h2>{props.name}</h2>
        <span>{props.year}</span>
    </div>
}

export default Character;