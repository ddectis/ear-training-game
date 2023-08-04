import data from '../json/notes.json'

const StageInfo = props => {


    return (
        <div className="stage-info-holder">
            <div className="stage-info flex-column height100 justify-content-space-between">
                <h2><b><u>Stage {props.difficulty} / {data.Levels.length}</u></b></h2>
                
                {props.isChallengeMode && <p><i>Challenge Mode!</i></p> }

            </div>
                <div className="stage-info">
                    <div>
                        <p>Cleared <br/> {props.correctCount} / 5 </p>
                        <p>Mistakes <br/> {props.incorrectCount}</p>
                        <br />
                        <p><b>Total Cleared:<br/> {props.totalCorrectCount}</b></p>
                    </div>
                
                
                </div>
            
        </div>
            
        ) 
}

export default StageInfo