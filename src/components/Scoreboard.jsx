import '../styles/Scoreboard.css'

export default function Scoreboard( { score, topScore} ) {
    return (
        <>
            <div className="scoreboard">
                <h3>Top score:</h3>
                <h3 className='score'>{topScore}</h3>
                <h3>Current score:</h3>
                <h3 className='score'>{score}</h3>
            </div>
        </>
    )
}