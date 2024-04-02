import { useState } from 'react'
import '../styles/Gameboard.css'
import Card from "./Card"

export default function Gameboard( { score, setScore, topScore, setTopScore } ) {

    const [selectedCardIds, setSelectedCardIds] = useState([]);

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
                <Card 
                    cardId='1'
                    pokemonName='pikachu'
                    onClick={handleClick}
                />
                <Card 
                    cardId='2'
                    pokemonName='pikachu'
                    onClick={handleClick}
                />
                <Card 
                    cardId='3'
                    pokemonName='pikachu'
                    onClick={handleClick}
                />
                <Card 
                    cardId='4'
                    pokemonName='pikachu'
                    onClick={handleClick}
                />
                <Card 
                    cardId='5'
                    pokemonName='pikachu'
                    onClick={handleClick}
                />
                <Card 
                    cardId='6'
                    pokemonName='pikachu'
                    onClick={handleClick}
                />
                <Card 
                    cardId='7'
                    pokemonName='pikachu'
                    onClick={handleClick}
                />
                <Card 
                    cardId='8'
                    pokemonName='pikachu'
                    onClick={handleClick}
                />
                <Card 
                    cardId='9'
                    pokemonName='pikachu'
                    onClick={handleClick}
                />
                <Card 
                    cardId='10'
                    pokemonName='pikachu'
                    onClick={handleClick}
                />
                <Card 
                    cardId='11'
                    pokemonName='pikachu'
                    onClick={handleClick}
                />
                <Card 
                    cardId='12'
                    pokemonName='pikachu'
                    onClick={handleClick}
                />
            </div>
        </>
    )
}