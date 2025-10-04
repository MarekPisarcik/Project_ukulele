import React, { useState, useEffect } from 'react';

const Note = ({ className, name, string, currentQuestion, answerStatus, handleAnswer, isGameRunning, awaitingNextRound }) => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        setIsClicked(false);
    }, [currentQuestion]);

    const handleClick = () => {
        if (awaitingNextRound) {
            return;
        }
        
        if (!isGameRunning) {
            return; 
        }
        
        console.log(`KLIK NA NOTU: ${name}${string}`);
        
        handleAnswer(name, string);
        setIsClicked(true);
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
                ${isClicked && answerStatus && !answerStatus.is_correct ? 'incorrect-answer' : ''} 
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