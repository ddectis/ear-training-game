# About

This was my first project with React. It is an Ear Training game. It plays random musical intervals. The player then tries to guess which interval. The goal for this project was to use what I learned about React and try to apply best practices / patterns. The game contains 5 difficulty levels, the details of which are stored in notes.json. There's also a Sandbox mode which is used to sample each of the different intervals. By default, the starting note of the interval is the same; Players have the option of increasing the difficulty by randomizing the starting note. 

# Options
- 5 difficulty levels stored in notes.json
- Challenge mode (randomize the starting note)
- Interval Playback: simultaneous or delayed

# Architecture

This app follows the principle of separation of concerns. App.js returns the below heirarchy of semantically named components:

- App.js
  - Introduction 
  - DifficultySetter
  - StageInfo
  - StageManager
  - OutcomePrinter
  - IntervalGenerator
    - DelayToggle
  - GuessHandler
    - GuessCheckcer
  - Sandbox
    - DelayToggle

I reused the DelayToggle component and I could probably refactor the IntervalGenerator to be used in the Sandbox component. Instead, I decided to go for a less elegant but quicker to create solution and repeat myself. By this point in the development process, I knew that I only wanted to add the Sandbox mode and would not be doing further development. Therefore, I decided to go for the faster, less-elegant solution. If I were to further develop this app, I would refactor IntervalGenerator. 

I'm pleased with how this project came out! I learned a lot about putting together a react app. 
