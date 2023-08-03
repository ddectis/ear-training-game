import data from '../json/notes.json'

const GuessSetter = props => {

    const levelInfo = data.Levels[props.difficulty - 1];
    const intervalNames = data.IntervalNames;
    //console.log(intervalNames);

    //console.log(levelInfo)

    const handleChange = event => {
        //console.log("I'm changing!" + event.target.value)

        props.setGuess(levelInfo.intervals[event.target.value - 1])
    }

    //useEffect(event => {
    //    //props.setGuess(levelInfo.intervals[event.target.value])
    //})

    return (
        <div className="slider-holder">
            <p>Drag the slider to select an interval to guess</p>
            <input
                type="range"
                min="1"
                max={levelInfo.intervals.length}
                onChange={handleChange}
                defaultValue="12"
                className="slider"
                
            />
            <div className="guess">
                <h2>{intervalNames[props.guess - 1]}</h2> <p>{props.guess} Half {props.guess > 1 ? "Steps" : "Step"}</p>
            </div>
            
        </div>
        )
}

export default GuessSetter;