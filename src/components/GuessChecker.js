import { useEffect } from 'react';

const GuessChecker = props => {
    
    let result = "";
    let correct;

    useEffect(() => {
        // This will run every time the component mounts or the state of the component changes, or when result changes.
    }, [props.guess, props.interval, result, correct]);


    return (

            <button className="guess" onClick={props.checkGuess}>
                <h2>{props.intervalNames[props.guess - 1]}</h2> <p>{props.guess} Half {props.guess > 1 ? "Steps" : "Step"}</p>

            </button>
 
    );
};

export default GuessChecker;