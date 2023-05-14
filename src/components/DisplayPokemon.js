import { useState } from "react";

const DisplayPokemon = ({showPokemon}) => {
    console.log(showPokemon)
    if(!showPokemon) return <div>No pokemon searched</div>
    
    return (
        <li className="pokemonContainer">
            {   
                <div>
                    <div className="lineOne">
                        <p>{showPokemon.name.charAt(0).toUpperCase() + showPokemon.name.slice(1)}</p>
                        <p>#{showPokemon.number}</p>
                    </div>

                    <div className="lineTwo">
                        <img src={showPokemon.sprite} alt="" />
                    </div>

                    <div className="lineThree">
                        <p>{Math.round(showPokemon.weight * 0.22)} lbs</p>
                        <p>{Math.round(showPokemon.height * 3.93)}" </p>
                    </div>

                    <div className="lineFour">
                        <p>{showPokemon.typeOne.charAt(0).toUpperCase() + showPokemon.typeOne.slice(1)}</p>
                        <p>{showPokemon.typeTwo}</p>
                    </div>

                    <div className="lineFive">
                        <p>{showPokemon.bio.flavor_text}</p>
                    </div>
                </div>
            }
        </li>
    )
}

export default DisplayPokemon;