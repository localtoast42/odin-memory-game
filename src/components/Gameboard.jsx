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
                    onClick={handleClick}
                />
                <Card 
                    cardId='2'
                    onClick={handleClick}
                />
                <Card 
                    cardId='3'
                    onClick={handleClick}
                />
                <Card 
                    cardId='4'
                    onClick={handleClick}
                />
                <Card 
                    cardId='5'
                    onClick={handleClick}
                />
                <Card 
                    cardId='6'
                    onClick={handleClick}
                />
                <Card 
                    cardId='7'
                    onClick={handleClick}
                />
                <Card 
                    cardId='8'
                    onClick={handleClick}
                />
                <Card 
                    cardId='9'
                    onClick={handleClick}
                />
                <Card 
                    cardId='10'
                    onClick={handleClick}
                />
                <Card 
                    cardId='11'
                    onClick={handleClick}
                />
                <Card 
                    cardId='12'
                    onClick={handleClick}
                />
            </div>
        </>
    )
}