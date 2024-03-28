export default function Scoreboard( { score, topScore} ) {
    return (
        <>
            <div className="scoreboard">
                <span>Current score: {score}</span>
                <span>Top score: {topScore}</span>
            </div>
        </>
    )
}