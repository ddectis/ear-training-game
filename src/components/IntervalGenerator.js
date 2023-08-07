import { useState } from 'react';
import levels from '../json/notes.json'
import DelayToggle from './DelayToggle'

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
        console.log("Tone Generator Click. Difficulty: " + props.difficulty + " Challenge mode: " + props.isChallengeMode);
        const levelInfo = levels.Levels[props.difficulty - 1];
        console.log(levelInfo.intervals)
        props.setIsCorrect(false); //when the player generates a new interval, they have started a new round and they are no longer correct
        props.setHasGuessed(false);
        props.setOutcome("");
        let baseNote = 0; //this represents the first note of the interval;

        //this is a simple random int function we can call to get random ints
        const getRandomInt = max => {
            return Math.floor(Math.random() * max)
        }

        let rnd = 0;
        let secondNoteFileNumber = 0;

        const randomizeSecondNote = () => {
            //get a random int to determine what the second note of the interval should be
            rnd = getRandomInt(levelInfo.intervals.length) //the length of this array corresponds to the number of interval options in the active difficulty level
            console.log("Second Interval: " + levelInfo.intervals[rnd]);
            if (rnd === lastNumber) {
                console.log("rerolling number because 2nd interval was the same as the last one")
                randomizeSecondNote();
            }
            if (props.isChallengeMode) {
                baseNote = getRandomInt(11) //randomize the base note because challenge mode is active
                
                console.log("BaseNote: " + baseNote)
            }
            //grab the index item from the intervals array, that item will correspond to the number of steps in the selected interval. Then transpose it by baseNote. When challenge mode is off, baseNote = 0 i.e. no transposition
            secondNoteFileNumber = levelInfo.intervals[rnd] + baseNote 

        }

        randomizeSecondNote();

        //create audio objects that point to the mp3 files
        firstNote = new Audio(`assets/audio/tones/${baseNote}.mp3`)
        secondNote = new Audio(`assets/audio/tones/${secondNoteFileNumber}.mp3`)
        console.log(secondNote);
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
        firstNote.load();
        secondNote.load();
  
        //play the first note of the interval
        firstNote.play();
        setTimeout(() => {
            secondNote.play(); //then play the second after a delay
        }, props.delay) //the delay parameter in milliseconds
    }



    return (
        <div className="options-holder">
            {props.intervalActive && <DelayToggle
                delay={props.delay}
                setDelay={props.setDelay}
            /> }
            {!props.intervalActive && <button onClick={generateInterval} ><h2>Start!</h2></button>}
            <div className="continue-or-play-again">
                {props.intervalActive && <button className="margin-block-10 bold" onClick={playInterval} >Play Interval Again</button>}
                {props.isCorrect === true && <button className="margin-block-10" onClick={generateInterval} >Continue to Next Interval</button>}
            </div>
            
        </div>
        )
}

export default IntervalGenerator;