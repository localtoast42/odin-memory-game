import '../styles/Card.css'

export default function Card({ cardId, onClick }) {
    return (
        <button className="card" onClick={onClick} value={cardId}>
            Card
        </button>
    )
}