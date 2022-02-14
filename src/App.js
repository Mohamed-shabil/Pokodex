import React, { useState } from 'react'
import "./App.css"
import { BsSearch } from "react-icons/bs"
import axios, { Axios } from 'axios'
import Card from './Card'

function App() {

  const [pokemonName, setPokemonName] = useState('')
  const [pokemonChosen, setPokemonChosen] = useState(false)
  const [pokemon, setPokemon] = useState([
    {
      name: '',
      id: '',
      species: '',
      img: '',
      hp: '',
      attack: '',
      defense: '',
      type: '',
    }
  ])
  const SearchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((res) => {
      console.log(res.data)
      setPokemon({
        name: pokemonName,
        id: res.data.id.id,
        species: res.data.species.name,
        img: res.data.sprites.front_default,
        hp: res.data.stats[0].base_stat,
        attack: res.data.stats[1].base_stat,
        defense: res.data.stats[2].base_stat,
        type: res.data.types[0].type.name,
      })
    });
    setPokemonChosen(true)
  }
  console.log(pokemon)
  return (
    <div className="App">
      <div className='top-portion'>
        <div className="title-section">
          <h3>Pokodex</h3>
        </div>
        <table className="Search_table">
          <tr>
            <td><input className="Search_Bar" type="text" placeholder='Search' onChange={(e) => {
              setPokemonName(e.target.value)
            }} /></td>
            <td><button type="submit" className="btn" onClick={SearchPokemon}><BsSearch className="lens" /></button></td>
          </tr>
        </table>
      </div>
      {!pokemonChosen ? (
        <p className="Loading">Please Search a Pokemon</p>
      ) : (<Card pokemon={pokemon} />)}
    </div>
  )
}

export default App