import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state={
      sushi: [],
      wallet: 100,
      eatenSushi: [],
      displaySushi: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/sushis').then(response => response.json()).then(sushi => {
      this.setState({sushi})
      this.setState({displaySushi: sushi.slice(0,4)})
    })
  }

  handleSushiClick = (sushiId, sushiPrice) => {
    const {sushi, wallet, eatenSushi} = this.state
    const pastWallet = wallet
    const currentWallet = pastWallet - sushiPrice
    if (currentWallet >= 0){
      this.setState({wallet: currentWallet})

      let eatenPiece = sushi.find((piece) => piece.id === sushiId)
      const previouslyEatenSushi = eatenSushi
      this.setState({eatenSushi: [...previouslyEatenSushi, eatenPiece]})
    }
  }

  handleMoreClick = () => {
    const {sushi, displaySushi} = this.state
    let index = sushi.indexOf(displaySushi[3]) + 1
    let endIndex = index + 4
    this.setState({
      displaySushi: sushi.slice(index, endIndex)
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} eatenSushi={this.state.eatenSushi} handleSushiClick={this.handleSushiClick} handleMoreClick={this.handleMoreClick} displaySushi={this.state.displaySushi}/>
        <Table wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;