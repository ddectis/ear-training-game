import { useEffect } from 'react'
import DelayToggle from './DelayToggle'

const Sandbox = props => {

    const returnToGame = () => {
        props.setIsSandboxMode(false)
    }

    const setInterval = event => {
        props.setSandboxInterval(props.sandboxInfo.intervals[event.target.value - 1])       
    }

    let firstNote;
    let secondNote;

    const playInterval = () => {
        //create audio objects that point to the mp3 files
        firstNote = new Audio(`assets/audio/tones/0.mp3`)
        secondNote = new Audio(`assets/audio/tones/${0 + props.sandboxInterval}.mp3`)

        firstNote.volume = 0.5;
        secondNote.volume = 0.5;

        firstNote.load();
        secondNote.load();

        //play the first note of the interval
        firstNote.play();
        setTimeout(() => {
            secondNote.play(); //then play the second after a delay
        }, props.delay) //the delay parameter in milliseconds
    }

    useEffect(() => {

    },[props.guess])

    return (
        <div className="flex-column">
            <h1>Introduction to Intervals</h1>
            <div className="padding-20 inverse-colors border-radius-50 margin-block-10">
                <ul>
                    <li>When any two musical notes are played, an interval is formed.</li>
                    <li>An interval can be described as the distance between those two notes</li>
                    <li>There are 12 intervals that make up an octave.</li>
                    <li><b>Get to know each of them!</b></li>
                    <li><u>Things to think about:</u></li>
                    <li>How to they feel? What emotions do they evoke?</li>
                    <li>What parts of songs can you hear?</li>
                    <li>Which intervals have tension and which ones don't?</li>
                    <li>Which are consonant and which are dissonant?</li>
                </ul>
            </div>
            <DelayToggle
                delay={props.delay}
                setDelay={props.setDelay}
            />

            <div className="stage-info-holder flex-column">
                <h2>Interval Sampler</h2>
                <button className="guess" onClick={playInterval}>
                    <h2>{props.intervalNames[props.sandboxInterval - 1]}</h2> <p>{props.sandboxInterval} Half {props.sandboxInterval > 1 ? "Steps" : "Step"}</p>
                    <p>Click to play selected interval</p>
                </button>
                <br/>
                <input
                    type="range"
                    min="1"
                    max="12"
                    onChange={setInterval}
                    defaultValue="12"
                    className="slider"
                />
                <div className="subtext">Drag the slider to select an interval</div>
                <br />
                
            </div>
            <button onClick={returnToGame}>Return to game</button>
            
        </div>    
        )
    
}

export default Sandbox;