import data from '../json/notes.json'

const StageInfo = props => {

    let successPercentage;

    if (props.totalAttemptedCount > 0) {
        successPercentage = (props.totalCorrectCount / props.totalAttemptedCount * 100).toFixed(0);
    } else {
        successPercentage = 0;
    }
    

    return (
        <div className="width100">
            <div className="stage-info-holder">

                    <div className="stage-info">
                        
                    <div className="stage-info-holder width100">
                        <h2><b><u>Stage {props.difficulty} / {data.Levels.length}</u></b></h2>
                            <p><u>Progress:</u> {props.correctCount} / 5 </p>
                            <p><u>Mistakes:</u> {props.incorrectCount}</p>
                            
                        </div>                
                </div>
                <div className="stage-info-holder">
                    <p><b>Overall: {props.totalCorrectCount} / {props.totalAttemptedCount} or {successPercentage}%</b> </p>
                    <p><b></b></p>

                </div>
                    <div className="stage-info flex-column height100 width100 justify-content-space-between">
                    {props.isChallengeMode && <p className="width100"><i><b>Challenge Mode Active!</b></i></p>}
                </div>
            </div>
        </div>
            
        ) 
}

export default StageInfo