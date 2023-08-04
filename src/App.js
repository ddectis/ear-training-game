import React, { useState } from 'react'
import './App.css';
import IntervalGenerator from './components/IntervalGenerator'
import DifficultySetter from './components/DifficultySetter'
import GuessSetter from './components/GuessSetter'
import GuessChecker from './components/GuessChecker'
import StageInfo from './components/StageInfo'
import StageManager from './components/StageManager'
import Introduction from './components/Introduction'


function App() {

    const [difficulty, setDifficulty] = useState(1)
    const [isIntervalActive, setIsIntervalActive] = useState(false)
    const [interval, setInterval] = useState();
    const [guess, setGuess] = useState(12);
    const [hasGuessed, setHasGuessed] = useState(false);
    const [outcome, setOutcome] = useState("not guessed")
    const [isCorrect, setIsCorrect] = useState(false);
    const [stageNumber, setStageNumber] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);
    const [totalCorrectCount, setTotalCorrectCount] = useState(0);
    const [showGuessSetter, setShowGuessSetter] = useState(true)



  return (
      <div className="App">
          <h1>Dectronica Ear Training</h1>
          {!isIntervalActive && <Introduction />}
          {!isIntervalActive && <DifficultySetter
              difficulty={difficulty}
              setDifficulty={setDifficulty}
          />}

          {isIntervalActive && <StageInfo
              difficulty={difficulty}
              stageNumber={stageNumber}
              correctCount={correctCount}
              incorrectCount={incorrectCount}
              totalCorrectCount={totalCorrectCount}
          />}

          <StageManager
              correctCount={correctCount}
              setCorrectCount={setCorrectCount}
              incorrectCount={incorrectCount}
              setIncorrectCount={setIncorrectCount}
              stageNumber={stageNumber}
              setStageNumber={setStageNumber}
              difficulty={difficulty}
              setDifficulty={setDifficulty}


          />

          <IntervalGenerator
              difficulty={difficulty}
              interval={interval}
              setInterval={setInterval}
              intervalActive={isIntervalActive}
              setIntervalActive={setIsIntervalActive}
              hasGuessed={hasGuessed}
              setHasGuessed={setHasGuessed}
              outcome={outcome}
              setOutcome={setOutcome}
              isCorrect={isCorrect}
              setIsCorrect={setIsCorrect}
              setShowGuessSetter={setShowGuessSetter}
          />

          {showGuessSetter && <GuessSetter
              difficulty={difficulty}
              guess={guess}
              interval={interval}
              setGuess={setGuess}
              intervalActive={isIntervalActive}
              setIntervalActive={setIsIntervalActive}
              hasGuessed={hasGuessed}
              setHasGuessed={setHasGuessed}
              className="slider"
              outcome={outcome}
              setOutcome={setOutcome}
              isCorrect={isCorrect}
              setIsCorrect={setIsCorrect}
              correctCount={correctCount}
              setCorrectCount={setCorrectCount}
              incorrectCount={incorrectCount}
              setIncorrectCount={setIncorrectCount}
              totalCorrectCount={totalCorrectCount}
              setTotalCorrectCount={setTotalCorrectCount}
              setShowGuessSetter={setShowGuessSetter}
          />}

         
          
      
    </div>
  );
}

export default App;
