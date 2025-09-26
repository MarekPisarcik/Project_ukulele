
import React, { useState } from "react";


const Note = (props) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    const className = props.className + (isClicked ? " clicked" : "");

    return (
        <div className={className} onClick={handleClick}>
            {isClicked ? <p>{props.name}</p> : null}
        </div>
    )

}

export default Note;