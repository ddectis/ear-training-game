const StageInfo = props => {


    return (
        <div className="stage-info-holder">
            <h2><b>Stage #{props.difficulty}</b></h2>
            <div className="stage-info">
                <div>
                    <p>Cleared: {props.correctCount} / 5 </p>
                    <p>Mistakes: {props.incorrectCount}</p>
                </div>
                
                <p>Total Cleared: {props.totalCorrectCount}</p>
            </div>
        </div>
            
        ) 
}

export default StageInfo