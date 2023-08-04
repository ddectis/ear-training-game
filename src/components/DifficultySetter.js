import levels from '../json/notes.json'
import React, { useEffect } from 'react';


const DifficultySetter = props => {
    //console.log(levels.Levels)
    const levelInfo = levels.Levels;


    const handleDifficultyToggle = (event) => {
        props.setDifficulty(event.currentTarget.id)
        const difficultyOptions = document.querySelectorAll(".difficulty-option")
        difficultyOptions.forEach(option => {
            option.classList.remove("active")
        }) 
        event.currentTarget.classList.add("active")
        console.log(event.target.id)
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
                    const levelId = level.number
                    let addOnFirstIndexValue = ""
                    if (index === 0) {
                        addOnFirstIndexValue = "active"
                    }
                    const classList = `difficulty-option font-size-1em font-weight-100 ${addOnFirstIndexValue}`
                    return (
                        <button
                            className={classList}
                            id={levelId}
                            onClick={handleDifficultyToggle}
                        >
                            
                            <p>{level.number}</p><p> {level.description} </p>
                            
                        </button>
                        )
                })
                }
            </div>

            <div className="difficulty-selector">
                <div className="difficulty-option justify-content-center" id="challenge-selector">
                    <input type="checkbox" id="use-different-starting-notes" onChange={handleChallegeModeToggle} />
                    <label htmlFor="use-different-starting-notes"><u><b>Challenge Mode:</b></u><br/> Random starting note</label>
                    
                </div>
                <br/><p className="subtext max-width75">Challenge Mode is enabled automatically after Stage 5.</p>
            </div>
        </div>
        )
}

export default DifficultySetter;