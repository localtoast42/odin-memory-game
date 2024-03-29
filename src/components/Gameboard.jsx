import { useState } from 'react'
import '../styles/Gameboard.css'
import Card from "./Card"

export default function Gameboard( { score, setScore } ) {

    const [selectedCardIds, setSelectedCardIds] = useState([]);

    function handleClick(e) {
        console.log(e.target.value);
        // if (selectedCardIds.includes(e.target.value)) {
        //     setScore(0);
        //     setSelectedCardIds([]);
        // } else {
        //     setScore(score + 1);
        //     setSelectedCardIds(selectedCardIds.push(e.target.value));
        // }
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