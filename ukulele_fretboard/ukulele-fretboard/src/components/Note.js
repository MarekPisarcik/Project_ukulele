
import React, { useState } from "react";


const Note = (props) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);

        const userAnswer = {
            note: props.name,
            string: props.string
        };

        fetch('http://localhost:8000/api/check_note/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userAnswer),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    const className = props.className + (isClicked ? " clicked" : "");

    return (
        <div className={className} onClick={handleClick}>
            {isClicked ? <p>{props.name}</p> : null}
        </div>
    );
}

export default Note;