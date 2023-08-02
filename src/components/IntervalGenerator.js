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



const IntervalGenerator = () => {


    const GenerateInterval = () => {
        console.log("Tone Generator Click");
        console.log(levels)

        const baseNote = 0; //this represents the first note of the interval;

        //this is a simple random int function we can call to get random ints
        const getRandomInt = max => {
            return Math.floor(Math.random() * max)
        }

        //get a random int to determine what the second note of the interval should be
        let rnd = getRandomInt(11) + 1

        //create audio objects that point to the mp3 files
        let firstNote = new Audio(`assets/audio/tones/${baseNote}.mp3`)
        let secondNote = new Audio(`assets/audio/tones/${rnd}.mp3`)

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
            <button onClick={GenerateInterval}>Generate Interval</button>
            
        </div>
        )
}

export default IntervalGenerator;