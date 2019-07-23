import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"


class App extends Component {
  constructor(){
    super()
    this.state = {
      sushi: [],
      lastFourSushi: [],
      eatenSushi: [],
      wallet: 100
    }
  }

componentDidMount = () => {
  fetch(API)
  .then(resp => resp.json())
  .then(data => {
    const sushiData = data.map((sushi)=>{
      sushi.eaten = false;
      return sushi
    })
    this.setState({ sushi: data })
  })
}

spliceFour = () => {
  const allSushi = this.state.sushi
  const lastFourSushi = allSushi.splice(0,4)
  this.setState({ lastFourSushi: lastFourSushi })
}

eatSushi = (e) => {
  //plates
  const eatenSushi = this.state.eatenSushi
  const currentSushi = this.state.sushi.slice(0,4)
  let selected = currentSushi.filter(sushi => sushi.id == e.target.parentNode.id)[0]

    if(selected != undefined){
      const payment = selected.price

      if ( this.state.wallet >= payment ){
        this.setState({ eatenSushi: [...eatenSushi, selected] })
        this.setState({ wallet: this.state.wallet - payment })
        //image
        let isEaten = selected
        isEaten.eaten = true
        const newState = this.state.sushi
        const index = newState.indexOf(isEaten)
        newState[index] = isEaten
        this.setState({ sushi: newState })
      } else {
        alert('Insuffient funds. You cannot eat anymore!')
        let addMoney = prompt("Would you like to add more funds?", 15)

        if(addMoney != null) {
          const money = this.state.wallet
          this.setState({ wallet: money + Number(addMoney) })
        } else if ((typeof addMoney) !== "integer") {
          alert('Sorry, incorrect input.')
        } else {
          alert('Sorry, incorrect input.')
        }
      }

  } else { alert('Please choose another dish') }
}


render() {
  const allSushi = this.state.sushi
  const sushiInit = allSushi.slice(0,4)

    return (
      <div className="app">

        <SushiContainer
          sushi={sushiInit}
          handleClick={()=>{this.spliceFour()}}
          eatSushi={(e)=>{this.eatSushi(e)}}/>
        <Table
          plates={this.state.eatenSushi}
          wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;
