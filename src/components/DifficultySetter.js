import levels from '../json/notes.json'
import React, { useState, useEffect } from 'react';

const DifficultySetter = () => {
    console.log(levels.Levels)
    const levelInfo = levels.Levels;
    const [difficulty, setDifficulty] = useState()

    const handleChange = level => {
        setDifficulty(level)

    }

    useEffect(() => {
        console.log(difficulty);
    }, [difficulty]);

    return (
        <div>
            <p>Select Difficulty</p>
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
            })}


                
        </div>
        )
}

export default DifficultySetter;