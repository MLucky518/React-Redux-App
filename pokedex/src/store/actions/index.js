import React,{useState} from "react";
import axios from "axios";

export const FETCHING_POKEMON_START = "FETCHING_POKEMON_START";
export const FETCHING_POKEMON_SUCCESS = "FETCHING_POKEMON_SUCCESS";
let currentUrl = "https://pokeapi.co/api/v2/pokemon";
export const getPokemon = () => dispatch => {
  dispatch({ type: FETCHING_POKEMON_START });
 
  
  axios

  
    .get(currentUrl)

    .then(res => {
      console.log(res.data.next);
      currentUrl = res.data.next;

      
      
      res.data.results.map(poke => {
        axios.get(`${poke.url}`)
        .then(res2 => {
          console.log(res2);
          
          dispatch({type:FETCHING_POKEMON_SUCCESS, payload:res2.data});
        });
      });
    })

    .catch(err => {
      console.log(err, "error");
    });
};
