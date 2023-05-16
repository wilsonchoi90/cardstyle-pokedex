import Header from './components/Header';
import Form from './components/Form'
import DisplayPokemon from './components/DisplayPokemon';
import Footer from './components/Footer';
import axios from 'axios';
import { useState } from 'react';

function App() {
	const [pokemonData, setPokemonData] = useState();

	const singlePokemon = (pokemon) => {
		axios.all([
    	axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`),
    	axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.toLowerCase()}`)

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
        	typeTwo: (objectOne.types.length > 1 ? objectOne.types[1].type.name : "N/A"),
        	bio: objectTwo.flavor_text_entries.filter((obj) => { return obj.language.name === 'en' })[0],
      	}
    setPokemonData(pokemonStatistics);
    })).catch ((error) => {
    	alert(`Pokemon not found! Please check the spelling or Pokemon number!`)

    })  
}
  
	return (
    	<div className="App">
      		<div className="wrapper">
        		<Header />
        		<Form pokemonFunction={singlePokemon} />
        		<DisplayPokemon showPokemon={pokemonData} />
				<Footer />
      		</div>
    	</div>
  	);
}

export default App;

