import { useEffect } from 'react';
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

    //useEffect(event => {
    //    //props.setGuess(levelInfo.intervals[event.target.value])
    //})

    return (
        <div>

            <input
                type="range"
                min="1"
                max={levelInfo.intervals.length}
                onChange={handleChange}
                defaultValue ="12"
            />
            <p>Guess: {intervalNames[props.guess - 1]}</p>
            
        </div>
        )
}

export default GuessSetter;