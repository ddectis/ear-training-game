import React, { useState } from 'react'
import './App.css';
import IntervalGenerator from './components/IntervalGenerator'
import DifficultySetter from './components/DifficultySetter'
import GuessHandler from './components/GuessHandler'
import StageInfo from './components/StageInfo'
import StageManager from './components/StageManager'
import Introduction from './components/Introduction'
import OutcomePrinter from './components/OutcomePrinter'
import Sandbox from './components/Sandbox.js'


function App() {

    const [difficulty, setDifficulty] = useState(1)
    const [isChallengeMode, setIsChallengeMode] = useState(false);
    const [isIntervalActive, setIsIntervalActive] = useState(false)
    const [interval, setInterval] = useState();
    const [guess, setGuess] = useState(12);
    const [hasGuessed, setHasGuessed] = useState(false);
    const [outcome, setOutcome] = useState("")
    const [isCorrect, setIsCorrect] = useState(false);
    const [stageNumber, setStageNumber] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);
    const [totalCorrectCount, setTotalCorrectCount] = useState(0);
    const [totalAttemptedCount, setTotalAttemptedCount] = useState(0);
    const [showGuessSetter, setShowGuessSetter] = useState(false)
    const [isSandboxMode, setIsSandboxMode] = useState(false);


  return (
      <div className="App">
          {!isSandboxMode && (<div>
              <h1>Dectronica Ear Training</h1>

              {!isIntervalActive && <Introduction
                  setIsSandboxMode={setIsSandboxMode}
                  isSandboxMode={isSandboxMode}
              />}

              {!isIntervalActive && <DifficultySetter
                  difficulty={difficulty}
                  setDifficulty={setDifficulty}
                  isChallengeMode={isChallengeMode}
                  setIsChallengeMode={setIsChallengeMode}
              />}

              {isIntervalActive && <StageInfo
                  difficulty={difficulty}
                  stageNumber={stageNumber}
                  correctCount={correctCount}
                  incorrectCount={incorrectCount}
                  totalCorrectCount={totalCorrectCount}
                  totalAttemptedCount={totalAttemptedCount}
                  isChallengeMode={isChallengeMode}
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
                  isChallengeMode={isChallengeMode}
                  setIsChallengeMode={setIsChallengeMode}
              />

              {hasGuessed && <OutcomePrinter
                  outcome={outcome}
              />}

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
                  isChallengeMode={isChallengeMode}
              />

              {showGuessSetter && <GuessHandler
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
                  totalAttemptedCount={totalAttemptedCount}
                  setTotalAttemptedCount={setTotalAttemptedCount}
              />}
          </div>)}
          {isSandboxMode && <Sandbox
              isSandboxMode={isSandboxMode}
              setIsSandboxMode={setIsSandboxMode}
            />}
      
    </div>
  );
}

export default App;
