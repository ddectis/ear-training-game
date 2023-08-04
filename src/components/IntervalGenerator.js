import levels from '../json/notes.json'

const noteNamesSharp = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
    'C'
];

let lastNumber = 0;
let firstNote
let secondNote

const IntervalGenerator = props => {


    const generateInterval = () => {
        console.log("Tone Generator Click. Difficulty: " + props.difficulty);
        const levelInfo = levels.Levels[props.difficulty - 1];
        console.log(levelInfo.intervals)
        props.setIsCorrect(false); //when the player generates a new interval, they have started a new round and they are no longer correct
        props.setHasGuessed(false);
        props.setOutcome("");
        const baseNote = 0; //this represents the first note of the interval;

        //this is a simple random int function we can call to get random ints
        const getRandomInt = max => {
            return Math.floor(Math.random() * max)
        }

        let rnd = 0;

        const randomizeSecondNote = () => {
            //get a random int to determine what the second note of the interval should be
            rnd = getRandomInt(levelInfo.intervals.length)
            console.log("Second Interval: " + levelInfo.intervals[rnd]);
            if (rnd === lastNumber) {
                console.log("rerolling number because 2nd interval was the same as the last one")
                randomizeSecondNote();
            }
        }

        randomizeSecondNote();

        //create audio objects that point to the mp3 files
        firstNote = new Audio(`assets/audio/tones/${baseNote}.mp3`)
        secondNote = new Audio(`assets/audio/tones/${levelInfo.intervals[rnd]}.mp3`)

        props.setInterval(levelInfo.intervals[rnd])
        playInterval(firstNote, secondNote);
        
        props.setShowGuessSetter(true);

        lastNumber = rnd;
        props.setIntervalActive(true);
    }

    const playInterval = () => {
        console.log("playing interval")

        //lower the volume because my samples are very loud, so playing 2 of them together will cause clipping
        firstNote.volume = 0.5;
        secondNote.volume = 0.5;

        //play the first note of the interval
        firstNote.play();
        setTimeout(() => {
            secondNote.play(); //then play the second after a delay
        }, 500) //the delay parameter in milliseconds
    }

    return (
        <div>
            {!props.intervalActive && <button onClick={generateInterval} ><h2>Start!</h2></button>}
            {props.isCorrect === true && <button onClick={generateInterval} >Continue to Next Interval</button>}
            {props.intervalActive && <button onClick={playInterval} >Play Interval Again</button> }
            
        </div>
        )
}

export default IntervalGenerator;