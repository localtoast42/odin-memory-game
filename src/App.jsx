import { useState } from 'react'
import './App.css'
import Scoreboard from './components/Scoreboard';
import Gameboard from './components/Gameboard';

function App() {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  return (
    <>
      <div>
        <Scoreboard 
          score={score}
          topScore={topScore}
        />
        <div>
          <h1>Memory Game</h1>
          <h2>Test your memory.</h2>
        </div>
        <Gameboard 
          score={score}
          setScore={setScore}
        />
      </div>
    </>
  )
}

export default App
