import '../styles/Gameboard.css'
import Card from "./Card"

export default function Gameboard( { setScore, setTopScore } ) {

    const selectedCardIds = [];

    return (
        <>
            <div className='gameboard'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}