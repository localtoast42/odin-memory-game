import '../styles/Card.css'
import { useState, useEffect } from 'react'

export default function Card({ cardId, onClick }) {

    const pokemonName = 'pikachu';
    const [photoURL, setPhotoURL] = useState('');

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName)
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                setPhotoURL(data['sprites']['other']['official-artwork']['front_default']);
            });
    }, []);

    return (
        <button className="card" onClick={onClick} value={cardId}>
            <img src={photoURL} alt='' height='150px'/>
            {pokemonName.toUpperCase()}
        </button>
    )
}