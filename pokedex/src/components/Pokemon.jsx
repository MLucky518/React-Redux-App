import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPokemon } from "../store/actions";
import { Link } from "react-router-dom";

function Pokemon({ isFetching, pokemon, error, getPokemon, nextPage }, props) {
  console.log(pokemon);

  useEffect(() => {
    getPokemon();
  }, [getPokemon]);

  return (
    <div>
      <h1>
        {pokemon.map(poke => {
          return (
            <div className="pokemon-container">
              <img src={poke.sprites.front_default}></img>
              <ul>
                <li>{poke.name}</li>
                <li>{poke && poke.types[0].type.name}</li>
              </ul>
              
              <Link to={`pokemon/${poke.id}`}>
                <button>More info</button>
              </Link>
              <button onClick={() => getPokemon()}>get more pokemon</button>
            </div>
          );
        })}
      </h1>
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
