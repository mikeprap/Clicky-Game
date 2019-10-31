import React from 'react';
import Card from "./components/Card"
import Wrapper from "./components/Wrapper"
import Header from "./components/Header"
import superHero from "./superhero.json"
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

render(){
  return(
    <div>
      <Header
      score={this.state.score}
      highscore={this.state.highscore}
      />
      <Wrapper> 
        {this.state.superHero.map(superHero=>(
          <Card
          checkClicked = {this.checkClicked}
          id={superHero.id}
          key={superHero.id}
          name={superHero.name}
          image={superHero.image}
          isClicked={superHero.isClicked}
          />
        ))}
      </Wrapper>
    </div>
  )
}
}

export default App;
