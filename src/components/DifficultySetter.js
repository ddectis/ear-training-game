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
            
            <h2>Select Difficulty Level</h2>

            <div className="difficulty-selector">
            {
                levelInfo.map((level, index) => {
                    return (
                        <div className="difficulty-option">
                            <p>{level.number}</p><label> {level.description} </label>
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