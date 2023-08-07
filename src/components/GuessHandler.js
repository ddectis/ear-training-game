import { useEffect } from 'react'
import data from '../json/notes.json'
import GuessChecker from './GuessChecker'

const GuessHandler = props => {

    const intervalNames = data.IntervalNames;
    //console.log(intervalNames);

    //console.log(levelInfo)

    const setGuess = event => {
        //console.log("I'm changing!" + event.target.value)

        props.setGuess(props.levelInfo.intervals[event.target.value - 1])
    }

    let result = "";
    let correct;

    useEffect(() => {
        // This will run every time the component mounts or the state of the component changes, or when result changes.
    }, [props.guess, props.interval, result, correct]);

    const checkGuess = () => {
        console.log("submitting guess: " + props.guess + " Interval is: " + props.interval);
        props.setHasGuessed(true)
        props.setTotalAttemptedCount(props.totalAttemptedCount + 1)

        if (props.guess === props.interval) {
            props.setIsCorrect(true)
            result = `Correct! The answer was ${intervalNames[props.guess - 1]}`
            props.setOutcome(result)
            props.setCorrectCount(props.correctCount + 1)
            props.setTotalCorrectCount(props.totalCorrectCount + 1)
            console.log(result);
            props.setShowGuessSetter(false);
            props.setGuess(12);

        } else {
            props.setIsCorrect(false)

            result = `Incorrect. You guessed ${intervalNames[props.guess - 1]}.`
            props.setOutcome(result)
            props.setIncorrectCount(props.incorrectCount + 1)
            console.log(result)
        }

        
    };

    return (
        <div className="slider-holder">
            <GuessChecker
                guess={props.guess}
                checkGuess={checkGuess}
                intervalNames={intervalNames}
            />

            <div className="subtext">Click to guess</div>

            <input
                type="range"
                min="1"
                max={props.levelInfo.intervals.length}
                onChange={setGuess}
                defaultValue="12"
                className="slider"
            />

            <p>Drag the slider to select an interval to guess</p>
        </div>
    )
}

export default GuessHandler;