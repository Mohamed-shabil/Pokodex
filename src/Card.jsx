import React from 'react'
import "./Card.css"
function Card({pokemon}) {
    console.log(pokemon)
  return (
    <div className="wrapper">
        <div className="card-container">
            <div className="media">
                <img src={pokemon.img} />
            </div>
            <div className="details">
                {pokemon.name} <br />
                Species :  {pokemon.species} <br />
                Type    :  {pokemon.type} <br />
                defense :  {pokemon.defense} <br />
                Attack  :  {pokemon.attack} <br />
                Hp      :  {pokemon.hp} <br />
            </div>
        </div>
    </div>
  )
}

export default Card