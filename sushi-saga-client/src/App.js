import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      sushis: [],
      sushiCouint: 0,
      eatenSushi:[],
      balance: 100
    }
    this.fetchSushis()
  }
  fetchSushis = () =>{
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => {
      const sushiLength = sushis.length
      let newSushiCount = this.state.sushiCouint+4
      const nextSushis = sushis.slice(this.state.sushiCouint,newSushiCount)
      if (newSushiCount === sushiLength) {
        newSushiCount = 0;
      }
      this.setState({sushis: nextSushis, sushiCouint: newSushiCount})
    })
  }

  eatSushi = (sushi, price) => {
    const newbalance = this.state.balance - price
    if(newbalance >= 0){
      const eatenSushi = this.state.eatenSushi
      this.setState({
        eatenSushi: [...eatenSushi, sushi],
        balance: newbalance
      })
    }
  }

  updateBalance = (cash)=>{
    const newBalance = this.state.balance + cash
    this.setState({
      balance: newBalance
    })
  }
  render() {
    return (
      <div className="app">
        <SushiContainer getSushis={this.fetchSushis} sushis={this.state.sushis} eatenSushi ={this.state.eatenSushi} eatSushi ={this.eatSushi}/>
        <Table balance={this.state.balance} eatenSushi={this.state.eatenSushi} updateBalance={this.updateBalance}/>
      </div>
    );
  }
}

export default App;
