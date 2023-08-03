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
            correct = true;
            result = "correct! :)"
            
            console.log(result);
            console.log(correct)
        } else {
    
            
            result = "wrong :("
            console.log(result)
        }
    };

    return (
        <div>
            {!correct && <button onClick={handleSubmit} >Submit Guess</button>}
            <p>Result: {result}</p>
        </div>
    );
};

export default GuessChecker;
