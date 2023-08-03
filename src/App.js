import React, { useState } from 'react'
import './App.css';
import IntervalGenerator from './components/IntervalGenerator'
import DifficultySetter from './components/DifficultySetter'
import GuessSetter from './components/GuessSetter'
import GuessChecker from './components/GuessChecker'



function App() {

    const [difficulty, setDifficulty] = useState(1)
    const [intervalActive, setIntervalActive] = useState(false)
    const [interval, setInterval] = useState();
    const [guess, setGuess] = useState(0);
    const [hasGuessed, setHasGuessed] = useState(false);
    //make a state variable here to say when the player has made a guess and then make it so that if they've guessed, they maybe see a button to generate a new interval or whatever

  return (
      <div className="App">
          <DifficultySetter
              difficulty={difficulty}
              setDifficulty={setDifficulty}
          />
          <IntervalGenerator
              difficulty={difficulty}
              interval={interval}
              setInterval={setInterval}
              intervalActive={intervalActive}
              setIntervalActive={setIntervalActive}
          />
          <GuessSetter
              difficulty={difficulty}
              guess={guess}
              setGuess={setGuess}
              intervalActive={intervalActive}
              setIntervalActive={setIntervalActive}
              hasGuessed={hasGuessed}
              setHasGuessed={setHasGuessed}
          />
          <GuessChecker
              interval={interval}
              guess={guess}
              intervalActive={intervalActive}
              setIntervalActive={setIntervalActive}
              hasGuessed={hasGuessed}
              setHasGuessed={setHasGuessed}
          />
      
    </div>
  );
}

export default App;
