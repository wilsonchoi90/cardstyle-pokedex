const DisplayPokemon = ({showPokemon}) => {
    if(!showPokemon) return (
        <div className="noPokemonSection">
            <div className="wrapper">
                <div className="noPokemon">
                    <p>No pokemon searched!</p>
                </div>
            </div>
        </div>
    )
    
    const pokemonHeight = Math.round(showPokemon.height * 3.93);

    function convertInchesToFeetAndInches(inches) {
        const feet = Math.floor(inches / 12);
        const remainingInches = inches % 12;
        return `${feet}'${remainingInches}"`
    }

    return (
        <div className="displayPokemonSection">
            {   
                <div className="wrapperSpecial">
                    <div className="pokemonCardContainer">
                        <div className="pokemonCardDisplay">

                            <div className="wrapperBorder">
                                <div className="lineOne">
                                    <p>{showPokemon.name.charAt(0).toUpperCase() + showPokemon.name.slice(1)}</p>
                                    <p>#{showPokemon.number}</p>
                                </div>
                            </div>


                            <div className="lineTwo">
                                <img src={showPokemon.sprite} alt="" />
                            </div>

                            <div className="wrapperBorder"> 
                                <div className="lineThree">
                                    <p><span>Weight:</span> {Math.round(showPokemon.weight * 0.22)}lbs</p>
                                    <p><span>Height:</span>  {convertInchesToFeetAndInches(pokemonHeight)}</p>
                                </div>
                            </div>    

                            <div className="wrapperBorder">
                                <div className="lineFour">
                                    <p><span>Type:</span> {showPokemon.typeOne.charAt(0).toUpperCase() + showPokemon.typeOne.slice(1)}</p>
                                    <p><span>Type:</span> {showPokemon.typeTwo.charAt(0).toUpperCase() + showPokemon.typeTwo.slice(1)}</p>
                                </div>
                            </div>

                            <div className="lineFive">
                                <p>{showPokemon.bio.flavor_text}</p>
                            </div>

                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default DisplayPokemon;