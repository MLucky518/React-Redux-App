import React from 'react';
import './App.css';
import Pokemon from './components/Pokemon';
import { Route } from 'react-router-dom';
import PokeInfo from './components/PokeInfo';
import { connect } from "react-redux";


function App({pokemon}) {

  return (
    <div className="App">
      <img src = "https://camo.githubusercontent.com/1a4b11888ddf9f2b7a9353d6b69503e634e8704c/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67"></img>
      <Route  path = "/" exact><Pokemon/></Route>
      {/* <Route  path = "/pokemon/:id" exact><PokeInfo/></Route> */}
      <Route exact path = "/pokemon/:id" render = {(props)=> <PokeInfo {...props} pokemon = {pokemon}/>}/>
      
      
    </div>
  );
}

const mapStatetoProps = state =>{
  return{
    pokemon:state.pokemon
  }
}

export default connect(mapStatetoProps,{})(App);
