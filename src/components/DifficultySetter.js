import levels from '../json/notes.json'
import React, { useEffect } from 'react';

const DifficultySetter = props => {
    //console.log(levels.Levels)
    const levelInfo = levels.Levels;


    const handleDifficultyToggle = level => {
        props.setDifficulty(level)

    }

    const handleChallegeModeToggle = ({ target }) => {
        props.setIsChallengeMode(!props.isChallengeMode)
    }


    useEffect(() => {
    }, [props.difficulty, props.isChallengeMode]);

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
                                onChange={() => handleDifficultyToggle(level.number)}
                            />
                        </div>
                        )
                })
                }
            </div>

            <div className="difficulty-selector">
                <div className="difficulty-option justify-content-center">
                    <input type="checkbox" id="use-different-starting-notes" onChange={handleChallegeModeToggle} />
                    <label htmlFor="use-different-starting-notes"><u><b>Challenge Mode:</b></u> Random starting note</label>
                    
                </div>
                <br/><p className="subtext">Challenge Mode is enabled automatically after Stage 5.</p>
            </div>
        </div>
        )
}

export default DifficultySetter;