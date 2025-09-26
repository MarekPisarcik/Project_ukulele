import "./Fretboard.css";
import fretboard_image from '../assets/fretboard_image.jpg';
import Note from "./Note";

const AllFretboard = () => {
    const fretboardStyle = {
        backgroundImage: `url(${fretboard_image})`,
        backgroundSize: 'cover',
    }
   

    return (
        <>
            
            <body>
                <div className="fretboard" style={fretboardStyle}>
                    <div className="notes_container">
                        <div className="note_row note_a">
                            <Note className="note note_a_1" name="A#/Bb" string="A"/>
                            <Note className="note note_a_2" name="B" string="A"/>
                            <Note className="note note_a_3" name="C" string="A"/>
                            <Note className="note note_a_4" name="C#/Db" string="A"/>
                            <Note className="note note_a_5" name="D" string="A"/>
                            <Note className="note note_a_6" name="D#/Eb" string="A"/>
                            <Note className="note note_a_7" name="E" string="A"/>
                            <Note className="note note_a_8" name="F" string="A"/>
                            <Note className="note note_a_9" name="F#/Gb" string="A"/>
                            <Note className="note note_a_10" name="G" string="A"/>
                            <Note className="note note_a_11" name="G#/Ab" string="A"/>
                            <Note className="note note_a_12" name="A" string="A"/>
                            <div className="note note_a_13"></div>
                        </div>
                        <div className="note_row note_e">
                            <Note className="note note_e_1" name="F" string="E"/>
                            <Note className="note note_e_2" name="F#/Gb" string="E"/>
                            <Note className="note note_e_3" name="G" string="E"/>
                            <Note className="note note_e_4" name="G#/Ab" string="E"/>
                            <Note className="note note_e_5" name="A" string="E"/>
                            <Note className="note note_e_6" name="A#/Bb" string="E"/>
                            <Note className="note note_e_7" name="B" string="E"/>
                            <Note className="note note_e_8" name="C" string="E"/>
                            <Note className="note note_e_9" name="C#/Db" string="E"/>
                            <Note className="note note_e_10" name="D" string="E"/>
                            <Note className="note note_e_11" name="D#/Eb" string="E"/>
                            <Note className="note note_e_12" name="E" string="E"/>
                            <div className="note note_e_13"></div>
                        </div>
                        <div className="note_row note_c">
                            <Note className="note note_c_1" name="C#" string="C"/>
                            <Note className="note note_c_2" name="D" string="C"/>
                            <Note className="note note_c_3" name="D#/Eb" string="C"/>
                            <Note className="note note_c_4" name="E" string="C"/>
                            <Note className="note note_c_5" name="F" string="C"/>
                            <Note className="note note_c_6" name="F#/Gb" string="C"/>
                            <Note className="note note_c_7" name="G"/> string="C"
                            <Note className="note note_c_8" name="G#/Ab" string="C"/>
                            <Note className="note note_c_9" name="A" string="C"/>
                            <Note className="note note_c_10" name="A#/Bb" string="C"/>
                            <Note className="note note_c_11" name="B" string="C"/>
                            <Note className="note note_c_12" name="C" string="C"/>
                            <div className="note note_c_13"></div>
                        </div>
                        <div className="note_row note_g">
                            <Note className="note note_g_1" name="G#/Ab" string="G"/>
                            <Note className="note note_g_2" name="A" string="G"/>
                            <Note className="note note_g_3" name="A#/Bb" string="G"/>
                            <Note className="note note_g_4" name="B" string="G"/>
                            <Note className="note note_g_5" name="C" string="G"/>
                            <Note className="note note_g_6" name="C#/Db" string="G"/>
                            <Note className="note note_g_7" name="D" string="G"/>
                            <Note className="note note_g_8" name="D#/Eb" string="G"/>
                            <Note className="note note_g_9" name="E" string="G"/>
                            <Note className="note note_g_10" name="F" string="G"/>
                            <Note className="note note_g_11" name="F#/Gb" string="G"/>
                            <Note className="note note_g_12" name="G" string="G"/>
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
            </body>
            
        </>
    )
}

export default AllFretboard;
