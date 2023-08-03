const StageInfo = props => {


    return (
        <div>
            <p>Level #{props.difficulty}</p>
            <p>Stage Cleared: {props.correctCount} / 5 </p>
            <p>Mistakes: {props.incorrectCount} / 3</p>
            <p>Total Cleared: {props.totalCorrectCount}</p>
        </div>
            
        ) 
}

export default StageInfo