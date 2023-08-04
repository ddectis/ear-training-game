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
        <div>
            {!props.isCorrect && <button className="submit-button" onClick={handleSubmit} >Submit Guess</button>}
            <p>{props.outcome}</p>
        </div>
    );
};

export default GuessChecker;
