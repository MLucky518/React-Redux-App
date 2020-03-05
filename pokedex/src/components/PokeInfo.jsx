import React from "react";
import "./PokeInfo.scss";

function PokeInfo(props) {
  console.log("poke props", props);
  const id = props.pokemon.find(poke => `${poke.id}` === props.match.params.id);

  console.log(id);

  return (
    <div>
      <div className="poke-image-container">
        <img src={id.sprites.back_default} />
        <img src={id.sprites.back_shiny} />
        <img src={id.sprites.front_default} />
        <img src={id.sprites.front_shiny} />
        <h1>{id.name}</h1>
      </div>
      <div className="poke-info-container">
       

        <div className="info-container">
          <h1>stats:</h1>{" "}
          {id.stats.map(stats => {
            return (
              <p>
                {stats.stat.name} : {stats.base_stat}{" "}
              </p>
            );
          })}
        </div>
        <div className="info-container">
          <h1>Abilities:</h1>{" "}
          {id.abilities.map(abil => {
            return <p>{abil.ability.name} </p>;
          })}
        </div>
        <div className="info-container">
          <h1>Moves:</h1>
          {id.moves.map(move => {
            return <p>{move.move.name} </p>;
          })}
        </div>
        <div className="info-container">
          <h1>Games appeared in:</h1>
          {id.game_indices.map(game => {
            return <p>{game.version.name} </p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default PokeInfo;
