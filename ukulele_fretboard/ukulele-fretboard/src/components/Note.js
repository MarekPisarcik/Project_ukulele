import React, { useState, useEffect } from 'react';

const Note = ({ className, name, string, currentQuestion, answerStatus, handleAnswer, isGameRunning }) => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        setIsClicked(false);
    }, [currentQuestion]);

    const handleClick = () => {
        if (!isGameRunning) {
            return; 
        }
        
        console.log(`KLIK NA NOTU: ${name}${string}`);
        
        handleAnswer(name, string);
    };

    const isCorrectAnswerHighlight = answerStatus && 
                                     !answerStatus.is_correct &&
                                     answerStatus.correct_note === name && 
                                     answerStatus.correct_string === string;

    return (
        <div 
            className={`
                ${className} 
                ${isClicked ? 'incorrect-click' : ''} 
                ${isCorrectAnswerHighlight ? 'highlight-correct' : ''}
                ${answerStatus && name === answerStatus.correct_note && string === answerStatus.correct_string 
                    ? 'correct-answer' 
                    : ''
                }
            `} 
            onClick={handleClick}
        >
            {isClicked ? <p>{name}</p> : null}
        </div>
    );
}

export default Note;