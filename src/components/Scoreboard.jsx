import { useState } from 'react'

export default function Scoreboard() {
    const [score, setScore] = useState(0);
    const [topScore, setTopScore] = useState(0);

    return (
        <>
            <div className="scoreboard">
                <span>Current score: {score}</span>
                <span>Top score: {topScore}</span>
            </div>
        </>
    )
}