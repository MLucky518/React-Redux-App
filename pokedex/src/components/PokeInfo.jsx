import React from "react";

function PokeInfo(props) {
  console.log("poke props", props);
  const id = props.pokemon.find(poke => `${poke.id}` === props.match.params.id);

  console.log(id);

  return (
    <div className = "poke-info-container" >
      <h1>{id.name}</h1>
      <div className="poke-image-container">
        <img src={id.sprites.back_default} />
        <img src={id.sprites.back_shiny} />
        <img src={id.sprites.front_default} />
        <img src={id.sprites.front_shiny} />
      </div>
      <div className="stats-container">
        stats:{" "}
        {id.stats.map(stats => {
          return <p>{stats.stat.name} </p>;
        })}
      </div>
      <div className="abilities-container">
        Abilities:{" "}
        {id.abilities.map(abil => {
          return <p>{abil.ability.name} </p>;
        })}
      </div>
    </div>
  );
}

export default PokeInfo;
