import './App.css';
import Header from './components/Header';
import Form from './components/Form'
import DisplayPokemon from './components/DisplayPokemon';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const [pokemonData, setPokemonData] = useState();
  // const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {

    axios.all([
      axios.get('https://pokeapi.co/api/v2/pokemon/25'),
      axios.get('https://pokeapi.co/api/v2/pokemon-species/25')
    ]).then(axios.spread((obj1, obj2) => {
        
        const objectOne = obj1.data;
        const objectTwo = obj2.data;

        const pokemonStatistics = {
          number: objectOne.id,
          name: objectOne.name,
          sprite: objectOne.sprites.front_default,
          weight: objectOne.weight,
          height: objectOne.height,
          typeOne: objectOne.types[0].type.name,
          // typeTwo: objectOne.types[1].type.name,
          bio : objectTwo.flavor_text_entries.filter((obj) => { return obj.language.name === 'en' })[0],
        }
        console.log(objectOne)
        setPokemonData(pokemonStatistics);
        }))
      }, []);
    
  return (
    <div className="App">
      <Header />
      <Form />
      <DisplayPokemon />
    </div>
  );
}

export default App;