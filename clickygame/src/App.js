import React from 'react';
import Card from "./components/card/index"
import Wrapper from "./components/Wrapper/index"
import './App.css';

function shuffleCards(array){
  for(let i = array.length - 1; i > 0; i-- ){
    let b = Math.floor(Math.random()* (i + 1));
    [array[i], array[b]] = [array[b], array[i]];
  }
  return array;
}

export default App;
