import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPokemon } from "../store/actions";
import { Link } from "react-router-dom";
import "./Pokemon.scss";

function Pokemon({ isFetching, pokemon, error, getPokemon, nextPage }, props) {
  console.log(pokemon);

  useEffect(() => {
    getPokemon();
    
  }, [getPokemon]);

  return (
    <div>
      
      <div className="pokemon-list">
        {pokemon.map(poke => {
          return (
            <div className="pokemon-container">
              <img src={poke.sprites.front_default}></img>

              <h2>{poke.name}</h2>
              <p>{poke && poke.types[0].type.name}</p>

              <Link to={`pokemon/${poke.id}`}>
                <button className = "poke-info-button">More info</button>
              </Link>
            </div>
          );
        })}
      </div>
      <br/>
      <button className = "more-button" onClick={() => getPokemon()}>get more pokemon</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    error: state.error,
    pokemon: state.pokemon,
    nextPage: state.nextPage
  };
};

export default connect(mapStateToProps, { getPokemon })(Pokemon);
