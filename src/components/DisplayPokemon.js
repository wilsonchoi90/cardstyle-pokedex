import { useState } from "react";

const DisplayPokemon = ({example2}) => {
    // console.log(props)
if(!example2) return <div>notloaded yet..</div>

    return (
        <li className="pokemonContainer" >
            {

                <img src={props.example2.sprite} alt="" />
            }
        </li>
    )
}

export default DisplayPokemon;