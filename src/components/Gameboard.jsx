import { useState } from 'react'
import '../styles/Gameboard.css'
import Card from "./Card"

export default function Gameboard( { score, setScore, topScore, setTopScore } ) {
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

    const initialCardList = pokemon.map((pokemon) => {
        return <Card key={pokemon} pokemonName={pokemon} onClick={handleClick}/>
    });

    const [selectedCardIds, setSelectedCardIds] = useState([]);
    const [cardList, setCardList] = useState(initialCardList);

    function handleClick(e) {
        console.log(e.currentTarget.value);
        if (selectedCardIds.includes(e.currentTarget.value)) {
            setScore(0);
            setSelectedCardIds([]);
            if (score > topScore) {
                setTopScore(score);
            }
        } else {
            setScore(score + 1);
            const newSelectedCardIds = [...selectedCardIds, e.currentTarget.value];
            setSelectedCardIds(newSelectedCardIds);
        }
        const newCardList = shuffleCards(cardList);
        setCardList(newCardList);
    }

    function shuffleCards(cardList) {
        const newCardList = cardList.slice(0);
        for (let i = newCardList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newCardList[i], newCardList[j]] = [newCardList[j], newCardList[i]];
        }
        return newCardList;
    }

    return (
        <>
            <div className='gameboard'>
                {cardList}
            </div>
        </>
    )
}