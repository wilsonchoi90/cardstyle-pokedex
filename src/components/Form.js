import { useState } from "react";

const Form = (props) => {
    // console.log(props)
    const [userInput, setUserInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        props.pokemonFunction(userInput);
        setUserInput("");
    }

    const handleUserInput = (event) => {
        console.log(event.target.value)
        setUserInput(event.target.value);
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" id="pokemon" onChange={handleUserInput} value={userInput} placeholder="Enter a Pokemon!" />
        </form>    
    )
}

export default Form;