import React from 'react';
import Card from "./components/Card/index"
import Wrapper from "./components/Wrapper/index"
import Header from "./components/Header/index"
import './App.css';

function shuffleCards(array){
  for(let i = array.length - 1; i > 0; i-- ){
    let b = Math.floor(Math.random()* (i + 1));
    [array[i], array[b]] = [array[b], array[i]];
  }
  return array;
}
class App extends React.Component {
  state = {
    superHero: shuffleCards(superHero),
    score:0,
    highscore: 0
  }
  checkClicked = id =>{
    this.state.superHero.forEach(superHero=>{
      if(superHero.id === id){
        if(!superHero.isClicked){
          superHero.isClicked = 1
          this.setState({score: this.state.score + 1})
        
      }else {
        if (this.state.score > this.state.highscore){
          this.setState({highscore:this.state.score})
        }
        this.setState({score:0})
        this.state.superHero.forEach(superHero=>superHero.isClicked=0);
      }
    }
  });
  this.setState({superHero:shuffleCards(superHero)})
}

export default App;
