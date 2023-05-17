import { useState } from "react";

const Form = (props) => {
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
        <div className="formSection">
            <div className="wrapper">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" id="pokemon" onChange={handleUserInput} value={userInput} placeholder="Enter a Pokemon or #!" />
                    <button>Search!</button>
                </form>    
            </div>
        </div>
        )

}

export default Form;