import { useState } from 'react'
import '../styles/Gameboard.css'
import Card from "./Card"

export default function Gameboard( { score, setScore, topScore, setTopScore } ) {

    const [selectedCardIds, setSelectedCardIds] = useState([]);
    const pokemon = [
        'pikachu', 
        'squirtle', 
        'bulbasaur',
        'charmander',
        'eevee',
        'psyduck',
        'meowth',
        'jigglypuff',
        'geodude',
        'pidgey',
        'diglett',
        'abra',
    ];

    const cardList = pokemon.map((pokemon) => {
        return <Card key={pokemon} pokemonName={pokemon} onClick={handleClick}/>
    })

    function handleClick(e) {
        console.log(e.target.value);
        if (selectedCardIds.includes(e.target.value)) {
            setScore(0);
            setSelectedCardIds([]);
            if (score > topScore) {
                setTopScore(score);
            }
        } else {
            setScore(score + 1);
            const newSelectedCardIds = [...selectedCardIds, e.target.value];
            setSelectedCardIds(newSelectedCardIds);
        }
    }

    function shuffleCards(cardList) {
        for (let i = cardList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cardList[i], cardList[j]] = [cardList[j], cardList[i]];
        }
    }

    return (
        <>
            <div className='gameboard'>
                {cardList}
            </div>
        </>
    )
}