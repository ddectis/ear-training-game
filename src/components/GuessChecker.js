import { useEffect } from 'react';

const GuessChecker = props => {
    
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

            <button className="guess" onClick={props.checkGuess}>
                <h2>{props.intervalNames[props.guess - 1]}</h2> <p>{props.guess} Half {props.guess > 1 ? "Steps" : "Step"}</p>

            </button>
 
    );
};

export default GuessChecker;
