import { useEffect } from 'react';
import data from '../json/notes.json'

const StageManager = props => {
    console.log()

    useEffect(() => {

    },[props.correctCount])

    if (props.correctCount === 5) {
        console.log("going to next stage!")
        if (props.difficulty < data.Levels.length) {
            props.setDifficulty(props.difficulty + 1)
        } else {
            console.log("already at max difficulty!")
            props.setIsChallengeMode(true);
        }

        props.setCorrectCount(0)
        
    }

}

export default StageManager