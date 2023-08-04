import { useEffect } from 'react'
import data from '../json/notes.json'

const GuessSetter = props => {

    const levelInfo = data.Levels[props.difficulty - 1];
    const intervalNames = data.IntervalNames;
    //console.log(intervalNames);

    //console.log(levelInfo)

    const handleChange = event => {
        //console.log("I'm changing!" + event.target.value)

        props.setGuess(levelInfo.intervals[event.target.value - 1])
    }

    let result = "";
    let correct;

    useEffect(() => {
        // This will run every time the component mounts or the state of the component changes, or when result changes.
    }, [props.guess, props.interval, result, correct]);

    const handleSubmit = () => {
        console.log("submitting guess: " + props.guess + " Interval is: " + props.interval);


        if (props.guess === props.interval) {
            props.setIsCorrect(true)
            result = "Result: correct! :)"
            props.setOutcome(result)
            props.setCorrectCount(props.correctCount + 1)
            props.setTotalCorrectCount(props.totalCorrectCount + 1)
            console.log(result);
            props.setShowGuessSetter(false);

        } else {
            props.setIsCorrect(false)

            result = "Result: wrong :("
            props.setOutcome(result)
            props.setIncorrectCount(props.incorrectCount + 1)
            console.log(result)
        }
    };

    return (
        <div className="slider-holder">
            <p>Drag the slider to select an interval to guess</p>
            <input
                type="range"
                min="1"
                max={levelInfo.intervals.length}
                onChange={handleChange}
                defaultValue="12"
                className="slider"
                
            />
            <button className="guess" onClick={handleSubmit}>
                <h2>{intervalNames[props.guess - 1]}</h2> <p>{props.guess} Half {props.guess > 1 ? "Steps" : "Step"}</p>
                <p>Click to guess</p>
            </button>
            
        </div>
        )
}

export default GuessSetter;