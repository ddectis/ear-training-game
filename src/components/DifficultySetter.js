import levels from '../json/notes.json'
import React, { useEffect } from 'react';

const DifficultySetter = props => {
    //console.log(levels.Levels)
    const levelInfo = levels.Levels;


    const handleChange = level => {
        props.setDifficulty(level)

    }

    useEffect(() => {
        //console.log(props.difficulty);
    }, [props.difficulty]);

    return (
        <div className="difficulty-container">
            
            <p>Select Difficulty Level</p>
            <p>Get 5 right in a row right advance to the next difficulty stage</p>
            <div className="difficulty-selector">
            {
                levelInfo.map((level, index) => {
                    return (
                        <div>
                            <label>#{level.number}) {level.description} </label>
                            <input
                                type="radio"
                                name="difficulty"
                                value={level.number}
                                onChange={() => handleChange(level.number)}
                            />
                        </div>
                        )
                })
                }
            </div>
        </div>
        )
}

export default DifficultySetter;