import { useState } from "react";

const Form = (props) => {
    // console.log(props)
    const [userInput, setUserInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        props.pokemon(userInput);
        // console.log(event)
        setUserInput("");
    }

    const handleUserInput = (event) => {
        setUserInput(event.target.value);
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" id="pokemon" onChange={handleUserInput} value={userInput} placeholder="Enter a Pokemon!" />
        </form>    
    )
}

export default Form;