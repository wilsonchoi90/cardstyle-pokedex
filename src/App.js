import './App.css';
import Header from './components/Header';
import Form from './components/Form'
import DisplayPokemon from './components/DisplayPokemon';
import axios from 'axios';
import { useState } from 'react';


function App() {
  const [pokemonData, setPokemonData] = useState();
  const [showingExample, setShowingExample] = useState("i like example!");
  // console.log('this is from app!', pokemonData)
  const singlePokemon = (pokemon) => {
    axios.all([
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.toLowerCase()}`)

    ]).then(axios.spread((obj1, obj2) => {

      const objectOne = obj1.data;
      const objectTwo = obj2.data;


        // if (objectOne.types[1].type.name === "")
        //   return objectOne.types[1].type.name
        //   } else {
        //   return "N/A";

      const pokemonStatistics = {
        number: objectOne.id,
        name: objectOne.name,
        sprite: objectOne.sprites.front_default,
        weight: objectOne.weight * 0.22,
        height: objectOne.height,
        typeOne: objectOne.types[0].type.name,
        // typeTwo: objectOne.types[1].type.name,
        bio: objectTwo.flavor_text_entries.filter((obj) => { return obj.language.name === 'en' })[0],
      }
      setPokemonData(pokemonStatistics);
    })).catch((error) => {
      alert(`Pokemon not found! Please check the spelling!`)
    })    
  }
  
  return (
    <div className="App">
      <Header />
      <Form pokemon={singlePokemon} />
      <DisplayPokemon showPokemon={pokemonData} />
    </div>
  );
}

export default App;