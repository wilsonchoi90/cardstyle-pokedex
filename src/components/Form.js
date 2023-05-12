import { useState } from "react";


const Form = (props) => {

    const [userInput, setUserInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // setUserInput("");
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