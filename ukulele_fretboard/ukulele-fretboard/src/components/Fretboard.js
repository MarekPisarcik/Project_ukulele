import "./Fretboard.css";
import fretboard_image from '../assets/fretboard_image.jpg';
import Note from "./Note";
import { useState } from "react";
import { useEffect } from "react";

const AllFretboard = () => {
    const [currentQuestion, setCurrentQuestion]= useState({ string: '', note: '' });

    const [answerStatus, setAnswerStatus] = useState(null);

    const [isGameRunning, setIsGameRunning] = useState(false);

    const [currentRound, setCurrentRound] = useState(0);

    const [score, setScore] = useState(0);

    const [awaitingNextRound, setAwaitingNextRound] = useState(false);

    const getQuestion = async () => {
    try {
        const response = await fetch('/api/get_question');
        const data = await response.json();
        setAnswerStatus(null); 
        setCurrentQuestion(data); 
    } catch (error) {
        console.error('Chyba pri načítaní otázky:', error);
    }
    };

    const handleStartGame = () => {
        setIsGameRunning(true);
        setCurrentRound(1);
        setScore(0);
        getQuestion();
    }
    
    const handleContinue = () => {
    // 1. NAJPRV sa rozhodneme, čo robiť
    if (currentRound === 10) {
        // Ak je kolo 10, hru UKONČÍME
        setIsGameRunning(false);
    } else {
        // Ak kolo NIE JE 10, POKRAČUJEME
        setAwaitingNextRound(false);
        setAnswerStatus(null);
        setCurrentQuestion({ string: '', note: '' });
        getQuestion();
        setCurrentRound(prevRound => prevRound + 1);
    }
};

    const handleAnswer = async (noteName, noteString) => {
    
        if (!currentQuestion) {
            console.error("Chyba: Nie je definovaná aktuálna otázka.");
            return;
        }

        const userAnswer = {
            name: noteName,
            string: noteString,
            
            question_id: currentQuestion.id,
        };

        try {
            const response = await fetch('/api/check_note/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(userAnswer),
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

            const data = await response.json();
            setAwaitingNextRound(true);
            
            setAnswerStatus(data);
            
            if (data.is_correct) {
                setScore(prevScore => prevScore + 1);
        }

        

    } catch (error) {
        console.error('Error pri spracovaní odpovede:', error);
    }
    };

    const fretboardStyle = {
        backgroundImage: `url(${fretboard_image})`,
        backgroundSize: 'cover',
    }
   

    return (
    <div>
        
        <p style={{ color: 'red', margin: '10px 0' }}>
            DEBUG: Game Running: {isGameRunning.toString()} | Awaiting Next: {awaitingNextRound.toString()} | Round: {currentRound}
        </p>

        {currentQuestion.note && currentQuestion.string && (
            <div className="current-question">
                <h2>Nájdi na hmatníku tón **{currentQuestion.note}** na strune **{currentQuestion.string}**</h2>
            </div>
        )}

        
        {answerStatus && !awaitingNextRound && (
            <div className="answer-status-message">
                {answerStatus.message}
            </div>
        )}

        
        {!isGameRunning && currentRound === 0 && (
            <button className="start-button" onClick={handleStartGame}>ŠTART (10 KÔL)</button>
        )}

        
        {!isGameRunning && currentRound > 0 && (
            <div className="game-summary">
                <h2>TRÉNING DOKONČENÝ!</h2>
                <p>Tvoje skóre je: **{score}** z **10**.</p>
                <button className="restart-button" onClick={handleStartGame}>
                    Zopakovať tréning
                </button>
            </div>
        )}

        
        {isGameRunning && (
            <div className="fretboard-wrapper">
                
                {awaitingNextRound && answerStatus && (
                    <div
                        className="continue-overlay"
                        onClick={handleContinue}
                    >
                        <h2>{answerStatus.message}</h2>
                        <button>{(currentRound === 10 ? 'Koniec' : `Klikni pre pokračovanie na Kolo ${currentRound + 1}`)}</button>
                    </div>
                )}

                
                <div className="fretboard" style={fretboardStyle}>
                    <div className="notes_container">
                        <div className="note_row note_a">
                            <Note className="note note_a_1" name="A#/Bb" string="A"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_a_2" name="B" string="A"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_a_3" name="C" string="A"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_a_4" name="C#/Db" string="A"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_a_5" name="D" string="A"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_a_6" name="D#/Eb" string="A"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_a_7" name="E" string="A"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_a_8" name="F" string="A"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_a_9" name="F#/Gb" string="A"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_a_10" name="G" string="A"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_a_11" name="G#/Ab" string="A"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_a_12" name="A" string="A"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <div className="note note_a_13"></div>
                        </div>
                        <div className="note_row note_e">
                            <Note className="note note_e_1" name="F" string="E"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_e_2" name="F#/Gb" string="E"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_e_3" name="G" string="E"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_e_4" name="G#/Ab" string="E"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_e_5" name="A" string="E"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_e_6" name="A#/Bb" string="E"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_e_7" name="B" string="E"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_e_8" name="C" string="E"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_e_9" name="C#/Db" string="E"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_e_10" name="D" string="E"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_e_11" name="D#/Eb" string="E"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_e_12" name="E" string="E"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <div className="note note_e_13"></div>
                        </div>
                        <div className="note_row note_c">
                            <Note className="note note_c_1" name="C#/Db" string="C"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_c_2" name="D" string="C"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_c_3" name="D#/Eb" string="C"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_c_4" name="E" string="C"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_c_5" name="F" string="C"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_c_6" name="F#/Gb" string="C"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_c_7" name="G" string="C"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_c_8" name="G#/Ab" string="C"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_c_9" name="A" string="C"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_c_10" name="A#/Bb" string="C"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_c_11" name="B" string="C"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_c_12" name="C" string="C"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <div className="note note_c_13"></div>
                        </div>
                        <div className="note_row note_g">
                            <Note className="note note_g_1" name="G#/Ab" string="G"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_g_2" name="A" string="G"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_g_3" name="A#/Bb" string="G"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_g_4" name="B" string="G"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_g_5" name="C" string="G"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_g_6" name="C#/Db" string="G"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_g_7" name="D" string="G"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_g_8" name="D#/Eb" string="G"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_g_9" name="E" string="G"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_g_10" name="F" string="G"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_g_11" name="F#/Gb" string="G"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <Note className="note note_g_12" name="G" string="G"
                                currentQuestion={currentQuestion}
                                answerStatus={answerStatus}
                                handleAnswer={handleAnswer}
                                isGameRunning={isGameRunning}
                                awaitingNextRound={awaitingNextRound}
                            />
                            <div className="note note_g_13"></div>
                        </div>
                    </div>
                    <div className="strings_names">
                        <div>A</div>
                        <div>E</div>
                        <div>C</div>
                        <div>G</div>
                    </div>
                    <div className="strings">
                        <div className="string_A"></div>
                        <div className="string_E"></div>
                        <div className="string_C"></div>
                        <div className="string_G"></div>
                    </div>
                    <div className="frets">
                        <div className="fret_0"></div>
                        <div className="fret_1"></div>
                        <div className="fret_2"></div>
                        <div className="fret_3"></div>
                        <div className="fret_4"></div>
                        <div className="fret_5"><div className="fret_mark"></div></div>
                        <div className="fret_6"></div>
                        <div className="fret_7"><div className="fret_mark"></div></div>
                        <div className="fret_8"></div>
                        <div className="fret_9"></div>
                        <div className="fret_10"><div className="fret_mark"></div></div>
                        <div className="fret_11"></div>
                        <div className="fret_12"><div className="fret_mark"></div></div>
                    </div>
                </div>
            </div>
        )}
    </div>
    )
}
export default AllFretboard;